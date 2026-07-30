import { useState } from "react";
import { Award, CheckCircle, Users, FileText } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Footer } from "../components/Footer";
import type { Page } from "../types";

type AboutTab = "history" | "objectives" | "vision" | "mission";

interface Props {
  setPage: (p: Page) => void;
}

const TABS: { id: AboutTab; label: string }[] = [
  { id: "history", label: "History" },
  { id: "objectives", label: "Objectives" },
  { id: "vision", label: "Vision" },
  { id: "mission", label: "Mission" },
];

const OBJECTIVES = [
  {
    num: "01",
    title: "Train Publishing Professionals",
    body: "Equip graduates of the 12-month professional Master's with the editorial, digital, business, and policy skills needed to lead Nigerian and African publishing organisations.",
  },
  {
    num: "02",
    title: "Improve Publishing Standards in Nigeria",
    body: "Work with industry, government, and the NUC to raise the quality, rigour, and international standing of academic and trade publishing produced in Nigeria.",
  },
  {
    num: "03",
    title: "Advance Publishing Research in Africa",
    body: "Generate and disseminate original scholarly research on African book history, media economics, open-access policy, and the evolving landscape of knowledge production in the Global South.",
  },
  {
    num: "04",
    title: "Support Nigerian Industry",
    body: "Build structured links with Nigerian publishing houses, university presses, and media organisations to provide students with real-world placements and collaborative research opportunities.",
  },
  {
    num: "05",
    title: "Promote Open Knowledge",
    body: "Champion open-access publishing principles, advocating for freely accessible research and supporting NUC guidelines on knowledge dissemination across Nigerian federal universities.",
  },
];

const TIMELINE = [
  ["1988", "University of Abuja established, Jan 1"],
  ["1995", "First international research partnership"],
  ["2003", "Flagship interdisciplinary journal launched"],
  ["2010", "Digital repository opened to the public"],
  ["2024", "UIIPS launched by VC Prof. Na'Allah, Apr 12"],
];

const VISION_STATS = [
  { label: "Nigeria's Premier Publishing Institute", icon: <Award size={26} />, value: "2030" },
  { label: "NUC-Accredited Programme", icon: <CheckCircle size={26} />, value: "✓" },
  { label: "Industry Placements Targeted", icon: <Users size={26} />, value: "100+" },
  { label: "Research Publications Goal", icon: <FileText size={26} />, value: "50+" },
];

