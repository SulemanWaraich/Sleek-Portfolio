import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PakPay — Case Study",
  description:
    "Smart Payments for Modern Pakistan. A production-grade MVP of a modern payment ecosystem built with microservices, real-time WebSocket communication, and automated CI/CD.",
  openGraph: {
    title: "PakPay — Case Study",
    description:
      "Smart Payments for Modern Pakistan. A production-grade MVP of a modern payment ecosystem.",
    type: "article",
  },
};

export default function PakPayCaseStudy() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --green: #1a9f6e;
          --green-light: #e6f7f0;
          --green-mid: #0d7a52;
          --green-dark: #064d34;
          --off-white: #f8faf9;
          --ink: #0d1a14;
          --ink-muted: #4a5e55;
          --ink-faint: #8da99a;
          --border: rgba(26,159,110,0.15);
          --border-dark: rgba(26,159,110,0.3);
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--off-white);
          color: var(--ink);
          font-size: 16px;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }

        /* ── COVER ── */
        .cover {
          min-height: 100vh;
          background: var(--ink);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 3rem 5rem;
          position: relative;
          overflow: hidden;
        }

        .cover::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 55%;
          height: 110%;
          background: radial-gradient(ellipse at center, rgba(26,159,110,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .cover-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-mark {
          width: 36px;
          height: 36px;
          background: var(--green);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-mark svg { width: 20px; height: 20px; }

        .logo-text {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 22px;
          color: #fff;
          letter-spacing: -0.3px;
        }

        .cover-badge {
          font-size: 12px;
          font-weight: 500;
          color: var(--green);
          border: 1px solid rgba(26,159,110,0.4);
          padding: 6px 14px;
          border-radius: 100px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .cover-body {
          position: relative;
          z-index: 1;
          max-width: 760px;
        }

        .cover-eyebrow {
          font-size: 13px;
          font-weight: 500;
          color: var(--green);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .cover-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.0;
          letter-spacing: -2px;
          margin-bottom: 1.5rem;
        }

        .cover-title span { color: var(--green); }

        .cover-sub {
          font-size: 1.15rem;
          color: rgba(255,255,255,0.55);
          font-weight: 300;
          max-width: 520px;
          line-height: 1.65;
        }

        .cover-footer {
          display: flex;
          align-items: center;
          gap: 3rem;
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 2rem;
        }

        .cover-meta-item { display: flex; flex-direction: column; gap: 4px; }
        .cover-meta-label { font-size: 11px; color: rgba(255,255,255,0.35); letter-spacing: 1px; text-transform: uppercase; }
        .cover-meta-value { font-size: 14px; color: rgba(255,255,255,0.75); font-weight: 400; }

        /* ── LAYOUT ── */
        .section {
          padding: 6rem 5rem;
        }

        .section-alt {
          background: #fff;
        }

        .container {
          max-width: 1080px;
          margin: 0 auto;
        }

        .section-label {
          font-size: 11px;
          font-weight: 600;
          color: var(--green);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .section-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: var(--ink);
          line-height: 1.15;
          letter-spacing: -0.8px;
          margin-bottom: 1.5rem;
        }

        .section-intro {
          font-size: 1.05rem;
          color: var(--ink-muted);
          max-width: 620px;
          line-height: 1.75;
        }

        .divider {
          width: 48px;
          height: 3px;
          background: var(--green);
          margin: 1.5rem 0 2.5rem;
          border-radius: 2px;
        }

        /* ── STATS ROW ── */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .stat-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.75rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--green);
        }

        .stat-number {
          font-family: 'Syne', sans-serif;
          font-size: 2.4rem;
          font-weight: 800;
          color: var(--green);
          line-height: 1;
          margin-bottom: 0.4rem;
        }

        .stat-label {
          font-size: 13px;
          color: var(--ink-muted);
          font-weight: 400;
          line-height: 1.4;
        }

        /* ── TECH STACK ── */
        .stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 2.5rem;
        }

        .stack-card {
          background: var(--off-white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .stack-layer {
          font-size: 11px;
          font-weight: 600;
          color: var(--green);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .stack-tech {
          font-size: 15px;
          font-weight: 500;
          color: var(--ink);
        }

        /* ── FEATURES ── */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .feature-card {
          background: var(--off-white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem;
          transition: border-color 0.2s;
        }

        .feature-card:hover {
          border-color: var(--border-dark);
        }

        .feature-icon {
          width: 44px;
          height: 44px;
          background: var(--green-light);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .feature-icon svg {
          width: 22px;
          height: 22px;
          stroke: var(--green);
          fill: none;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .feature-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 0.5rem;
          letter-spacing: -0.2px;
        }

        .feature-desc {
          font-size: 14px;
          color: var(--ink-muted);
          line-height: 1.65;
        }

        /* ── ARCHITECTURE ── */
        .arch-diagram {
          background: var(--ink);
          border-radius: 20px;
          padding: 3rem;
          margin-top: 2.5rem;
          overflow-x: auto;
        }

        .arch-diagram pre {
          font-family: 'DM Mono', 'Courier New', monospace;
          font-size: 13px;
          color: rgba(255,255,255,0.65);
          line-height: 1.6;
          white-space: pre;
        }

        .arch-diagram pre .hl { color: var(--green); }

        /* ── SCREENSHOT SECTION ── */
        .screenshots-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 2rem;
          margin-top: 2.5rem;
          align-items: start;
        }

        .screenshot-frame {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 8px 40px rgba(0,0,0,0.08);
        }

        .screenshot-frame img {
          width: 100%;
          display: block;
        }

        .screenshot-caption {
          font-size: 12px;
          color: var(--ink-faint);
          margin-top: 8px;
          text-align: center;
        }

        /* ── ANALYTICS ── */
        .analytics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2.5rem;
        }

        .analytics-card {
          background: var(--off-white);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }

        .analytics-card img {
          width: 100%;
          display: block;
        }

        .analytics-card-label {
          padding: 1rem 1.25rem;
          font-size: 13px;
          color: var(--ink-muted);
          border-top: 1px solid var(--border);
          background: #fff;
        }

        /* ── CHALLENGES ── */
        .challenge-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .challenge-item {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1.5rem;
          align-items: start;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.75rem;
        }

        .challenge-num {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--green);
          line-height: 1;
          min-width: 40px;
        }

        .challenge-title {
          font-weight: 500;
          font-size: 1rem;
          color: var(--ink);
          margin-bottom: 0.35rem;
        }

        .challenge-body {
          font-size: 14px;
          color: var(--ink-muted);
          line-height: 1.65;
        }

        /* ── ROADMAP ── */
        .roadmap-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 2.5rem;
        }

        .roadmap-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 1.25rem;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: #fff;
        }

        .roadmap-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--green);
          margin-top: 6px;
          flex-shrink: 0;
        }

        .roadmap-text {
          font-size: 14px;
          color: var(--ink-muted);
        }

        /* ── CTA ── */
        .cta-section {
          background: var(--ink);
          padding: 5rem;
          text-align: center;
        }

        .cta-section .section-heading {
          color: #fff;
          max-width: 560px;
          margin: 0 auto 1rem;
        }

        .cta-section .section-intro {
          color: rgba(255,255,255,0.45);
          margin: 0 auto 2.5rem;
        }

        .btn-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 14px 28px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: opacity 0.15s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary {
          background: var(--green);
          color: #fff;
        }

        .btn-outline {
          background: transparent;
          color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .btn:hover { opacity: 0.85; }

        /* ── AUTHOR ── */
        .author-strip {
          background: #fff;
          border-top: 1px solid var(--border);
          padding: 2rem 5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .author-info { display: flex; flex-direction: column; gap: 3px; }
        .author-name { font-weight: 500; font-size: 15px; color: var(--ink); }
        .author-role { font-size: 13px; color: var(--ink-muted); }

        .author-links {
          display: flex;
          gap: 1rem;
        }

        .author-link {
          font-size: 13px;
          color: var(--green);
          text-decoration: none;
          border: 1px solid var(--border-dark);
          padding: 6px 14px;
          border-radius: 100px;
          transition: background 0.15s;
        }

        .author-link:hover { background: var(--green-light); }

        /* ── TWO COLUMN ── */
        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        /* ── PILL TAG ── */
        .tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 500;
          background: var(--green-light);
          color: var(--green-mid);
          padding: 4px 12px;
          border-radius: 100px;
          margin: 3px 3px 3px 0;
        }

        .tags { margin-top: 1rem; }

        /* ── QUOTE ── */
        .quote-block {
          border-left: 3px solid var(--green);
          padding-left: 1.5rem;
          margin: 2rem 0;
        }

        .quote-text {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--ink);
          line-height: 1.4;
          font-style: italic;
        }

        .quote-source {
          font-size: 13px;
          color: var(--ink-muted);
          margin-top: 6px;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          margin-bottom: 2rem;
          transition: opacity 0.2s;
        }

        .back-button:hover {
          opacity: 0.8;
        }

        @media (max-width: 900px) {
          .cover, .section, .author-strip { padding-left: 2rem; padding-right: 2rem; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .features-grid { grid-template-columns: 1fr; }
          .two-col, .screenshots-layout, .analytics-grid, .roadmap-grid { grid-template-columns: 1fr; }
          .stack-grid { grid-template-columns: repeat(2, 1fr); }
          .cover-title { font-size: 2.8rem; letter-spacing: -1px; }
          .cta-section { padding: 3rem 2rem; }
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
        rel="stylesheet"
      />

      <section className="cover">
        <nav className="cover-nav">
          <div className="logo">
            <div className="logo-mark">
              <svg viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 10C3 6.13 6.13 3 10 3s7 3.13 7 7-3.13 7-7 7-7-3.13-7-7z"
                  stroke="#fff"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 10h6M10 7v6"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="logo-text">PakPay</span>
          </div>
          <span className="cover-badge">Case Study</span>
        </nav>

        <div className="cover-body">
          <p className="cover-eyebrow">Fintech Platform · 2024–2025</p>
          <h1 className="cover-title">
            Smart Payments
            <br />
            for <span>Modern</span>
            <br />
            Pakistan
          </h1>
          <p className="cover-sub">
            A production-grade MVP of a modern payment ecosystem built with
            microservices, real-time WebSocket communication, and automated
            CI/CD — deployed on AWS EC2.
          </p>
        </div>

        <footer className="cover-footer">
          <div className="cover-meta-item">
            <span className="cover-meta-label">Developed by</span>
            <span className="cover-meta-value">Muhammad Suleman</span>
          </div>
          <div className="cover-meta-item">
            <span className="cover-meta-label">Live at</span>
            <span className="cover-meta-value">pakpay10.site</span>
          </div>
          <div className="cover-meta-item">
            <span className="cover-meta-label">Stack</span>
            <span className="cover-meta-value">
              Next.js · Node.js · PostgreSQL · Docker · AWS
            </span>
          </div>
          <div className="cover-meta-item">
            <span className="cover-meta-label">Version</span>
            <span className="cover-meta-value">
              v2 Live · v3 MVP Releasing April 2025
            </span>
          </div>
        </footer>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label">At a glance</p>
          <h2 className="section-heading">
            Real traction.
            <br />
            Real infrastructure.
          </h2>
          <div className="divider"></div>
          <p className="section-intro">
            PakPay has already attracted users across 7+ countries with zero
            paid marketing — purely organic and direct traffic, validating
            strong product-market fit before the full MVP launch.
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">287</div>
              <div className="stat-label">
                Total active users tracked via Google Analytics (v2)
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1.9k</div>
              <div className="stat-label">
                Page views recorded on PakPay landing
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">7+</div>
              <div className="stat-label">
                Countries with active users — Pakistan, USA, France, Germany,
                India, UAE, China
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">279</div>
              <div className="stat-label">
                Direct sessions — showing strong brand recall and word-of-mouth
                growth
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="two-col">
            <div>
              <p className="section-label">The Problem</p>
              <h2 className="section-heading">
                Pakistan's digital payment gap
              </h2>
              <div className="divider"></div>
              <p className="section-intro" style={{ marginBottom: "1.25rem" }}>
                Despite a rapidly growing mobile internet population, Pakistan
                still lacked a developer-grade, open payment infrastructure that
                was fast, transparent, and natively built for local financial
                workflows.
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--ink-muted)",
                  lineHeight: "1.7",
                }}
              >
                Most existing solutions were fragmented, expensive, or required
                complex integrations. There was no production-ready open
                platform offering instant P2P transfers, bank webhooks, and
                real-time notifications in one cohesive system — especially for
                developers building on top of it.
              </p>

              <div className="quote-block" style={{ marginTop: "2rem" }}>
                <p className="quote-text">
                  "Send, save, and spend with confidence. Fast, secure, and
                  simplified digital transactions for everyone."
                </p>
                <p className="quote-source">
                  — PakPay mission statement
                </p>
              </div>
            </div>

            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>
                Core pain points addressed
              </p>
              <div className="challenge-list" style={{ marginTop: "0" }}>
                <div className="challenge-item">
                  <span className="challenge-num">01</span>
                  <div>
                    <p className="challenge-title">
                      No instant, fee-free transfers
                    </p>
                    <p className="challenge-body">
                      Existing platforms charge high fees and take days to
                      settle. PakPay enables instant transfers with no hidden
                      fees.
                    </p>
                  </div>
                </div>
                <div className="challenge-item">
                  <span className="challenge-num">02</span>
                  <div>
                    <p className="challenge-title">
                      Lack of developer-ready infrastructure
                    </p>
                    <p className="challenge-body">
                      No local fintech offered a complete webhook + API
                      ecosystem for developers to build payment-integrated
                      products.
                    </p>
                  </div>
                </div>
                <div className="challenge-item">
                  <span className="challenge-num">03</span>
                  <div>
                    <p className="challenge-title">
                      No real-time financial visibility
                    </p>
                    <p className="challenge-body">
                      Users lacked live transaction notifications and portfolio
                      dashboards — PakPay delivers this via WebSockets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label">Product</p>
          <h2 className="section-heading">Built to production standard</h2>
          <div className="divider"></div>
          <p className="section-intro">
            PakPay ships a full-featured consumer dashboard alongside a public
            landing page — both reflecting a clean, modern fintech aesthetic
            designed for trust and clarity.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="section-label">Core Features</p>
          <h2 className="section-heading">
            Everything in one platform
          </h2>
          <div className="divider"></div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="feature-title">Instant Transfers</h3>
              <p className="feature-desc">
                Send money to anyone, anywhere in seconds. No delays, no hidden
                fees. Backed by event-driven bank webhook simulation.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="feature-title">Secure Vault</h3>
              <p className="feature-desc">
                Bank-level encryption and multi-factor authentication keep funds
                safe. HMAC-SHA256 webhook signing on every transaction.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <h3 className="feature-title">Bill Payments</h3>
              <p className="feature-desc">
                Pay utility bills, mobile top-ups, and more directly from the
                dashboard. Nationwide acceptance network.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.34h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l1.28-1.29a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="feature-title">Real-time Notifications</h3>
              <p className="feature-desc">
                Live transaction alerts via Socket.IO WebSockets. Users see
                balance changes and events the instant they happen — no refresh
                needed.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="feature-title">P2P Transfer</h3>
              <p className="feature-desc">
                Peer-to-peer payments with auto-settlement cron jobs, full
                transaction history, and weekly spending analytics —
                auto-calculated from the database.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="feature-title">Activity Dashboard</h3>
              <p className="feature-desc">
                Visual portfolio tracker with OnRamp / OffRamp / P2P activity
                charts across 4-week windows. Total balance and weekly spend in
                real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label">Architecture</p>
          <h2 className="section-heading">
            Microservices built to scale
          </h2>
          <div className="divider"></div>
          <p className="section-intro">
            PakPay uses a monorepo microservices pattern — four independently
            containerized services orchestrated by Docker Compose, communicating
            via Redis pub/sub and deployed behind Nginx on AWS EC2.
          </p>

          <div className="arch-diagram">
            <pre>
{`<span className="hl">Client (Browser)</span>
       │
       ▼
<span className="hl">Nginx</span> — Reverse Proxy (TLS termination, HTTPS enforcement)
       │
       ├──▶ <span className="hl">user-app</span>       Next.js · Port 3005  (Frontend + API Routes)
       │         │
       │         ├──▶ <span className="hl">bank-webhook</span>   Express · Port 4000  (HMAC-signed bank callbacks)
       │         │         └──▶ <span className="hl">Redis</span>   Pub/Sub · Port 6379
       │         │
       │         └──▶ <span className="hl">socket-gateway</span>  Socket.IO · Port 5000  (Real-time WebSocket)
       │                   └──▶ <span className="hl">Redis</span>   Pub/Sub · Port 6379
       │
       └──▶ <span className="hl">PostgreSQL</span>  via Prisma ORM  (persistent data store)`}
            </pre>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="section-label">Tech Stack</p>
          <h2 className="section-heading">
            Modern. Production-grade. Scalable.
          </h2>
          <div className="divider"></div>

          <div className="stack-grid">
            <div className="stack-card">
              <span className="stack-layer">Frontend</span>
              <span className="stack-tech">Next.js + Tailwind CSS</span>
            </div>
            <div className="stack-card">
              <span className="stack-layer">Backend</span>
              <span className="stack-tech">Node.js + Express.js</span>
            </div>
            <div className="stack-card">
              <span className="stack-layer">Real-time</span>
              <span className="stack-tech">Socket.IO (WebSockets)</span>
            </div>
            <div className="stack-card">
              <span className="stack-layer">Database</span>
              <span className="stack-tech">PostgreSQL + Prisma ORM</span>
            </div>
            <div className="stack-card">
              <span className="stack-layer">Cache / Pub-Sub</span>
              <span className="stack-tech">Redis</span>
            </div>
            <div className="stack-card">
              <span className="stack-layer">Containers</span>
              <span className="stack-tech">Docker + Docker Compose</span>
            </div>
            <div className="stack-card">
              <span className="stack-layer">Proxy</span>
              <span className="stack-tech">Nginx (Reverse Proxy)</span>
            </div>
            <div className="stack-card">
              <span className="stack-layer">Cloud</span>
              <span className="stack-tech">AWS EC2</span>
            </div>
            <div className="stack-card">
              <span className="stack-layer">CI/CD</span>
              <span className="stack-tech">GitHub Actions</span>
            </div>
            <div className="stack-card">
              <span className="stack-layer">Auth</span>
              <span className="stack-tech">NextAuth + JWT</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label">Engineering highlights</p>
          <h2 className="section-heading">
            Built the hard way — the right way
          </h2>
          <div className="divider"></div>

          <div className="challenge-list">
            <div className="challenge-item">
              <span className="challenge-num">01</span>
              <div>
                <p className="challenge-title">
                  Automated CI/CD pipeline via GitHub Actions
                </p>
                <p className="challenge-body">
                  Every push to <code>main</code> triggers a full automated
                  pipeline: code checkout → npm tests → Docker Hub login →
                  build and push all service images with <code>NEXT_PUBLIC_*</code>{" "}
                  vars baked in → SSH into EC2 → write <code>.env</code> →
                  pull images → <code>docker compose up</code>. Zero manual
                  deployment steps in production.
                </p>
              </div>
            </div>
            <div className="challenge-item">
              <span className="challenge-num">02</span>
              <div>
                <p className="challenge-title">
                  HMAC-SHA256 secured bank webhooks
                </p>
                <p className="challenge-body">
                  Every webhook call from <code>user-app</code> to{" "}
                  <code>bank-webhook</code> is signed with HMAC-SHA256. The
                  bank-webhook service verifies the signature on every route
                  before mutating any balance — preventing replay attacks and
                  ensuring data integrity.
                </p>
              </div>
            </div>
            <div className="challenge-item">
              <span className="challenge-num">03</span>
              <div>
                <p className="challenge-title">
                  Real-time event bus with Redis pub/sub
                </p>
                <p className="challenge-body">
                  Rather than polling, PakPay uses Redis as a message broker
                  between the bank-webhook and socket-gateway services. This
                  ensures transaction events are instantly broadcast to
                  connected clients via Socket.IO with minimal latency and no
                  tight service coupling.
                </p>
              </div>
            </div>
            <div className="challenge-item">
              <span className="challenge-num">04</span>
              <div>
                <p className="challenge-title">
                  Auto-settlement cron with bearer-token auth
                </p>
                <p className="challenge-body">
                  A background cron route at <code>/api/cron/auto-settlement</code>{" "}
                  handles automatic settlement of pending transactions in
                  production. Protected by a <code>CRON_SECRET</code> bearer
                  token, it runs on schedule via an external trigger — keeping
                  financial state accurate without manual intervention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label">What's next</p>
          <h2 className="section-heading">
            v3 ships this month —
            <br />
            here's what's ahead
          </h2>
          <div className="divider"></div>
          <p className="section-intro">
            PakPay v3 is the complete production MVP — launching April 2025.
            Post-launch, the roadmap focuses on real payment rails, mobile
            expansion, and enterprise-grade infrastructure.
          </p>

          <div className="roadmap-grid">
            <div className="roadmap-item">
              <div className="roadmap-dot"></div>
              <span className="roadmap-text">
                Payment gateway integration — Stripe and local Pakistani
                providers
              </span>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-dot"></div>
              <span className="roadmap-text">
                Admin dashboard with full transaction analytics and reporting
              </span>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-dot"></div>
              <span className="roadmap-text">
                Two-factor authentication (2FA) and OAuth login (Google, GitHub)
              </span>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-dot"></div>
              <span className="roadmap-text">
                React Native mobile app for iOS and Android
              </span>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-dot"></div>
              <span className="roadmap-text">
                Kubernetes deployment for horizontal scalability
              </span>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-dot"></div>
              <span className="roadmap-text">
                Rate limiting, fraud detection, and KYC verification
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ color: "var(--green)", marginBottom: "1rem" }}>
            Ready to explore
          </p>
          <h2
            className="section-heading"
            style={{ color: "#fff", maxWidth: "520px", margin: "0 auto 1rem" }}
          >
            Try PakPay or explore the codebase
          </h2>
          <p
            className="section-intro"
            style={{
              color: "rgba(255,255,255,0.45)",
              margin: "0 auto 2.5rem",
              maxWidth: "440px",
            }}
          >
            PakPay is live and open — test the platform directly or fork the
            repo and build on top of it.
          </p>
          <div className="btn-group">
            <a
              href="https://pakpay10.site"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo →
            </a>
            <a
              href="https://github.com/SulemanWaraich/PakPay"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </section>

      <div className="author-strip">
        <div className="author-info">
          <span className="author-name">Muhammad Suleman</span>
          <span className="author-role">
            Frontend Developer · React Specialist · Builder of PakPay
          </span>
        </div>
        <div className="author-links">
          <a href="https://pakpay10.site" className="author-link" target="_blank" rel="noopener noreferrer">
            Live Site
          </a>
          <a
            href="https://github.com/SulemanWaraich/PakPay"
            className="author-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}
