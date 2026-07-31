import {
  GraduationCap, ArrowRight, MapPin, Mail,
  CheckCircle, BookMarked, Globe, ChevronRight, Camera,
} from "lucide-react";
import { UniLogo } from "../components/UniLogo";
import { Footer } from "../components/Footer";
import { NEWS, EVENTS } from "../data";
import type { Page } from "../types";

interface Props {
  setPage: (p: Page) => void;
}

// Curated, genuinely Nigerian / Abuja-shot Unsplash photos
const CAMPUS_PHOTOS = [
  {
    url: "https://images.unsplash.com/photo-1778877035014-98c41b7c1460?w=900&h=600&fit=crop&auto=format",
    caption: "Lecture hall — University of Abuja",
    credit: "Ufoma Ojo",
  },
  {
    url: "https://images.unsplash.com/photo-1741900024959-c406f5e4eaa1?w=900&h=600&fit=crop&auto=format",
    caption: "Faculty complex, Gwagwalada Campus",
    credit: "Praise Godwin",
  },
  {
    url: "https://images.unsplash.com/photo-1627423893729-3a79f48ff473?w=900&h=600&fit=crop&auto=format",
    caption: "Students in session, Faculty of Arts",
    credit: "Emmanuel Ikwuegbu",
  },
  {
    url: "https://images.unsplash.com/photo-1778877036599-9a7aa57a160b?w=900&h=600&fit=crop&auto=format",
    caption: "Academic conference, Main Auditorium",
    credit: "Ufoma Ojo",
  },
];

