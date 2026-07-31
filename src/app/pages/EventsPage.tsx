import { useState } from "react";
import { Calendar, Clock, MapPin, Mail } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Footer } from "../components/Footer";
import { EVENTS } from "../data";
import type { Page } from "../types";

interface Props {
  setPage: (p: Page) => void;
}

export function EventsPage({ setPage }: Props) {
  const allTypes: string[] = [
    "All",
    ...Array.from(new Set(EVENTS.map((event: (typeof EVENTS)[number]) => event.type))),
  ];
  const [filter, setFilter] = useState<string>("All");

  const filtered: (typeof EVENTS)[number][] =
    filter === "All"
      ? EVENTS
      : EVENTS.filter((event: (typeof EVENTS)[number]) => event.type === filter);

  return (
    <div>
      <PageHeader
        eyebrow="Schedule"
        title="Upcoming Events"
        subtitle="Academic events, workshops, lectures, and open days from UIIPS and the University of Abuja."
      />

      {/* Filter bar */}
      <div className="bg-secondary border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 flex-wrap">
          {allTypes.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              aria-pressed={filter === t}
              className={`font-mono text-[10px] px-3 py-1.5 transition-colors ${
                filter === t
                  ? "bg-primary text-white"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="space-y-5">
  {filtered.length === 0 ? (
    <div className="bg-card border border-border p-8 text-center">
      <h3 className="font-display text-xl font-bold text-foreground mb-2">
        No events found
      </h3>
      <p className="font-body text-muted-foreground">
        There are currently no events in this category.
      </p>
    </div>
  ) : (
    filtered.map((event) => (
            <div
              key={event.id}
              className="bg-card border border-border hover:border-accent/35 hover:-translate-y-1 transition-all duration-200 group overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                {/* Date column */}
                <div className="bg-primary flex-shrink-0 w-full sm:w-24 flex flex-col items-center justify-center py-5 sm:py-6 px-4 text-center">
                  <div className="font-mono text-emerald-300 text-[10px] uppercase tracking-wider">
                    {event.month}
                  </div>
                  <div className="font-display text-white text-3xl sm:text-4xl font-bold leading-none mt-1">
                    {event.day}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-4 sm:p-6 min-w-0">
                  <div className="flex items-start gap-4 mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-[9px] bg-secondary border border-border text-muted-foreground px-2 py-0.5 uppercase tracking-wider">
                        {event.type}
                      </span>
                      {event.free && (
                        <span className="font-mono text-[9px] bg-accent/10 border border-accent/25 text-accent px-2 py-0.5 uppercase tracking-wider">
                          Free Entry
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="font-display text-foreground text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                    {event.desc}
                  </p>
                  <div className="flex flex-wrap items-center gap-5">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar size={13} />
                      <span className="font-mono text-[10px]">{event.fullDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock size={13} />
                      <span className="font-mono text-[10px]">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin size={13} />
                      <span className="font-mono text-[10px]">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
         )}
        </div>

        {/* Contact strip */}
        <div className="mt-12 bg-secondary border border-border p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          <div>
            <h3 className="font-display text-foreground font-semibold text-lg mb-1">
              Want to be notified about new events?
            </h3>
            <p className="font-body text-muted-foreground text-sm">
              Email us and we'll add you to the UIIPS events mailing list.
            </p>
          </div>
          <a
            href="mailto:uiips@uniabuja.edu.ng"
            className="flex items-center justify-center gap-2 bg-primary text-white font-body text-sm px-6 py-3 hover:bg-accent transition-colors w-full md:w-auto break-all"
          >
            <Mail size={14} /> uiips@uniabuja.edu.ng
          </a>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
