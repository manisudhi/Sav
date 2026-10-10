import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal, { useReveal } from '../components/Reveal';
import { Eyebrow, SectionHead, Marquee, Cta } from '../components/Blocks';
import { company } from '../data/site';

/** Pointer-follow glow + card parallax, desktop only, motion permitting. */
function useHeroParallax() {
  const heroRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const card = cardRef.current;
    if (!hero) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !window.matchMedia('(min-width: 981px)').matches) return;

    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      hero.style.setProperty('--px', `${(x * 16).toFixed(2)}px`);
      hero.style.setProperty('--py', `${(y * 16).toFixed(2)}px`);
      // Don't fight the entry animation.
      if (card && card.classList.contains('is-visible')) {
        card.style.transform =
          'translate3d(calc(var(--px, 0px) * -0.4), calc(var(--py, 0px) * -0.4), 0)';
      }
    };
    const onLeave = () => {
      if (card) card.style.transform = '';
    };

    hero.addEventListener('pointermove', onMove);
    hero.addEventListener('pointerleave', onLeave);
    return () => {
      hero.removeEventListener('pointermove', onMove);
      hero.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return { heroRef, cardRef };
}

export default function Home() {
  const { heroRef, cardRef } = useHeroParallax();
  const heroCard = useReveal();

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero" ref={heroRef}>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <Reveal as="span" className="pill">
                <span className="dot" /> Savitur — a name built around finding a way forward and
                empowering transformation with Clarity
              </Reveal>

              <Reveal as="h1">
                Clarity for <span className="accent">what comes next</span>.
              </Reveal>

              <Reveal as="p" className="lead">
                A finance function that isn't keeping pace. A control gap that hasn't been caught. A
                year-end that needs more than just completing. A process that everyone works around
                but nobody fixes.
              </Reveal>

              <Reveal as="p" className="lead" style={{ marginTop: 14 }}>
                These aren't problems that fix themselves with time. Some need their operations
                examined. Some need their finance function built. Many need both.
              </Reveal>

              <Reveal as="p" className="lead" style={{ marginTop: 14 }}>
                When the problem gets complicated, we get closer. The requirement comes first. The
                solution follows.
              </Reveal>

              <Reveal className="btn-row">
                <Link className="btn btn--gold" to="/contact">
                  Let's talk
                  <Icon name="arrow" strokeWidth={2} />
                </Link>
              </Reveal>

              <Reveal className="hero-meta">
                <span>{company.name}</span>
                <span>India · United Kingdom · South Africa · Australia · USA</span>
              </Reveal>
            </div>

            <aside
              ref={(node) => {
                cardRef.current = node;
                heroCard.ref.current = node;
              }}
              className={`hero-card ${heroCard.className}`}
              data-reveal="right"
            >
              <h3>Recognised</h3>
              <p className="card-sub">Top SME Businesses of the Year 2026 · Trusted Women Biz</p>
              <div className="badge-row">
                <img
                  src={`${import.meta.env.BASE_URL}badge-top-sme-2026.png`}
                  alt="Top SME Businesses of the Year 2026 — Great Companies, 9th Edition. Savitur Global Advisians LLP, recognised in the category of Business Consulting Excellence."
                  width="520"
                  height="533"
                  loading="lazy"
                />
                <img
                  src={`${import.meta.env.BASE_URL}badge-trusted-women-biz.png`}
                  alt="Trusted Women Biz badge — Neha Chawla, Savitur Global Advisians LLP, Risk & Financial Consulting, April 2026 to March 2027."
                  width="520"
                  height="520"
                  loading="lazy"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ---------------- WHAT WE DO ---------------- */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="What we do"
            title="Business transformation and finance operations."
            lead="Savitur brings together two areas of professional work under one firm — business transformation and finance operations."
          />

          <div className="split split--wide">
            <Reveal dir="left">
              <Eyebrow>Business transformation</Eyebrow>
              <h2>Business Process, Systems &amp; Governance Advisory</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                From process transformation and ERP implementation including SAP to internal audit,
                risk advisory and internal financial controls, we help businesses build stronger
                systems, processes and controls that improve operational efficiency, strengthen
                governance, manage risk and enable better decision-making.
              </p>
              <p style={{ marginTop: 16 }}>
                Our experience spans diverse industries, including{' '}
                <strong>
                  food manufacturing, textiles, automobiles, steel, infrastructure, FMCG, paper,
                  dealerships and stock exchanges.
                </strong>
              </p>
            </Reveal>

            <Reveal className="founder" dir="right">
              <p style={{ marginTop: 0 }}>
                Every business has things it stops questioning — a process that worked three years
                ago but hasn't kept up, a system that everyone works around, a risk that sits in
                plain sight because nobody has been asked to look. That's where we start. Not with
                a checklist. With the business itself.
              </p>
              <p style={{ marginTop: 16 }}>
                We know where the problems sit because we've been inside these operations. The same
                discipline now extends to businesses internationally — because the problems don't
                change, only the geography does.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="wrap">
          <div className="split split--wide">
            <Reveal className="founder" dir="left">
              <p style={{ marginTop: 0 }}>
                We handle the numbers that businesses and their clients rely on — the accounts that
                get signed, the returns that get filed, the reporting that decisions are built on.
                That's not work we take lightly, regardless of whose name is on the file.
              </p>
              <p style={{ marginTop: 16 }}>
                Some clients need their entire finance function handled. Some need support through
                year-end or a busy quarter. Some need something built that they've never had
                before. We do all three.
              </p>
            </Reveal>

            <Reveal dir="right">
              <Eyebrow>Finance operations</Eyebrow>
              <h2>Accounting and Finance Operations</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Bookkeeping, management accounts, VAT returns, payroll, tax preparation, year-end
                reporting, compliance and advisory. The work that keeps a business financially
                accurate, compliant and moving forward.
              </p>
              <p style={{ marginTop: 16 }}>
                We work with professional firms and businesses across India, the UK, South Africa,
                Australia and the USA — within your systems, your standards and your reporting
                frameworks.
              </p>
              <p style={{ marginTop: 16 }}>
                <strong>You tell us what needs to be done. We work out the best way to do it.</strong>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- THE WORK SPEAKS FIRST ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal dir="left">
              <Eyebrow>How we work</Eyebrow>
              <h2>The work speaks first.</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                The work we do sits behind important decisions, deadlines and client relationships.
                We know that.
              </p>
            </Reveal>

            <Reveal dir="right">
              <p>
                That means being careful with the detail. Asking when something doesn't make sense.
                Raising an issue rather than passing it on. Communicating clearly — not when it's
                convenient, but when it matters.
              </p>
              <p style={{ marginTop: 16 }}>
                <strong>And when something is ours to handle, we treat it that way.</strong>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section section--soft">
        <div className="wrap">
          <Cta
            eyebrow="Let's talk about what needs fixing"
            title="Tell us where the problem is. We'll take it from there."
            text="Savitur was founded in 2023 by CA Neha Chawla and CA Devyani Chawla. We built this firm from scratch — and we're easier to reach than you'd expect."
            primary={{ label: "Let's talk", to: '/contact', arrow: true }}
            secondary={{ label: 'More about the firm', to: '/about', arrow: true }}
          />
        </div>
      </section>
    </>
  );
}
