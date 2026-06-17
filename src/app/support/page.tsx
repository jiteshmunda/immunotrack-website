"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/assets/styles/support.css";

// Icons
import adherenceIcon from "@/assets/icons/noun-adherence-961073.svg";
import trendingIcon from "@/assets/icons/noun-trending-7934313.svg";
import medicationIcon from "@/assets/icons/noun-medication-7320568.svg";
import insightsIcon from "@/assets/icons/noun-insights-8300657.svg";
import trackingIcon from "@/assets/icons/noun-tracking-8269731.svg";
import profileIcon from "@/assets/icons/noun-profile-8205839.svg";
import notificationIcon from "@/assets/icons/noun-notification-3408005.svg";
import cloudSyncIcon from "@/assets/icons/noun-cloud-sync-8146798.svg";
import settingsIcon from "@/assets/icons/noun-settings-2650525.svg";
// heroImage is served from the public folder via string path

/* ── FAQ CATEGORIES ──────────────────────────────────── */
const faqCategories = [
  {
    icon: adherenceIcon,
    title: "Log Symptoms",
    desc: "Learn how to track and log your symptoms daily for accurate insights.",
  },
  {
    icon: trendingIcon,
    title: "RTM Logging",
    desc: "Understand how remote therapeutic monitoring works and what data is collected.",
  },
  {
    icon: medicationIcon,
    title: "Medication Updates",
    desc: "Keep your medication list up to date for better tracking and reminders.",
  },
  {
    icon: insightsIcon,
    title: "AI Insights",
    desc: "See how AI analyzes your data and provides personalized insights.",
  },
  {
    icon: trackingIcon,
    title: "Data Security",
    desc: "Learn how your data is protected and kept private and secure.",
  },
];

const faqCategoriesRow2 = [
  {
    icon: settingsIcon,
    title: "Password Reset",
    desc: "Steps to reset your password and regain access to your account.",
  },
  {
    icon: notificationIcon,
    title: "Notifications",
    desc: "Manage your notification preferences and stay informed.",
  },
  {
    icon: cloudSyncIcon,
    title: "Share Data",
    desc: "Learn how to securely share your data with your care team.",
  },
];

/* ── ACCORDION QUESTIONS ─────────────────────────────── */
const faqItems = [
  {
    id: "faq-1",
    question: "What is ImmunoTrack?",
    answer:
      "ImmunoTrack is an AI-powered remote therapeutic monitoring platform for allergy and immunology patients. It helps you log symptoms, track medications, and share data with your care team — all in one secure, HIPAA-compliant app.",
  },
  {
    id: "faq-2",
    question: "How do I request access for my practice?",
    answer:
      "You can request access by visiting our Clinician Onboarding page or by contacting us at support@immunotrack.ai. Our team will guide you through the setup process and get your practice onboarded quickly.",
  },
  {
    id: "faq-3",
    question: "Is ImmunoTrack HIPAA compliant?",
    answer:
      "Yes. ImmunoTrack is fully HIPAA compliant and hosted on AWS infrastructure with AES-256 encryption. Your patient data is protected with enterprise-grade security at every level.",
  },
  {
    id: "faq-4",
    question: "Which CPT codes does ImmunoTrack support?",
    answer:
      "ImmunoTrack supports remote therapeutic monitoring CPT codes including 98975, 98976, 98977, 98980, and 98981. Our platform is designed to streamline RTM documentation and billing for allergy and immunology practices.",
  },
  {
    id: "faq-5",
    question: "I'm a patient — how do I get the app?",
    answer:
      "Download the ImmunoTrack app from the App Store (iOS) or Google Play (Android). Your clinician will provide you with an invitation code to connect your account to your care team.",
  },
  {
    id: "faq-6",
    question: "Where can I get more help?",
    answer:
      "You can reach our support team at support@immunotrack.ai. We typically respond within 1 business day. For urgent medical concerns, please contact your healthcare provider or call 911.",
  },
];

