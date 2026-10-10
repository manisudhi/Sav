import Reveal, { Stagger } from '../components/Reveal';
import {
  Eyebrow, SectionHead, Faq, Cta, PageHero, NumberCard,
} from '../components/Blocks';
import { sectors, recurringThemes } from '../data/site';

const shortcuts = [
  { id: 'accounting', label: 'Accounting and Finance Operations' },
  { id: 'assurance', label: 'Assurance and Advisory' },
  { id: 'sectors', label: 'Nine sectors' },
  { id: 'build', label: 'Building what doesn\u2019t exist yet' },
  { id: 'engagement', label: 'Project-based or ongoing' },
];

export default function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Services"
        title="The requirement comes first. This is what follows."
        lead="Accounting and finance operations, and assurance and advisory — across India, the United Kingdom, South Africa, Australia and the USA."
      />

      {/* Section shortcuts */}
      <div className="chipbar" aria-label="Service shortcuts">
        <div className="wrap">
          {shortcuts.map((s) => (
            <a className="chip chip--light" href={`#${s.id}`} key={s.id}>
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* ---------------- ACCOUNTING AND FINANCE OPERATIONS ---------------- */}
      <section className="section" id="accounting">
        <div className="wrap">
          <div className="split">
            <Reveal dir="left">
              <Eyebrow>Finance operations</Eyebrow>
              <h2>Accounting and Finance Operations</h2>
              <p className="lead" style={{ marginTop: 16 }}>
                Bookkeeping, management accounts, VAT returns, payroll, tax preparation, year-end
                reporting, compliance, advisory.
              </p>
              <h3 style={{ fontSize: '1.25rem', marginTop: 28 }}>
                This is what the work looks like day to day.
              </h3>
              <p style={{ marginTop: 14 }}>
                Bookkeeping that runs on time — not two weeks behind. Bank reconciliations that are
                done when they should be, not when someone asks. VAT returns filed accurately and
                on deadline. Payroll processed without errors. Management accounts that are ready
                when the client needs them, not when we get around to it.
              </p>
              <p style={{ marginTop: 14 }}>
                Year-end accounts prepared with proper working papers — ready for the auditor, ready
                for Companies House, ready for whoever needs to rely on them. Tax computations built
                with care, not copied from last year and adjusted.
              </p>
            </Reveal>

            <Reveal className="founder" dir="right">
              <p style={{ marginTop: 0 }}>
                When something doesn't add up, we don't leave it for the client to find. We flag it.
                When a deadline is at risk, we say so early enough to do something about it. When we
                don't understand something, we ask — rather than assume and get it wrong.
              </p>
              <h3 style={{ fontSize: '1.35rem', marginTop: 22 }}>
                The work is routine. The attention to it isn't.
              </h3>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- ASSURANCE AND ADVISORY ---------------- */}
      <section className="section section--soft" id="assurance">
        <div className="wrap">
          <SectionHead
            eyebrow="Assurance and Advisory"
            title="Assurance and Advisory"
            lead="Internal audit, risk advisory, internal financial controls, process reviews, ERP advisory, governance."
          />
        </div>
      </section>

      {/* ---------------- NINE SECTORS ---------------- */}
      <section className="section" id="sectors">
        <div className="wrap">
          <SectionHead
            eyebrow="Nine sectors"
            title="Nine sectors. One instinct."
            lead="Every sector has its own failure patterns. Industry changes the symptoms. The underlying causes rarely do. Knowing where to look first is what separates a review that finds something from one that confirms what you already knew."
          />
          <Faq items={sectors} style={{ maxWidth: 820, marginInline: 'auto' }} />
          <Reveal className="center" style={{ marginTop: 36 }}>
            <p className="lead" style={{ maxWidth: 720, marginInline: 'auto' }}>
              This discipline applies wherever a business has outgrown its controls or never built
              them properly — regardless of the sector or the country.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- RECURRING ISSUES ---------------- */}
      <section className="section section--soft">
        <div className="wrap">
          <SectionHead
            eyebrow="Recurring themes"
            title="The same four issues. Across almost every sector."
          />
          <Stagger className="grid grid-4" step={80}>
            {recurringThemes.map((t) => (
              <NumberCard key={t.n} n={t.n} title={t.title} text={t.text} />
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- BUILD + ENGAGEMENT ---------------- */}
      <section className="section">
        <div className="wrap">
          <Stagger className="grid grid-2" step={90}>
            <Reveal as="article" className="card" id="build">
              <h3>Building what doesn't exist yet.</h3>
              <p>
                No SOPs. No documentation. No controls framework. No finance function in place. Some
                businesses need something built before anything else can work.
              </p>
              <p style={{ marginTop: 14 }}>
                We design it around how the business actually operates — not copied from a template
                that worked somewhere else.
              </p>
            </Reveal>
            <Reveal as="article" className="card" id="engagement">
              <h3>Project-based or ongoing. We're built for both.</h3>
              <p>
                Some engagements are a defined scope with a clear deliverable. Others run month to
                month, year to year. Some start as one and become the other.
              </p>
              <p style={{ marginTop: 14 }}>
                The engagement fits the requirement. Not the other way around.
              </p>
            </Reveal>
          </Stagger>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section section--soft">
        <div className="wrap">
          <Cta
            eyebrow="Where we work"
            title="India. United Kingdom. South Africa. Australia. USA."
            primary={{ label: "Let's talk", to: '/contact', arrow: true }}
          />
        </div>
      </section>
    </>
  );
}
