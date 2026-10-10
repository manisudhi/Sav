import Reveal, { Stagger } from '../components/Reveal';
import { Eyebrow, SectionHead, Cta, PageHero, IconCard } from '../components/Blocks';

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About Savitur"
        title="How this firm came to be."
        lead="Savitur — a name built around finding a way forward and empowering transformation with clarity."
      />

      {/* ---------------- STORY ---------------- */}
      <section className="section" id="founder">
        <div className="wrap">
          <div className="split" style={{ alignItems: 'flex-start' }}>
            <Reveal dir="left">
              <Eyebrow>CA Neha Chawla</Eyebrow>
              <h2>She chose to bring it for herself instead.</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                In 2020, CA Neha Chawla left Grant Thornton after years in internal audit. She had
                progressed through the firm, earned her place, led engagements across
                manufacturing, textile, automotive, steel and financial services — and was asked to
                bring in business for the firm.
              </p>
              <p style={{ marginTop: 16 }}>
                <strong>She chose to bring it for herself instead.</strong>
              </p>
              <p style={{ marginTop: 16 }}>
                She started a solo practice in Ludhiana. No team. No brand. No established client
                base. Every engagement was won on the strength of what she could deliver — control
                reviews, risk assessments, process audits — for businesses that needed someone who
                could find the real problem and fix it.
              </p>
            </Reveal>

            <Reveal dir="right">
              <Eyebrow>CA Devyani Chawla</Eyebrow>
              <h2>Built from the inside, then from scratch.</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                In 2019, CA Devyani Chawla qualified as a Chartered Accountant and entered
                practice. She built her understanding of international accounting and cross-border
                finance operations from the inside — and then stepped out to build her own practice
                from scratch.
              </p>
            </Reveal>
          </div>

          <Reveal className="founder" dir="zoom" style={{ marginTop: 56 }}>
            <p style={{ marginTop: 0, fontSize: '1.05rem' }}>
              Both were building independently. Both were solving the same fundamental problem from
              different angles — businesses that needed professional capability they couldn't find
              in one place.
            </p>
            <h3 style={{ fontSize: '1.5rem', marginTop: 22 }}>
              In 2023, they incorporated Savitur Global Advisians LLP.
            </h3>
          </Reveal>
        </div>
      </section>

      {/* ---------------- TODAY ---------------- */}
      <section className="section section--soft">
        <div className="wrap">
          <SectionHead
            eyebrow="Where we are today"
            title="Where we are today."
            lead="What started as two separate practices in Ludhiana is now a firm of Chartered Accountants and professionals serving clients across five countries — India, the United Kingdom, South Africa, Australia and the USA."
          />

          <Stagger className="grid grid-2" step={90}>
            <IconCard
              icon="shieldCheck"
              title="Neha leads assurance and advisory."
              text="Internal audit, risk advisory, internal financial controls, process reviews, ERP advisory and governance — across nine sectors in India, with the same discipline expanding to international markets."
            />
            <IconCard
              icon="globe"
              title="Devyani leads international accounting and finance."
              text="Year-end reporting, management accounts, bookkeeping, tax preparation, payroll and compliance — working within client systems, standards and reporting frameworks."
            />
          </Stagger>

          <Reveal className="center" style={{ marginTop: 40 }}>
            <p className="lead" style={{ maxWidth: 720, marginInline: 'auto' }}>
              The firm operates as one team with two clear areas of strength.{' '}
              <strong>The work is different. The standard is the same.</strong>
            </p>
          </Reveal>

          <Reveal className="badge-row badge-row--light" style={{ marginTop: 48 }}>
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
          </Reveal>
        </div>
      </section>

      {/* ---------------- HOW WE THINK ---------------- */}
      <section className="section" id="approach">
        <div className="wrap">
          <div className="split">
            <Reveal dir="left">
              <Eyebrow>How we work</Eyebrow>
              <h2>How we think about the work.</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                We didn't start this firm because we had a business plan. We started it because
                we'd both spent enough time inside the profession to know what was missing.
              </p>
              <p style={{ marginTop: 16 }}>
                Clients don't need more reports. They need someone who reads the report and tells
                them what it actually means. They don't need a team that completes tasks. They need
                people who understand why the task matters and raise their hand when something
                isn't right.
              </p>
              <p style={{ marginTop: 16 }}>
                That's what we built Savitur around. Not a service offering. A way of working.
              </p>
            </Reveal>

            <Reveal className="founder" dir="right">
              <p style={{ marginTop: 0 }}>
                Every engagement — whether it's a three-week control review in a steel plant or a
                year-round finance function for a UK practice — gets the same attention. The same
                honesty. The same ownership.
              </p>
              <h3 style={{ fontSize: '1.35rem', marginTop: 22 }}>
                We don't have a values slide. We have a standard. And the work either meets it or it
                doesn't.
              </h3>
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
            primary={{ label: "Let's talk", to: '/contact', arrow: true }}
          />
        </div>
      </section>
    </>
  );
}