/* ── ACCORDION ITEM COMPONENT ────────────────────────── */
function AccordionItem({
  item,
}: {
  item: { id: string; question: string; answer: string };
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`sp-accordion-item${open ? " open" : ""}`}
      id={item.id}
    >
      <button
        className="sp-accordion-btn"
        aria-expanded={open}
        aria-controls={`${item.id}-body`}
        onClick={() => setOpen(!open)}
      >
        <span className="sp-accordion-question">{item.question}</span>
        <span className="sp-accordion-chevron" aria-hidden="true">
          {open ? "▲" : "▼"}
        </span>
      </button>
      {open && (
        <div className="sp-accordion-body" id={`${item.id}-body`} role="region">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
}

/* ── PAGE METADATA (exported separately since "use client") */
// Metadata is in a separate layout or via generateMetadata pattern;
// for client components we set the title inline via useEffect or keep
// metadata in a parent server component. Since this route already has
// the metadata in the page we'll add a basic document title effect.

/* ── PAGE ────────────────────────────────────────────── */
export default function SupportPage() {
  return (
    <main className="sp-page" id="support-page">
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="sp-hero" aria-label="Help and Support hero">
        <div className="sp-hero-inner">
          {/* Left copy */}
          <div className="sp-hero-copy">
            <p className="sp-hero-label">HELP &amp; SUPPORT</p>
            <h1 className="sp-hero-title">
              We&apos;re here to help{" "}
              <span>you every step of the way.</span>
            </h1>
            <p className="sp-hero-subtitle">
              Find answers, learn how to use ImmunoTrack,
              and manage your health with confidence.
            </p>
          </div>

          {/* Right illustration */}
          <div className="sp-hero-image" aria-hidden="true">
            <Image
              src="/support-hero.png"
              alt="ImmunoTrack support assistant illustration"
              width={420}
              height={340}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── FAQ CATEGORIES ───────────────────────────────── */}
      <section aria-labelledby="faq-section-title">
        <div className="sp-section">
          <h2 className="sp-section-title" id="faq-section-title">
            Frequently Asked Questions
          </h2>
          <div className="sp-section-divider" />

          {/* Row 1 — 5 cards */}
          <div className="sp-faq-grid" role="list">
            {faqCategories.map((cat) => (
              <div className="sp-faq-card" key={cat.title} role="listitem">
                <div className="sp-faq-icon-wrap" aria-hidden="true">
                  <Image
                    src={cat.icon}
                    alt=""
                    width={30}
                    height={30}
                    className="sp-icon-cyan"
                  />
                </div>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2 — 3 centred cards */}
          <div className="sp-faq-grid-row2" role="list">
            {faqCategoriesRow2.map((cat) => (
              <div className="sp-faq-card" key={cat.title} role="listitem">
                <div className="sp-faq-icon-wrap" aria-hidden="true">
                  <Image
                    src={cat.icon}
                    alt=""
                    width={30}
                    height={30}
                    className="sp-icon-cyan"
                  />
                </div>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </div>
            ))}
          </div>

          {/* Accordion */}
          <div className="sp-accordion-wrap">
            <h3 className="sp-accordion-title">Common Questions</h3>
            {faqItems.map((item) => (
              <AccordionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── NEED MORE HELP ───────────────────────────────── */}
      <section className="sp-contact-strip" aria-labelledby="need-help-title">
        <div className="sp-contact-inner">
          <h2 className="sp-contact-title" id="need-help-title">
            Need More Help?
          </h2>
          <div className="sp-contact-divider" />

          <div className="sp-contact-grid">
            {/* Email Support */}
            <div className="sp-email-card" id="email-support">
              <div className="sp-email-icon-wrap" aria-hidden="true">
                {/* Envelope SVG */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2dd6e5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </div>
              <div className="sp-email-body">
                <h3>Email Support</h3>
                <p>Our support team is here to help with any questions or issues.</p>
                <a
                  href="mailto:support@immunotrack.ai"
                  className="sp-email-link"
                  id="support-email-link"
                >
                  support@immunotrack.ai
                </a>
                <a
                  href="mailto:support@immunotrack.ai"
                  className="sp-email-btn"
                  id="email-us-btn"
                >
                  {/* envelope icon */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="sp-emergency-card" id="emergency-notice">
              <div className="sp-emergency-icon-wrap" aria-hidden="true">
                {/* Alert SVG */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c0392b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div className="sp-emergency-body">
                <h3>Emergency Notice</h3>
                <p>
                  ImmunoTrack is not intended for emergency use. If you are
                  experiencing a medical emergency, call 911 or seek
                  immediate medical attention.
                </p>
                <a href="tel:911" className="sp-911-btn" id="call-911-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.11 9a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Call 911
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="sp-disclaimer" role="note">
            <div className="sp-disclaimer-icon" aria-hidden="true">
              {/* Shield SVG */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2dd6e5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <p>
              ImmunoTrack is designed to support—not replace—your relationship with your healthcare provider.{" "}
              <strong>If you have concerns about your health, please contact your doctor.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH ─────────────────────────────────── */}
      <section className="sp-contact-section" aria-labelledby="get-in-touch-title">
        <div className="sp-contact-section-inner">
          <p className="sp-contact-section-label">CONTACT</p>
          <h2 className="sp-contact-section-title" id="get-in-touch-title">
            Get in Touch
          </h2>
          <p className="sp-contact-section-subtitle">
            The fastest way to reach us is email. We respond within one business day.
          </p>

          <div className="sp-contact-cards">
            {/* General */}
            <div className="sp-contact-info-card" id="contact-general">
              <h3>ADMIN &amp; BILLING</h3>
              <a href="mailto:support@immunotrack.ai" id="contact-general-link">
                support@immunotrack.ai
              </a>
              <p>General support, billing queries, and account help.</p>
            </div>

            {/* Privacy */}
            <div className="sp-contact-info-card" id="contact-privacy">
              <h3>PRIVACY &amp; SECURITY</h3>
              <a href="mailto:privacy@immunotrack.ai" id="contact-privacy-link">
                privacy@immunotrack.ai
              </a>
              <p>HIPAA, data access, and privacy questions.</p>
            </div>

            {/* HQ */}
            <div className="sp-contact-info-card" id="contact-hq">
              <h3>HEADQUARTERS</h3>
              <a
                href="https://maps.google.com/?q=Atlanta,+GA"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-hq-link"
              >
                Atlanta, GA
              </a>
              <p>Aman Medical Consulting LLC · Est. 2023</p>
            </div>
          </div>

          <p className="sp-contact-note">
            Looking for faster answers? See our{" "}
            <Link href="#faq-section-title" id="faq-link">
              FAQ section above
            </Link>{" "}
            — you&apos;ll likely find the answer right away. We appreciate the patience and trust you place in our platform and take every question seriously.
          </p>
        </div>
      </section>
    </main>
  );
}