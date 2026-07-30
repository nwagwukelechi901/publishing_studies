import { Clock, GraduationCap, Calendar, CheckCircle, Mail, Phone } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Footer } from "../components/Footer";
import type { Page } from "../types";

interface Props {
  setPage: (p: Page) => void;
}

const TERMS = [
  {
    term: "Term 1",
    modules: [
      "Foundations of Publishing Studies",
      "Editorial Theory & Practice",
      "African Publishing History",
      "Media Law & Intellectual Property",
    ],
  },
  {
    term: "Term 2",
    modules: [
      "Digital Publishing & Content Strategy",
      "Publishing Economics & Business Management",
      "Academic & Scholarly Publishing",
      "Rights, Licensing & International Co-publishing",
    ],
  },
  {
    term: "Term 3",
    modules: [
      "Professional Project / Dissertation (10,000–15,000 words)",
      "Industry Placement Partner Programme",
    ],
  },
];

const ENTRY_REQUIREMENTS = [
  {
    title: "Bachelor's Degree",
    body: "Minimum Second Class Lower (2:2) from a recognised university in any discipline. UIIPS welcomes graduates from all academic backgrounds.",
  },
  {
    title: "Professional Experience",
    body: "Candidates without a 2:2 but with substantial professional experience in publishing, media, or communications may apply with a portfolio.",
  },
  {
    title: "Statement of Purpose",
    body: "500–800 words on your motivation, career goals, and what you will contribute to Nigerian publishing.",
  },
  {
    title: "Two References",
    body: "At least one academic reference required. Referees should speak to your intellectual ability and professional potential.",
  },
];

const FUNDING = [
  {
    title: "Federal Government Scholarship Board (FGSB)",
    body: "Nigerian citizens in postgraduate programmes at federal universities may apply for FGSB awards covering tuition and a monthly stipend. See scholarships.gov.ng.",
  },
  {
    title: "TETFund Postgraduate Support",
    body: "The Tertiary Education Trust Fund supports postgraduate study at Nigerian federal universities. UIIPS students are eligible to apply through the university's academic office.",
  },
  {
    title: "UIIPS Industry Scholarships (from 2027)",
    body: "UIIPS is finalising partnerships with Nigerian publishing houses to offer fee-support scholarships for outstanding students committed to working in the Nigerian industry after graduation.",
  },
  {
    title: "African Development Bank Fellowships",
    body: "The AfDB's Higher Education, Science, and Technology programme funds postgraduate study at African universities. Visit afdb.org for eligibility criteria.",
  },
];

export function PostgraduatePage({ setPage }: Props) {
  return (
    <div>
      <PageHeader
        eyebrow="Postgraduate"
        title="MSc Publishing Studies"
        subtitle="A 12-month professional Master's Degree — the flagship programme of the University of Abuja International Institute for Publishing Studies."
      />

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Quick stats */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Clock size={20} />, label: "Duration", value: "12 months", sub: "full-time" },
            { icon: <GraduationCap size={20} />, label: "Award", value: "MSc", sub: "Publishing Studies" },
            { icon: <Calendar size={20} />, label: "Intake", value: "September", sub: "annually" },
          ].map((c) => (
            <div key={c.label} className="bg-card border border-border p-6 flex gap-4 items-center">
              <div className="text-accent">{c.icon}</div>
              <div>
                <div className="font-mono text-muted-foreground text-[9px] uppercase tracking-wider mb-0.5">{c.label}</div>
                <div className="font-display text-foreground text-xl font-bold">{c.value}</div>
                <div className="font-body text-muted-foreground text-xs">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Description + Modules */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-foreground text-2xl font-bold mb-6">About the Programme</h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-sm">
              <p>
                The UIIPS MSc in Publishing Studies is a 12-month, full-time professional degree designed to produce the next generation of publishing leaders in Nigeria and Africa. Launched on April 12, 2024, by Vice-Chancellor Prof. Abdul-Rasheed Na'Allah, it is the first programme of its kind in the North-Central geopolitical zone of Nigeria.
              </p>
              <p>
                The programme is structured in three terms. The first two deliver intensive taught modules covering every dimension of modern publishing — from editorial theory and book history to digital strategy, media law, and publishing economics. The third term is devoted to a professional project carried out in partnership with a Nigerian or international publishing organisation.
              </p>
              <p>
                Graduates leave with both an NUC-accredited postgraduate qualification and a record of real-world publishing experience, positioning them for immediate employment in editorial, production, rights, digital, and management roles across the Nigerian and African publishing industries.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-foreground text-2xl font-bold mb-6">Programme Modules</h2>
            <div className="space-y-3">
              {TERMS.map((term) => (
                <div key={term.term} className="bg-card border border-border p-5">
                  <div className="font-mono text-accent text-[9px] uppercase tracking-wider mb-3">{term.term}</div>
                  <div className="space-y-2">
                    {term.modules.map((mod) => (
                      <div key={mod} className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-accent flex-shrink-0" />
                        <span className="font-body text-foreground text-xs">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Entry + Funding */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-foreground text-2xl font-bold mb-6">Entry Requirements</h2>
            <div className="space-y-5">
              {ENTRY_REQUIREMENTS.map((item) => (
                <div key={item.title} className="border-l-2 border-accent pl-5">
                  <h3 className="font-display text-foreground font-semibold mb-1">{item.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-foreground text-2xl font-bold mb-6">Funding & Scholarships</h2>
            <div className="space-y-4">
              {FUNDING.map((item) => (
                <div key={item.title} className="p-4 bg-card border border-border hover:border-accent/30 transition-colors">
                  <h4 className="font-display text-foreground font-semibold text-sm mb-2">{item.title}</h4>
                  <p className="font-body text-muted-foreground text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Apply CTA */}
        <div className="bg-secondary border border-border p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-foreground text-2xl font-bold mb-2">Ready to Apply?</h3>
            <p className="font-body text-muted-foreground text-sm max-w-lg">
              Applications for September 2027 intake open February 2027 via the University of Abuja School of Postgraduate Studies portal.
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail size={13} /><span className="font-mono text-xs">uiips@uniabuja.edu.ng</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone size={13} /><span className="font-mono text-xs">+234 912 441 9714</span>
            </div>
          </div>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
