"""
JewelStack Landing — FastAPI Backend
=====================================
Routes:
  GET  /api/health           — Health check
  POST /api/download/track   — Track APK download click
  POST /api/contact          — Contact form submission
  POST /api/newsletter       — Newsletter signup
  GET  /api/analytics/stats  — Public stats (downloads count etc.)
  GET  /api/gold/rates        — Mock live gold rates
"""

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, FileResponse
from pydantic import BaseModel
import os, json, datetime
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="JewelStack API",
    description="Backend API for JewelStack landing website",
    version="1.0.0",
)

# ── CORS ─────────────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://jewelstack.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Data store (file-based for simplicity) ────────────────
BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
DATA_DIR.mkdir(exist_ok=True)
DOWNLOADS_FILE  = DATA_DIR / "downloads.json"
CONTACTS_FILE   = DATA_DIR / "contacts.json"
NEWSLETTER_FILE = DATA_DIR / "newsletter.json"
APK_PATH        = Path(os.getenv("APK_PATH", str(BASE_DIR / "static" / "jewelstack.apk"))).resolve()

# ── Startup check ─────────────────────────────────────────
print(f"\nAPK path: {APK_PATH}")
print(f"{'[OK] APK found!' if APK_PATH.exists() else '[ERROR] APK NOT found - place it at: ' + str(APK_PATH)}\n")


def _read_json(path: Path) -> list:
    if path.exists():
        return json.loads(path.read_text())
    return []


def _write_json(path: Path, data: list):
    path.write_text(json.dumps(data, indent=2, default=str))


# ── Pydantic models ───────────────────────────────────────
class ContactForm(BaseModel):
    name:    str
    email:   str
    phone:   str | None = None
    message: str
    subject: str | None = "General Inquiry"


class NewsletterSignup(BaseModel):
    email: str
    name:  str | None = None


class DownloadEvent(BaseModel):
    source:     str | None = "website"
    user_agent: str | None = None


# ── Routes ────────────────────────────────────────────────

@app.get("/api/health", tags=["System"])
async def health():
    return {"status": "ok", "service": "JewelStack API", "time": datetime.datetime.utcnow()}


@app.get("/api/download", tags=["Download"])
async def download_apk(request: Request):
    """Serve the APK file and record the download event."""
    # Record event
    events = _read_json(DOWNLOADS_FILE)
    events.append({
        "timestamp":  datetime.datetime.utcnow().isoformat(),
        "ip":         request.client.host if request.client else "unknown",
        "user_agent": request.headers.get("user-agent", ""),
    })
    _write_json(DOWNLOADS_FILE, events)

    if APK_PATH.exists():
        return FileResponse(
            path=str(APK_PATH),
            media_type="application/vnd.android.package-archive",
            filename="JewelStack.apk",
        )
    raise HTTPException(status_code=404, detail="APK not found. Please check back soon.")


@app.post("/api/download/track", tags=["Download"])
async def track_download(event: DownloadEvent, request: Request):
    """Track a download button click (frontend event)."""
    events = _read_json(DOWNLOADS_FILE)
    events.append({
        "timestamp":  datetime.datetime.utcnow().isoformat(),
        "source":     event.source,
        "ip":         request.client.host if request.client else "unknown",
        "user_agent": event.user_agent,
    })
    _write_json(DOWNLOADS_FILE, events)
    return {"success": True, "total_downloads": len(events)}


@app.post("/api/contact", tags=["Contact"])
async def submit_contact(form: ContactForm):
    """Save contact form submission."""
    contacts = _read_json(CONTACTS_FILE)
    entry = form.model_dump()
    entry["timestamp"] = datetime.datetime.utcnow().isoformat()
    contacts.append(entry)
    _write_json(CONTACTS_FILE, contacts)
    return {"success": True, "message": "Thank you! We'll get back to you within 24 hours."}


@app.post("/api/newsletter", tags=["Newsletter"])
async def newsletter_signup(signup: NewsletterSignup):
    """Subscribe to newsletter."""
    subscribers = _read_json(NEWSLETTER_FILE)
    emails = [s["email"] for s in subscribers]
    if signup.email in emails:
        return {"success": True, "message": "You're already subscribed!"}
    subscribers.append({
        "email":     signup.email,
        "name":      signup.name,
        "timestamp": datetime.datetime.utcnow().isoformat(),
    })
    _write_json(NEWSLETTER_FILE, subscribers)
    return {"success": True, "message": "Successfully subscribed! Welcome to JewelStack."}


@app.get("/api/analytics/stats", tags=["Analytics"])
async def public_stats():
    """Return public stats for the landing page."""
    downloads   = _read_json(DOWNLOADS_FILE)
    subscribers = _read_json(NEWSLETTER_FILE)
    return {
        "total_downloads":    len(downloads),
        "newsletter_subs":    len(subscribers),
        "active_users":       524,   # hardcoded for now
        "avg_rating":         4.9,
        "last_updated":       datetime.datetime.utcnow().isoformat(),
    }


@app.get("/api/gold/rates", tags=["Gold"])
async def gold_rates():
    """Return mock live gold rates (integrate real API in production)."""
    return {
        "currency": "INR",
        "unit": "per gram",
        "rates": {
            "24K": 6842,
            "22K": 6272,
            "18K": 5132,
            "14K": 3991,
        },
        "silver": 86,
        "platinum": 3250,
        "last_updated": datetime.datetime.utcnow().isoformat(),
        "source": "JewelStack Mock — integrate goldapi.io for production",
    }


# ── Entry point ───────────────────────────────────────────
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