export function HomePage({ setPage }: Props) {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative bg-primary min-h-[85vh] flex items-center overflow-hidden">
        {/* Full-bleed campus photo at low opacity as texture */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1650128351914-c84e15c730b2?w=1800&h=1000&fit=crop&auto=format')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-[#003D1F]/90" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[15, 35, 65, 85].map((pct) => (
            <div
              key={pct}
              className="absolute top-0 bottom-0 w-px bg-white/[0.035]"
              style={{ left: `${pct}%` }}
            />
          ))}
        </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full">         <div>
            <div className="font-mono text-emerald-300 text-[10px] tracking-[0.35em] uppercase mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-emerald-300 inline-block" />
              Est. April 12, 2024 — UIIPS
            </div>
            <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] mb-5">
              Nigeria's Institute for Publishing Studies
            </h1>
            <p className="font-body text-white/60 text-lg leading-relaxed mb-3 max-w-lg">
              The University of Abuja International Institute for Publishing
              Studies (UIIPS) was established by Vice-Chancellor Prof.
              Abdul-Rasheed Na'Allah to train professional manpower and raise
              publishing standards across Nigeria and Africa.
            </p>
            <p className="font-body text-white/45 text-sm leading-relaxed mb-10 max-w-lg">
              Our flagship 12-month professional Master's Degree in Publishing
              Studies is the first of its kind in the North-Central geopolitical
              zone of Nigeria.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setPage("postgraduate")}
                className="flex items-center gap-2 bg-white text-primary font-body text-sm px-6 py-3 hover:bg-white/90 transition-colors font-medium"
              >
                The Master's Programme <ArrowRight size={15} />
              </button>
              <button
                onClick={() => setPage("admissions")}
                className="flex items-center gap-2 border border-white/25 text-white font-body text-sm px-6 py-3 hover:border-white/50 transition-colors"
              >
                How to Apply
              </button>
            </div>
            <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-8">
              {[
                ["Apr 2024", "Institute Founded"],
                ["12 months", "Master's Duration"],
                ["12", "UniAbuja Faculties"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-emerald-300 text-2xl font-bold">{num}</div>
                  <div className="font-mono text-white/40 text-[10px] mt-1 uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero right: stacked campus photos */}
          <div className="flex flex-col gap-3 mt-8 md:mt-0">
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1650128351914-c84e15c730b2?w=700&h=380&fit=crop&auto=format"
                alt="University of Abuja campus building with lawn"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="font-mono text-white/50 text-[9px] uppercase tracking-widest mb-0.5">Campus</div>
                <div className="font-display text-white text-base leading-tight">Gwagwalada Campus, FCT Abuja</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1778877035014-98c41b7c1460?w=400&h=220&fit=crop&auto=format"
                  alt="Lecture hall at University of Abuja"
                  className="w-full h-36 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <div className="font-mono text-white/70 text-[8px] uppercase tracking-wider">Lecture Hall</div>
                </div>
              </div>
              <div className="relative overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1741900024959-c406f5e4eaa1?w=400&h=220&fit=crop&auto=format"
                  alt="Faculty building at University of Abuja"
                  className="w-full h-36 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <div className="font-mono text-white/70 text-[8px] uppercase tracking-wider">Faculty Complex</div>
                </div>
              </div>
            </div>
            {/* NUC accreditation badge */}
            <div className="bg-card border border-border p-4 shadow-xl flex items-center gap-4">
              <UniLogo size={40} />
              <div>
                <div className="font-mono text-muted-foreground text-[9px] uppercase tracking-widest mb-0.5">NUC Accredited</div>
                <div className="font-display text-foreground text-base font-bold leading-tight">UIIPS</div>
                <div className="font-body text-accent text-xs">Est. 12 April 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Campus Photo Gallery ── */}
      <section className="bg-foreground py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
          <div>
            <div className="font-mono text-emerald-300/60 text-[10px] uppercase tracking-[0.2em] mb-1 flex items-center gap-2">
              <Camera size={11} /> Campus Life
            </div>
            <h2 className="font-display text-white text-2xl font-bold">University of Abuja</h2>
          </div>
          <button
            onClick={() => setPage("about")}
            className="font-mono text-emerald-300/60 text-[10px] uppercase tracking-wider hover:text-emerald-300 transition-colors flex items-center gap-1"
          >
            About UIIPS <ChevronRight size={12} />
          </button>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {CAMPUS_PHOTOS.map((photo) => (
            <div key={photo.url} className="relative overflow-hidden group">
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="font-body text-white text-xs leading-snug">{photo.caption}</div>
                <div className="font-mono text-white/50 text-[9px] mt-0.5">Photo: {photo.credit}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── What UIIPS Offers ── */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="font-mono text-accent text-[10px] tracking-[0.2em] uppercase mb-2">The Institute</div>
            <h2 className="font-display text-foreground text-3xl font-bold">What UIIPS Offers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <GraduationCap size={22} />,
                title: "Professional Master's in Publishing Studies",
                desc: "A 12-month full-time postgraduate programme designed to produce publishing professionals equipped for editorial, digital, business, and policy roles in Nigerian and African publishing.",
                cta: "Programme Details",
                page: "postgraduate" as Page,
              },
              {
                icon: <BookMarked size={22} />,
                title: "Industry Partnerships",
                desc: "UIIPS works closely with Nigerian publishers, university presses, and international media organisations to provide students with real-world project placements integrated directly into the 12-month curriculum.",
                cta: "About UIIPS",
                page: "about" as Page,
              },
              {
                icon: <Globe size={22} />,
                title: "African Publishing Research",
                desc: "The institute produces and disseminates original research on African book history, open-access policy, media economics, and the evolving landscape of knowledge production in Nigeria and West Africa.",
                cta: "Learn More",
                page: "about" as Page,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border p-8 hover:border-accent/35 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="text-accent mb-5">{item.icon}</div>
                <h3 className="font-display text-foreground text-xl font-semibold mb-3">{item.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{item.desc}</p>
                <button
                  onClick={() => setPage(item.page)}
                  className="flex items-center gap-2 font-mono text-accent text-[10px] uppercase tracking-wider hover:gap-3 transition-all"
                >
                  {item.cta} <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder's quote strip ── */}
      <section className="bg-secondary border-y border-border py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="font-mono text-accent text-[10px] uppercase tracking-wider mb-3">Founder's Vision</div>
            <blockquote className="font-display text-foreground text-2xl font-semibold leading-relaxed italic mb-4">
              "UIIPS was established to train professional manpower and improve
              publishing standards in Nigeria and across Africa."
            </blockquote>
            <div className="font-body text-muted-foreground text-sm">
              —{" "}
              <span className="font-semibold text-foreground">Prof. Abdul-Rasheed Na'Allah</span>,
              Vice-Chancellor, University of Abuja · April 12, 2024
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { label: "Institute Founded", value: "12 Apr 2024" },
              { label: "Programme Duration", value: "12 Months" },
              { label: "Degree Awarded", value: "Professional MSc" },
            ].map((s) => (
              <div key={s.label} className="bg-card border border-border px-5 py-4 flex items-center justify-between">
                <span className="font-body text-muted-foreground text-sm">{s.label}</span>
                <span className="font-display text-foreground font-bold text-sm">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why UIIPS ── */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="font-mono text-emerald-300 text-[10px] tracking-[0.2em] uppercase mb-4">Why Choose UIIPS</div>
            <h2 className="font-display text-white text-3xl font-bold mb-6">
              A Federal University at the Heart of Nigeria
            </h2>
            <p className="font-body text-white/60 leading-relaxed mb-8">
              Located in Abuja — Nigeria's capital and home to government
              ministries, international organisations, and a growing media
              industry — UIIPS is uniquely placed to connect publishing education
              with the institutions that shape national and continental knowledge
              policy.
            </p>
            <div className="space-y-4">
              {[
                "First professional publishing institute in the North-Central geopolitical zone",
                "Founded by a Vice-Chancellor with a track record of academic publishing leadership",
                "NUC-accredited 12-month professional Master's degree",
                "Direct access to Abuja's publishers, ministries, and media organisations",
                "Affordable federal university tuition with access to FGSB scholarships",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-emerald-300 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-white/70 text-sm">{point}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setPage("about")}
              className="mt-8 flex items-center gap-2 bg-white text-primary font-body text-sm px-6 py-3 hover:bg-white/90 transition-colors"
            >
              Learn More About UIIPS <ArrowRight size={15} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "1988", sub: "UniAbuja Established" },
              { value: "2024", sub: "UIIPS Founded" },
              { value: "12", sub: "Faculties University-wide" },
              { value: "55k+", sub: "Total Student Population" },
            ].map((s) => (
              <div key={s.sub} className="bg-white/8 border border-white/10 p-6 flex flex-col items-center text-center">
                <div className="font-display text-emerald-300 text-3xl font-bold">{s.value}</div>
                <div className="font-body text-white/55 text-xs mt-2 leading-tight">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── News + Events ── */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-14">
          {/* News */}
          <div className="md:col-span-3">
            <div className="font-mono text-accent text-[10px] tracking-[0.2em] uppercase mb-2">Latest</div>
            <h2 className="font-display text-foreground text-3xl font-bold mb-10">News</h2>
            <div className="space-y-8">
              {NEWS.map((item) => (
                <div key={item.id} className="flex gap-5 group cursor-pointer">
                  <div className="relative w-28 h-20 flex-shrink-0 overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-[9px] border border-primary/25 text-primary px-2 py-0.5">{item.tag}</span>
                      <span className="font-mono text-muted-foreground text-[10px]">{item.date}</span>
                    </div>
                    <h3 className="font-display text-foreground font-semibold text-sm leading-snug mb-1 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-xs leading-relaxed line-clamp-2">{item.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events sidebar */}
          <div className="md:col-span-2">
            <div className="font-mono text-accent text-[10px] tracking-[0.2em] uppercase mb-2">Schedule</div>
            <h2 className="font-display text-foreground text-3xl font-bold mb-10">Upcoming Events</h2>
            <div className="space-y-3">
              {EVENTS.slice(0, 4).map((event) => (
                <div
                  key={event.id}
                  className="flex gap-4 p-4 border border-border hover:border-accent/30 hover:bg-card transition-all duration-200 group cursor-pointer"
                  onClick={() => setPage("events")}
                >
                  <div className="w-12 flex-shrink-0 text-center pt-0.5">
                    <div className="font-mono text-accent text-[9px] uppercase tracking-wider">{event.month}</div>
                    <div className="font-display text-foreground text-2xl font-bold leading-none mt-0.5">{event.day}</div>
                  </div>
                  <div className="flex-1 min-w-0 border-l border-border pl-4">
                    <div className="font-mono text-muted-foreground text-[9px] uppercase tracking-wider mb-0.5">{event.type}</div>
                    <div className="font-body text-foreground text-sm font-medium group-hover:text-accent transition-colors leading-snug">
                      {event.title}
                    </div>
                    <div className="flex items-center gap-1 mt-1.5 text-muted-foreground">
                      <MapPin size={11} />
                      <span className="font-mono text-[10px]">{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={() => setPage("events")}
                className="w-full text-center font-mono text-accent text-[10px] uppercase tracking-wider py-3 hover:text-accent/70 transition-colors flex items-center justify-center gap-2"
              >
                View all events <ChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-secondary py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-mono text-accent text-[10px] tracking-[0.2em] uppercase mb-2">Get in Touch</div>
            <h2 className="font-display text-foreground text-2xl font-bold mb-1">Questions About UIIPS?</h2>
            <p className="font-body text-muted-foreground text-sm">Our admissions team is available Monday–Friday, 8 AM–4 PM WAT.</p>
          </div>
          <a
            href="mailto:uiips@uniabuja.edu.ng"
            className="flex items-center gap-2 bg-primary text-white font-body text-sm px-6 py-3 hover:bg-accent transition-colors flex-shrink-0"
          >
            <Mail size={15} /> uiips@uniabuja.edu.ng
          </a>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}