export function AboutPage({ setPage }: Props) {
  const [tab, setTab] = useState<AboutTab>("history");

  return (
    <div>
      {/* Photo banner — real Nigerian university auditorium */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1778877036599-9a7aa57a160b?w=1800&h=800&fit=crop&auto=format"
          alt="University of Abuja conference auditorium"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-10">
          <div className="font-mono text-emerald-300 text-[10px] tracking-[0.25em] uppercase mb-3 flex items-center gap-3">
            <span className="w-6 h-px bg-emerald-300" /> Institution
          </div>
          <h1 className="font-display text-white text-4xl md:text-6xl font-bold mb-2">About UIIPS</h1>
          <p className="font-body text-white/60 text-base max-w-2xl">
            Nigeria's first dedicated professional publishing institute, established April 12, 2024.
          </p>
        </div>
        {/* Photo credit */}
        <div className="absolute top-4 right-6 font-mono text-white/30 text-[9px]">
          Photo: Ufoma Ojo / Unsplash
        </div>
      </div>

      {/* Tab bar */}
      <div className="bg-secondary border-b border-border sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 flex overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`font-body text-sm px-6 py-4 border-b-2 transition-colors whitespace-nowrap ${
                tab === t.id
                  ? "border-accent text-accent"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* History */}
        {tab === "history" && (
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-6">
              <h2 className="font-display text-foreground text-3xl font-bold">History of UIIPS</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                The University of Abuja was established on January 1, 1988, by an act of the Federal
                Government of Nigeria, with a mandate to serve as a centre of academic excellence in
                the nation's capital. Over the following decades it grew into one of Nigeria's foremost
                federal universities, offering programmes across 12 faculties and serving more than
                55,000 students.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                The University of Abuja International Institute for Publishing Studies (UIIPS) was
                formally launched on{" "}
                <strong className="text-foreground">April 12, 2024</strong>, by Vice-Chancellor{" "}
                <strong className="text-foreground">Prof. Abdul-Rasheed Na'Allah</strong>. Rather than
                a conventional academic department, UIIPS was conceived as a professional institute —
                modelled on global best practice in publishing education — with a clear mandate: to
                train professional manpower and improve publishing standards in Nigeria and across Africa.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                The institute's flagship offering is a{" "}
                <strong className="text-foreground">
                  12-month professional Master's Degree in Publishing Studies
                </strong>{" "}
                — the first programme of its kind in the North-Central geopolitical zone. It draws
                together expertise from the Faculty of Arts, Faculty of Social Sciences, and Faculty
                of Law, combining editorial theory with practical industry training through integrated
                placement projects with Nigerian and international publishing organisations.
              </p>

              {/* Timeline */}
              <div className="pt-4 space-y-4">
                {TIMELINE.map(([year, event]) => (
                  <div key={year} className="flex gap-4 items-start">
                    <div className="font-mono text-accent text-xs font-bold w-10 flex-shrink-0 pt-0.5">{year}</div>
                    <div className="font-body text-foreground/75 text-sm leading-snug border-l border-border pl-4 pb-3">
                      {event}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              {/* Main campus shot */}
              <div className="relative overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1778877035014-98c41b7c1460?w=700&h=480&fit=crop&auto=format"
                  alt="Lecture hall at University of Abuja"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="font-mono text-white/50 text-[9px] uppercase tracking-widest mb-0.5">
                    UniAbuja · Lecture Hall
                  </div>
                  <div className="font-display text-white text-sm">Faculty of Arts, Gwagwalada</div>
                </div>
                <div className="absolute top-3 right-3 font-mono text-white/30 text-[8px]">
                  Photo: Ufoma Ojo
                </div>
              </div>

              {/* Two smaller shots side-by-side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1741900024959-c406f5e4eaa1?w=400&h=280&fit=crop&auto=format"
                    alt="University of Abuja faculty complex"
                    className="w-full h-36 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <div className="font-mono text-white/70 text-[8px] uppercase">Faculty Complex</div>
                  </div>
                  <div className="absolute top-2 right-2 font-mono text-white/30 text-[8px]">Praise Godwin</div>
                </div>
                <div className="relative overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1627423893729-3a79f48ff473?w=400&h=280&fit=crop&auto=format"
                    alt="Nigerian university students"
                    className="w-full h-36 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <div className="font-mono text-white/70 text-[8px] uppercase">Students</div>
                  </div>
                  <div className="absolute top-2 right-2 font-mono text-white/30 text-[8px]">E. Ikwuegbu</div>
                </div>
              </div>

              <div className="relative overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1650128351914-c84e15c730b2?w=700&h=280&fit=crop&auto=format"
                  alt="University of Abuja campus building"
                  className="w-full h-36 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <div className="font-mono text-white/70 text-[8px] uppercase">Main Campus, Gwagwalada</div>
                </div>
                <div className="absolute top-2 right-3 font-mono text-white/30 text-[8px]">Ufoma Ojo</div>
              </div>
            </div>
          </div>
        )}

        {/* Objectives */}
        {tab === "objectives" && (
          <div className="max-w-3xl">
            <h2 className="font-display text-foreground text-3xl font-bold mb-10">Objectives</h2>
            <div className="space-y-5">
              {OBJECTIVES.map((obj) => (
                <div
                  key={obj.num}
                  className="flex gap-6 p-6 bg-card border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="font-display text-accent/35 text-3xl font-bold flex-shrink-0 leading-none mt-1">
                    {obj.num}
                  </div>
                  <div>
                    <h3 className="font-display text-foreground font-semibold text-lg mb-2">{obj.title}</h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">{obj.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Objectives illustration */}
            <div className="mt-10 relative overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1778876088510-84d7d8defaaa?w=900&h=400&fit=crop&auto=format"
                alt="Students attending a lecture at University of Abuja"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent" />
              <div className="absolute inset-0 flex items-center px-10">
                <div>
                  <div className="font-mono text-emerald-300 text-[9px] uppercase tracking-wider mb-2">Commitment</div>
                  <div className="font-display text-white text-xl font-bold max-w-xs leading-snug">
                    Training Nigeria's next generation of publishing leaders
                  </div>
                </div>
              </div>
              <div className="absolute top-3 right-3 font-mono text-white/30 text-[8px]">Photo: Ufoma Ojo</div>
            </div>
          </div>
        )}

        {/* Vision */}
        {tab === "vision" && (
          <div className="space-y-12">
            {/* Full-width photo */}
            <div className="relative overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1778877031917-82a1b4bae3bc?w=1400&h=500&fit=crop&auto=format"
                alt="University of Abuja main auditorium"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="font-mono text-emerald-300 text-[9px] uppercase tracking-wider mb-2">University of Abuja — Main Auditorium</div>
                <div className="font-display text-white text-2xl font-bold">Where Nigeria's Publishing Future Begins</div>
              </div>
              <div className="absolute top-4 right-6 font-mono text-white/30 text-[8px]">Photo: Ufoma Ojo</div>
            </div>

            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="font-display text-foreground text-3xl font-bold mb-6">Our Vision</h2>
                <blockquote className="font-display text-foreground text-xl leading-relaxed italic mb-6 border-l-2 border-accent pl-6">
                  "To be Nigeria's premier institute for publishing education and
                  research — producing professionals who lead the transformation
                  of African knowledge production."
                </blockquote>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  We envision UIIPS as a nationally and internationally recognised
                  centre of excellence — a place where the next generation of
                  Nigerian and African editors, publishers, and media professionals
                  are trained to the highest standards while remaining deeply
                  rooted in the local context.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  By 2030, we aim for UIIPS graduates to be recognised as the most
                  sought-after publishing professionals in Nigeria, with the
                  institute producing research that shapes publishing policy across
                  West Africa.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {VISION_STATS.map((item) => (
                  <div
                    key={item.label}
                    className="bg-primary p-6 flex flex-col items-center text-center gap-3"
                  >
                    <div className="text-emerald-300">{item.icon}</div>
                    <div className="font-display text-white text-3xl font-bold">{item.value}</div>
                    <div className="font-body text-white/55 text-xs leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mission */}
        {tab === "mission" && (
          <div className="max-w-3xl">
            <h2 className="font-display text-foreground text-3xl font-bold mb-8">Mission Statement</h2>

            {/* Mission photo */}
            <div className="relative overflow-hidden shadow-lg mb-8">
              <img
                src="https://images.unsplash.com/photo-1665586510498-4d2e5d29e2f4?w=900&h=340&fit=crop&auto=format"
                alt="Nigerian university students in classroom"
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/75 to-primary/20" />
              <div className="absolute inset-0 flex items-center px-10">
                <div className="font-display text-white text-xl italic leading-relaxed max-w-md">
                  "To serve the publishing industry, the university community, and the Nigerian public."
                </div>
              </div>
              <div className="absolute top-3 right-3 font-mono text-white/30 text-[8px]">Photo: Dike Darion</div>
            </div>

            <div className="bg-primary text-white p-10 mb-10">
              <p className="font-display text-xl leading-relaxed italic">
                "To provide world-class professional education in publishing
                studies rooted in the Nigerian experience; to conduct research
                that advances the theory and practice of publishing in Africa; and
                to serve the publishing industry, the university community, and
                the Nigerian public through partnership, outreach, and open
                knowledge."
              </p>
              <div className="mt-6 font-mono text-emerald-300 text-[9px] tracking-[0.2em] uppercase">
                — UIIPS Mission Charter, University of Abuja, April 2024
              </div>
            </div>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-sm">
              <p>
                UIIPS was established with a clear, practical purpose: to close
                the gap between Nigeria's publishing potential and the professional
                capacity of its publishing workforce. Our mission begins with
                training — producing graduates who can lead editorial offices,
                manage publishing enterprises, and navigate the digital
                transformation of African media.
              </p>
              <p>
                We serve our students first, preparing them with the skills and
                critical frameworks to lead Nigerian and African publishing into a
                new era. We also serve the wider university community, the
                industry, and the public — through research, partnerships, and a
                commitment to open and accessible knowledge.
              </p>
              <p>
                Located in Abuja, the seat of Nigeria's federal government, we are
                uniquely positioned to bridge the worlds of academic publishing,
                policy, and public knowledge — and we intend to use that position
                well.
              </p>
            </div>
          </div>
        )}
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
