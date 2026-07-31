import { useState } from "react";
import {
  Send, CheckCircle, FileText, Calendar, Award,
  Users, Globe, BookOpen,
} from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Footer } from "../components/Footer";
import type { Page } from "../types";

interface Props {
  setPage: (p: Page) => void;
}

const NEWSLETTERS = [
  {
    id: 1,
    title: "The Abuja Publisher — Inaugural Issue",
    date: "May 2024",
    summary:
      "Marking the launch of UIIPS on April 12, 2024: a message from Vice-Chancellor Prof. Abdul-Rasheed Na'Allah, an overview of the founding faculty, and a preview of the 12-month Master's curriculum.",
    tag: "Inaugural",
  },
  {
    id: 2,
    title: "UIIPS Year One in Review",
    date: "April 2025",
    summary:
      "Celebrating the first full cohort of the professional Master's programme — graduate profiles, industry placement highlights, and what the second cohort can expect.",
    tag: "Annual",
  },
  {
    id: 3,
    title: "Research Focus: Open Access in West Africa",
    date: "Coming — August 2026",
    summary:
      "Our upcoming issue features an in-depth report on the state of open-access publishing across West Africa, with contributions from UIIPS lecturers and guest scholars.",
    tag: "Upcoming",
  },
];

const CONTENTS = [
  { icon: <FileText size={18} />, title: "Research Highlights", desc: "Summaries of recent publications and ongoing research by UIIPS faculty and Master's students." },
  { icon: <Calendar size={18} />, title: "Events & Deadlines", desc: "Upcoming academic events, conference calls, submission deadlines, and open day announcements." },
  { icon: <Award size={18} />, title: "Opportunities", desc: "Scholarships, fellowships, internships, and job openings in Nigerian and African publishing." },
  { icon: <Users size={18} />, title: "Student Spotlight", desc: "Features on current students and recent graduates — their work, achievements, and career paths." },
  { icon: <Globe size={18} />, title: "Industry News", desc: "Curated news from the Nigerian and African publishing landscape, including new titles and industry reports." },
  { icon: <BookOpen size={18} />, title: "Reading List", desc: "Faculty-recommended reading — one book, one journal article, and one open-access resource per issue." },
];

export function NewsletterPage({ setPage }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("student");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <div>
      <PageHeader
        eyebrow="Newsletter"
        title="The Abuja Publisher"
        subtitle="The official newsletter of UIIPS — research updates, events, opportunities, and more, delivered to your inbox."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-14">
        {/* Subscribe card */}
        <div className="md:col-span-2">
          <div className="bg-card border border-border p-6 md:p-8 md:sticky md:top-24">
            {!submitted ? (
              <>
                <div className="font-mono text-accent text-[10px] uppercase tracking-wider mb-4">Subscribe</div>
                <h2 className="font-display text-foreground text-2xl font-bold mb-3">Join Our Mailing List</h2>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                  Receive each issue of The Abuja Publisher directly in your inbox. Published monthly during the academic session.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-mono text-muted-foreground text-[10px] uppercase tracking-wider block mb-1.5">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="e.g. Amaka Okafor"
                      className="w-full bg-secondary border border-border text-foreground placeholder-muted-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-muted-foreground text-[10px] uppercase tracking-wider block mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="e.g. amaka@example.com"
                      className="w-full bg-secondary border border-border text-foreground placeholder-muted-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-muted-foreground text-[10px] uppercase tracking-wider block mb-1.5">I am a…</label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-secondary border border-border text-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="student">Prospective Student</option>
                      <option value="current">Current UIIPS Student</option>
                      <option value="academic">Academic / Researcher</option>
                      <option value="industry">Publishing Professional</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white font-body text-sm py-3 hover:bg-accent transition-colors"
                  >
                    <Send size={14} /> Subscribe Now
                  </button>
                </form>
                <p className="font-mono text-muted-foreground text-[9px] mt-4 leading-relaxed">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <CheckCircle size={40} className="text-accent mx-auto mb-4" />
                <h3 className="font-display text-foreground text-xl font-bold mb-2">You're subscribed!</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Thank you, {name || "subscriber"}. You'll receive the next issue of The Abuja Publisher in your inbox.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Archive + Contents */}
        <div className="md:col-span-3 space-y-10">
          <div>
            <div className="font-mono text-accent text-[10px] uppercase tracking-wider mb-2">Issues</div>
            <h2 className="font-display text-foreground text-2xl font-bold mb-6">Newsletter Archive</h2>
            <div className="space-y-5">
              {NEWSLETTERS.map((nl) => (
                <div key={nl.id} className="bg-card border border-border p-6 hover:border-accent/30 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-display text-foreground font-semibold text-lg">{nl.title}</h3>
                      <div className="font-mono text-muted-foreground text-[10px] mt-1">{nl.date}</div>
                    </div>
                    <span className={`font-mono text-[9px] px-2 py-1 flex-shrink-0 uppercase tracking-wide ${
                      nl.tag === "Upcoming"
                        ? "bg-secondary border border-border text-muted-foreground"
                        : "bg-accent/10 text-accent border border-accent/25"
                    }`}>
                      {nl.tag}
                    </span>
                  </div>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{nl.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-accent text-[10px] uppercase tracking-wider mb-4">What to Expect</div>
            <h2 className="font-display text-foreground text-2xl font-bold mb-6">What's Inside Each Issue</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTENTS.map((item) => (
                <div key={item.title} className="flex gap-3 p-4 bg-secondary border border-border">
                  <div className="text-accent flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <div className="font-display text-foreground font-semibold text-sm mb-1">{item.title}</div>
                    <div className="font-body text-muted-foreground text-xs leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
