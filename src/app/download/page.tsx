import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/assets/styles/download.css";
import alertIcon from "@/assets/icons/noun-alert-8253230.svg";

export const metadata: Metadata = {
  title: "Download the ImmunoTrack App — iOS & Android",
  description:
    "Get the ImmunoTrack patient app on iOS and Android. Log symptoms daily, track medications, and connect securely with your care team.",
};

// Custom App Store Badge SVG Component
function AppStoreBadgeContent() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", textAlign: "left" }}>
      <svg viewBox="0 0 170 170" width="24" height="24" fill="currentColor">
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.92-14.36-6.15-3.43-2.82-7.3-7.49-11.61-14-9.14-13.79-16.73-30.85-22.76-51.2-6.03-20.35-9.05-37.76-9.05-52.23 0-16.03 4.14-29.62 12.44-40.76C32.14 21.64 42.92 16.03 56.24 16c6.26.13 12.63 2.1 19.11 5.92 6.47 3.82 11.26 5.73 14.36 5.73 2.24 0 7-1.91 14.28-5.73 7.27-3.82 13.15-5.6 17.6-5.35 14.54.63 25.56 6.1 33.05 16.4 8.78 12.02 12.59 25.75 11.41 41.17-8.37 3.32-15.35 8.77-20.93 16.36-5.59 7.59-8.38 16.27-8.38 26.04 0 12.02 3.86 22.06 11.58 30.15 7.73 8.08 17.15 12.7 28.27 13.88 0 1.25-.06 2.5-.11 3.75zM119.22 0c5.38 6.53 8.08 13.72 8.08 21.56 0 2.25-.2 4.7-.58 7.37-5.59 1-11.25-1.07-16.98-6.22-5.73-5.14-8.86-12.02-9.39-20.65.13-.5.35-1.37.66-2.61.31-1.25.68-2.31 1.09-3.21 6.58.5 12.01 2.37 17.12 6.16z" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
        <span style={{ fontSize: "9px", textTransform: "uppercase", fontWeight: 500, opacity: 0.85 }}>Download on the</span>
        <span style={{ fontSize: "16px", fontWeight: 800, fontFamily: "system-ui, sans-serif" }}>App Store</span>
      </div>
    </div>
  );
}

// Custom Google Play Badge SVG Component
function GooglePlayBadgeContent() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", textAlign: "left" }}>
      <svg viewBox="0 0 512 512" width="22" height="22" fill="currentColor">
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.3-60.7 60.7 60.7 60.7 58-33.3c15-8.6 24.8-23.7 24.8-40.8s-9.8-32.2-24.8-40.8zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
        <span style={{ fontSize: "8px", textTransform: "uppercase", fontWeight: 500, opacity: 0.85 }}>GET IT ON</span>
        <span style={{ fontSize: "16px", fontWeight: 800, fontFamily: "system-ui, sans-serif" }}>Google Play</span>
      </div>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <main className="dl-page">
      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <section className="dl-hero" aria-label="Get the App Hero">
        <div className="dl-hero-container">
          <div className="dl-hero-content">
            <div className="dl-hero-badge">Download ImmunoTrack</div>
            <h1 className="dl-hero-title">
              Your health.<br />
              In your hands.<br />
              <span>Every day.</span>
            </h1>
            <p className="dl-hero-desc">
              Download the ImmunoTrack app and take control of your health—anytime, anywhere.
            </p>
            <div className="dl-hero-buttons">
              <span className="dl-badge-btn hero-btn" aria-disabled="true">
                <AppStoreBadgeContent />
              </span>
              <span className="dl-badge-btn hero-btn" aria-disabled="true">
                <GooglePlayBadgeContent />
              </span>
            </div>
          </div>
          <div className="dl-hero-img-wrap">
            <Image
              src="/download-mockups.png"
              alt="ImmunoTrack App Mockups"
              width={540}
              height={380}
              priority
              className="dl-hero-mockups"
            />
          </div>
        </div>
      </section>

      {/* ── MAIN LAYOUT ─────────────────────────────────────────── */}
      <div className="dl-layout">
        {/* Section Title */}
        <div className="dl-section-header">
          <h2 className="dl-section-title">Download the ImmunoTrack App</h2>
          <p className="dl-section-subtitle">
            Get the app on your phone and start managing your health today.
          </p>
        </div>

        {/* Action Grid Card */}
        <div className="dl-card-container">
          <div className="dl-grid">
            {/* iOS Option */}
            <div className="dl-grid-col">
              <span className="dl-badge-btn" aria-disabled="true">
                <AppStoreBadgeContent />
              </span>
              <span className="dl-grid-desc">For iPhone and iPad</span>
            </div>

            {/* Android Option */}
            <div className="dl-grid-col">
              <span className="dl-badge-btn" aria-disabled="true">
                <GooglePlayBadgeContent />
              </span>
              <span className="dl-grid-desc">For Android devices</span>
            </div>

            {/* QR Code Option */}
            <div className="dl-grid-col">
              <div className="dl-qr-box">
                <div className="dl-qr-img-wrap">
                  <Image
                    src="/qr-placeholder.png"
                    alt="ImmunoTrack Download QR Code"
                    width={96}
                    height={96}
                    className="dl-qr-image"
                  />
                </div>
                <div className="dl-qr-info">
                  <h3 className="dl-qr-title">Scan to Download</h3>
                  <p className="dl-qr-text">
                    Open your phone camera and scan the QR code to get the app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invitation Only Warning Block */}
        <div className="dl-invite-card">
          <div className="dl-invite-icon-wrap">
            <Image
              src={alertIcon}
              alt="Invitation Required"
              width={36}
              height={36}
              aria-hidden="true"
            />
          </div>
          <div className="dl-invite-content">
            <h3 className="dl-invite-title">Invitation Only</h3>
            <p className="dl-invite-text">
              ImmunoTrack is an invite-only app. You'll need an invitation from your healthcare provider to create your account and get started.
            </p>
            <p className="dl-invite-bold">
              If you don't have an invitation yet, please contact your doctor.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}