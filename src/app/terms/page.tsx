import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "@/assets/styles/terms.css";

import shieldIcon     from "@/assets/icons/noun-tracking-8269731.svg";
import profileIcon    from "@/assets/icons/noun-profile-8205839.svg";
import cloudIcon      from "@/assets/icons/noun-cloud-sync-8146798.svg";
import insightsIcon   from "@/assets/icons/noun-insights-8300657.svg";

export const metadata: Metadata = {
  title: "Terms of Service — ImmunoTrack",
  description:
    "Read the ImmunoTrack patient app Terms of Service. Effective May 1, 2026.",
};

const glanceItems = [
  {
    icon: shieldIcon,
    title: "Healthcare Standard",
    desc: "ImmunoTrack is an invite-only RTM platform. Patient data is encrypted and managed under HIPAA compliance.",
  },
  {
    icon: profileIcon,
    title: "Clinician Invitation",
    desc: "Access is restricted to patients explicitly invited by their licensed healthcare provider.",
  },
  {
    icon: cloudIcon,
    title: "No Data Sales",
    desc: "We do not sell your personal health data to third parties, nor do we host third-party advertisements.",
  },
  {
    icon: insightsIcon,
    title: "Not a Medical Device",
    desc: "The app is a remote therapeutic monitoring tool for tracking, not a diagnosis device.",
  },
];

const sections = [
  { id: "section-1",  label: "1. Who We Are" },
  { id: "section-2",  label: "2. Who Can Use ImmunoTrack" },
  { id: "section-3",  label: "3. What ImmunoTrack Does" },
  { id: "section-4",  label: "4. Your Account" },
  { id: "section-5",  label: "5. Your Health Data" },
  { id: "section-6",  label: "6. Remote Therapeutic Monitoring" },
  { id: "section-7",  label: "7. Acceptable Use" },
  { id: "section-8",  label: "8. Medication Reminders" },
  { id: "section-9",  label: "9. Limitation of Liability" },
  { id: "section-10", label: "10. Intellectual Property" },
  { id: "section-11", label: "11. Changes to These Terms" },
  { id: "section-12", label: "12. Termination" },
  { id: "section-13", label: "13. Governing Law" },
  { id: "section-14", label: "14. Contact Us" },
];

