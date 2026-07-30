import { Calendar, Clock, Landmark, Mail, Phone, MapPin } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Footer } from "../components/Footer";
import type { Page } from "../types";

interface Props {
  setPage: (p: Page) => void;
}

const REQUIREMENTS = [
  {
    title: "Bachelor's Degree",
    body: "Applicants must hold a minimum of a Second Class Lower Division (2:2) Bachelor's degree from a recognised Nigerian or foreign university. Any discipline is acceptable — UIIPS welcomes graduates from Arts, Social Sciences, Sciences, Law, Management, and Engineering backgrounds.",
  },
  {
    title: "Professional Experience (Optional)",
    body: "Candidates who do not meet the 2:2 requirement but have substantial professional experience in publishing, journalism, communications, or a related media field may apply for consideration. A portfolio of professional work must be submitted alongside the application.",
  },
  {
    title: "Statement of Purpose",
    body: "All applicants must submit a personal statement of 500–800 words explaining their motivation for studying at UIIPS, their career goals in publishing, and what they hope to contribute to Nigeria's publishing industry.",
  },
  {
    title: "Two References",
    body: "Academic or professional references are required, with at least one from an academic source. Referees should speak to the applicant's intellectual capability, professional conduct, and suitability for advanced study.",
  },
  {
    title: "English Language",
    body: "Applicants whose undergraduate degree was not taught in English must provide an IELTS Academic score of 6.0 (no band below 5.5) or equivalent TOEFL iBT 80+.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Check Eligibility",
    desc: "Confirm you hold a minimum 2:2 Bachelor's degree or have substantial professional experience in a publishing-related field.",
  },
  {
    step: "02",
    title: "Prepare Your Documents",
    desc: "Gather your degree certificate and transcript, two references, a personal statement (500–800 words), and proof of English proficiency if required.",
  },
  {
    step: "03",
    title: "Submit via UniAbuja Portal",
    desc: "Complete the online application through the University of Abuja's School of Postgraduate Studies portal at uniabuja.edu.ng. Select 'MSc Publishing Studies (UIIPS)' as your programme.",
  },
  {
    step: "04",
    title: "Await Decision",
    desc: "Shortlisted candidates will be contacted for an interview (in-person or virtual). Decisions are communicated within four weeks of interview.",
  },
  {
    step: "05",
    title: "Accept and Register",
    desc: "Successful applicants receive an official offer letter. Accept online, pay the acceptance fee, and report to the Gwagwalada campus for registration at the start of term.",
  },
];

const FEES = [
  ["Tuition Fee (full programme)", "₦ 350,000 – ₦ 450,000", "Contact Admissions Office"],
  ["Acceptance Fee (one-time)", "₦ 20,000", "₦ 20,000"],
  ["Institute Levy", "₦ 25,000", "₦ 25,000"],
  ["Library & Digital Resources", "₦ 10,000", "₦ 10,000"],
  ["Student Union Dues", "₦ 3,000", "₦ 3,000"],
];

export function AdmissionsPage({ setPage }: Props) {
  return (
    <div>
      <PageHeader
        eyebrow="Admissions"
        title="How to Get In"
        subtitle="Entry information for the UIIPS 12-month professional Master's Degree in Publishing Studies at the University of Abuja."
      />

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Quick stats */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Calendar size={22} />, title: "Next Intake", value: "September 2027", sub: "applications open Feb 2027" },
            { icon: <Clock size={22} />, title: "Duration", value: "12 Months", sub: "full-time, professional" },
            { icon: <Landmark size={22} />, title: "Degree Awarded", value: "MSc Publishing", sub: "NUC accredited · UniAbuja" },
          ].map((c) => (
            <div key={c.title} className="bg-card border border-border p-6 flex gap-5 items-start">
              <div className="text-accent mt-0.5 flex-shrink-0">{c.icon}</div>
              <div>
                <div className="font-mono text-muted-foreground text-[9px] uppercase tracking-wider mb-1">{c.title}</div>
                <div className="font-display text-foreground text-2xl font-bold leading-tight">{c.value}</div>
                <div className="font-body text-muted-foreground text-xs mt-1">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements + Steps */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-foreground text-2xl font-bold mb-6">Entry Requirements</h2>
            <div className="space-y-5">
              {REQUIREMENTS.map((item) => (
                <div key={item.title} className="border-l-2 border-accent pl-5">
                  <h3 className="font-display text-foreground font-semibold mb-2">{item.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-foreground text-2xl font-bold mb-6">How to Apply</h2>
            <div className="space-y-4">
              {STEPS.map((s) => (
                <div key={s.step} className="flex gap-4 p-4 bg-card border border-border">
                  <div className="font-display text-accent/40 text-2xl font-bold flex-shrink-0 leading-none w-8">{s.step}</div>
                  <div>
                    <h4 className="font-display text-foreground font-semibold text-sm mb-1">{s.title}</h4>
                    <p className="font-body text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fees */}
        <div>
          <h2 className="font-display text-foreground text-2xl font-bold mb-6">Tuition & Fees</h2>
          <div className="bg-card border border-border overflow-hidden">
            <div className="bg-primary px-6 py-4 grid grid-cols-3 gap-4">
              <div className="font-mono text-emerald-300 text-[10px] uppercase tracking-wider">Fee Type</div>
              <div className="font-mono text-emerald-300 text-[10px] uppercase tracking-wider">Nigerian Students</div>
              <div className="font-mono text-emerald-300 text-[10px] uppercase tracking-wider">International Students</div>
            </div>
            {FEES.map(([type, ng, intl], i) => (
              <div key={type} className={`px-6 py-4 grid grid-cols-3 gap-4 ${i % 2 === 0 ? "bg-card" : "bg-secondary"}`}>
                <div className="font-body text-foreground text-sm">{type}</div>
                <div className="font-mono text-foreground text-sm">{ng}</div>
                <div className="font-mono text-muted-foreground text-sm">{intl}</div>
              </div>
            ))}
          </div>
          <p className="font-mono text-muted-foreground text-[10px] mt-3">
            * Fees are subject to revision. Confirm current rates at uniabuja.edu.ng or by contacting the UIIPS admissions office.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="bg-primary p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-mono text-emerald-300 text-[10px] uppercase tracking-wider mb-2">Questions?</div>
            <h3 className="font-display text-white text-2xl font-bold mb-2">Contact the UIIPS Admissions Office</h3>
            <p className="font-body text-white/60 text-sm">Our team is available Monday to Friday, 8 AM – 4 PM WAT.</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-white/70"><Mail size={14} /><span className="font-mono text-xs">info@uniabuja.edu.ng</span></div>
            <div className="flex items-center gap-3 text-white/70"><Phone size={14} /><span className="font-mono text-xs">+234 903 683 6734, +234 815 581 0940</span></div>
            <div className="flex items-center gap-3 text-white/70"><MapPin size={14} /><span className="font-mono text-xs">Faculty of Arts Building, Gwagwalada Campus</span></div>
          </div>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