export default function TermsPage() {
  return (
    <main className="ts-page" id="terms-page">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="ts-hero" aria-label="Terms of Service hero">
        <div className="ts-hero-inner">
          <div className="ts-hero-copy">
            <p className="ts-hero-label">LEGAL DOCUMENT</p>
            <h1 className="ts-hero-title">Terms of Service</h1>
            <p className="ts-hero-subtitle">
              ImmunoTrack Patient App · Effective May 1, 2026
            </p>
            <div className="ts-hero-meta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Version 1.1 — May 2026 &nbsp;·&nbsp; Aman Medical Consulting LLC
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT LAYOUT ────────────────────────────────── */}
      <div className="ts-layout">
        {/* Main Content Column */}
        <div className="ts-content">
          {/* Important Notice Box (7.2) */}
          <div className="ts-lead-card" id="notice-box">
            <div className="ts-callout ts-callout--warning" role="alert">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" aria-hidden="true" style={{ marginTop: "4px" }}>
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <div>
                <p style={{ fontWeight: 800, fontSize: "15px", marginBottom: "4px" }}>IMPORTANT MEDICAL NOTICE</p>
                <p className="ts-lead-text">
                  ImmunoTrack is not a medical device and is not intended to diagnose, treat, cure, or prevent any medical condition. It is a health tracking and monitoring tool. Always follow the advice of your licensed healthcare provider.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <article id="section-1" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">1</div>
              <h2 className="ts-section-title">Who We Are</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                ImmunoTrack and its related software services are owned and operated by <strong>Aman Medical Consulting LLC</strong>, located in Atlanta, Georgia. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the ImmunoTrack patient mobile application (the &ldquo;App&rdquo;) and associated web dashboards.
              </p>
            </div>
          </article>

          {/* Section 2 */}
          <article id="section-2" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">2</div>
              <h2 className="ts-section-title">Who Can Use ImmunoTrack</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                To use the ImmunoTrack App, you must meet the following eligibility requirements:
              </p>
              <ul className="ts-list">
                <li>You must be at least 18 years of age (or have the explicit consent and supervision of a parent or legal guardian where permitted by law).</li>
                <li>You must have received an invitation link or clinician code from a licensed healthcare provider registered with ImmunoTrack.</li>
                <li>You agree to provide accurate, current, and complete information during registration and symptom logging.</li>
                <li>You must access and use the App in compliance with the laws of your local jurisdiction.</li>
              </ul>
            </div>
          </article>

          {/* Section 3 */}
          <article id="section-3" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">3</div>
              <h2 className="ts-section-title">What ImmunoTrack Does</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                ImmunoTrack is a remote therapeutic monitoring dashboard designed to help patients track:
              </p>
              <ul className="ts-list">
                <li>Daily allergy and asthma symptom logs (respiratory, nasal, and skin).</li>
                <li>Medication usage logs and compliance.</li>
                <li>Environmental conditions (local pollen levels, air quality index, and temperature) based on your zip code.</li>
                <li>AI-powered risk trends and nightly flare risk warnings.</li>
              </ul>
              <div className="ts-callout ts-callout--info" role="note">
                <p>
                  <strong>Medical Disclaimer:</strong> ImmunoTrack does not make clinical diagnoses, prescribe medication, or replace medical consultations. All AI insights and symptom trends are informational risk signals meant to assist your healthcare team. In the event of a medical emergency, call 911 immediately.
                </p>
              </div>
            </div>
          </article>

          {/* Section 4 */}
          <article id="section-4" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">4</div>
              <h2 className="ts-section-title">Your Account</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                You are responsible for maintaining the confidentiality of your account credentials, including username and password. You agree to:
              </p>
              <ul className="ts-list">
                <li>Use strong password criteria (including uppercase, lowercase, numbers, and special symbols).</li>
                <li>Maintain only one active account per individual.</li>
                <li>Refrain from sharing, selling, or transferring your account credentials or profile details to any third party.</li>
                <li>Immediately notify ImmunoTrack of any unauthorized access to your account.</li>
              </ul>
            </div>
          </article>

          {/* Section 5 */}
          <article id="section-5" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">5</div>
              <h2 className="ts-section-title">Your Health Data</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                Your privacy is central to ImmunoTrack:
              </p>
              <ul className="ts-list">
                <li><strong>Ownership:</strong> You retain all ownership rights to the personal health information and logs you upload.</li>
                <li><strong>License:</strong> By uploading logs, you grant ImmunoTrack a limited license to store, process, and transmit this data to your invited clinician.</li>
                <li><strong>HIPAA Compliance:</strong> All Protected Health Information (PHI) is encrypted at rest (AES-256) and in transit (TLS 1.3), hosted on HIPAA-eligible AWS servers.</li>
                <li><strong>Zero Commercialization:</strong> We do not sell your personal health records, nor do we run advertising trackers.</li>
              </ul>
            </div>
          </article>

          {/* Section 6 */}
          <article id="section-6" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">6</div>
              <h2 className="ts-section-title">Remote Therapeutic Monitoring (RTM)</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                ImmunoTrack supports Remote Therapeutic Monitoring (RTM) clinical programs. If enrolled by your clinician:
              </p>
              <ul className="ts-list">
                <li>Your symptom logging data assists your clinician in monitoring respiratory health and medication compliance.</li>
                <li>Your clinician may submit claims for insurance reimbursement (under RTM CPT codes) based on your monitoring reports.</li>
                <li>Participation in RTM requires you to review and sign the <strong>RTM Consent Form</strong> provided in the App or by your doctor's office.</li>
                <li>To qualify for billing cycles, you must log symptoms on at least <strong>16 days</strong> within a 30-day period.</li>
                <li>You retain the right to withdraw from the RTM program at any time without affecting your clinical care.</li>
              </ul>
            </div>
          </article>

          {/* Section 7 */}
          <article id="section-7" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">7</div>
              <h2 className="ts-section-title">Acceptable Use</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                You agree not to engage in any of the following prohibited behaviors:
              </p>
              <ul className="ts-list">
                <li>Submitting intentionally false health profiles or fraudulent symptom logs.</li>
                <li>Attempting to bypass authentication layers or gain unauthorized access to other users' accounts or AWS backend servers.</li>
                <li>Decompiling, reverse engineering, or scraping code from the App or web platform.</li>
                <li>Using the App to transmit malware, viruses, or spam.</li>
                <li>Utilizing the system for any illegal, commercial, or unauthorized purposes.</li>
              </ul>
            </div>
          </article>

          {/* Section 8 */}
          <article id="section-8" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">8</div>
              <h2 className="ts-section-title">Medication Reminders</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                The App offers convenience-based push notifications and reminders to assist you with logging and medication schedules. These tools are designed to support your routine but are not guaranteed to be fail-proof. You remain fully responsible for taking prescribed medications on time, regardless of App notification performance.
              </p>
            </div>
          </article>

          {/* Section 9 */}
          <article id="section-9" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">9</div>
              <h2 className="ts-section-title">Limitation of Liability</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                To the maximum extent permitted by applicable law:
              </p>
              <ul className="ts-list">
                <li>Aman Medical Consulting LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.</li>
                <li>Our total liability for any claim under these Terms is capped at <strong>$100 USD</strong> or the total fees you paid us in the past 12 months, whichever is greater.</li>
                <li>Nothing in these Terms limits liability for fraud, gross negligence, or willful misconduct.</li>
              </ul>
            </div>
          </article>

          {/* Section 10 */}
          <article id="section-10" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">10</div>
              <h2 className="ts-section-title">Intellectual Property</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                All visual design, code, logos, trademarks, and text within the App and platform are the exclusive property of <strong>Aman Medical Consulting LLC</strong>. You may not copy, reproduce, distribute, or create derivative works from our intellectual property without prior written permission.
              </p>
            </div>
          </article>

          {/* Section 11 */}
          <article id="section-11" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">11</div>
              <h2 className="ts-section-title">Changes to These Terms</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                We may revise these Terms to reflect product changes or legal updates. When updates occur, we will post the revised Terms in the App and update the effective date. For material changes, we will provide at least <strong>14 days advance notice</strong> through the platform before the changes take effect.
              </p>
            </div>
          </article>

          {/* Section 12 */}
          <article id="section-12" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">12</div>
              <h2 className="ts-section-title">Termination</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                You can stop using the App and terminate your account at any time. To request deletion of your account and related records, email <a href="mailto:support@immunotrack.ai" className="ts-link">support@immunotrack.ai</a>. ImmunoTrack reserves the right to suspend or terminate your account access immediately if you violate these Terms.
              </p>
            </div>
          </article>

          {/* Section 13 */}
          <article id="section-13" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">13</div>
              <h2 className="ts-section-title">Governing Law</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                These Terms are governed by and construed in accordance with the laws of the <strong>State of Delaware</strong>, without regard to conflict of law principles. Any dispute arising under these Terms shall be resolved exclusively in the federal or state courts located in Delaware, and you consent to the personal jurisdiction of such courts.
              </p>
            </div>
          </article>

          {/* Section 14 */}
          <article id="section-14" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">14</div>
              <h2 className="ts-section-title">Contact Us</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                If you have any questions or feedback regarding these Terms, please contact us at:
              </p>
              <div className="ts-contact-block">
                <p><strong>Aman Medical Consulting LLC</strong></p>
                <p>Email: <a href="mailto:support@immunotrack.ai" className="ts-link">support@immunotrack.ai</a></p>
                <p>Location: Atlanta, Georgia, United States of America</p>
              </div>
            </div>
          </article>
        </div>

        {/* Sticky Sidebar */}
        <aside className="ts-sidebar" aria-label="Terms of Service summary">
          {/* At a Glance */}
          <div className="ts-glance-card">
            <h2 className="ts-glance-title">Terms At a Glance</h2>
            <ul className="ts-glance-list">
              {glanceItems.map((item) => (
                <li key={item.title} className="ts-glance-item">
                  <div className="ts-glance-icon" aria-hidden="true">
                    <Image src={item.icon} alt="" width={20} height={20} className="ts-icon-cyan" />
                  </div>
                  <div>
                    <p className="ts-glance-item-title">{item.title}</p>
                    <p className="ts-glance-item-desc">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section nav */}
          <nav className="ts-nav-card" aria-label="Jump to section">
            <h3 className="ts-nav-title">Jump to Section</h3>
            <ul className="ts-nav-list">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="ts-nav-link">{s.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* In-App Notice */}
          <div className="ts-questions-card">
            <h3 className="ts-questions-title">In-App Consent</h3>
            <p className="ts-questions-desc">
              Patients registering inside the ImmunoTrack Patient App must scroll through and accept these terms during account activation:
            </p>
            <div style={{ background: "rgba(0,0,0,0.2)", padding: "12px", borderRadius: "6px", fontSize: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p style={{ fontWeight: "bold", color: "#fff", marginBottom: "4px" }}>I agree to these Terms</p>
              <p style={{ color: "rgba(255,255,255,0.7)", margin: 0, fontSize: "11px", lineHeight: "1.3" }}>
                By tapping above you confirm you have read and agree to the ImmunoTrack Terms of Service.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}