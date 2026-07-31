import { Mail, Phone } from "lucide-react";
import type { Page } from "../types";
import { UniLogo } from "./UniLogo";

interface FooterProps {
  setPage: (p: Page) => void;
}

const COLUMNS: { title: string; links: [string, Page][] }[] = [
  {
    title: "Admissions",
    links: [
      ["Overview", "admissions"],
      ["Postgraduate", "postgraduate"],
      ["Requirements", "admissions"],
      ["Apply Now", "admissions"],
    ],
  },
  {
    title: "Information",
    links: [
      ["About UIIPS", "about"],
      ["Events", "events"],
      ["Newsletter", "newsletter"],
      ["FAQ", "faq"],
    ],
  },
  {
    title: "Quick Links",
    links: [
      ["Home", "home"],
      ["About", "about"],
      ["FAQ", "faq"],
      ["Events", "events"],
    ],
  },
];

export function Footer({ setPage }: FooterProps) {
  return (
    <footer className="bg-primary border-t border-white/10 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <UniLogo size={44} />
            <div>
              <div className="font-display text-white text-sm font-semibold leading-tight">
                University of Abuja
              </div>
              <div className="font-mono text-emerald-300 text-[9px] uppercase tracking-wider leading-tight">
                UIIPS
              </div>
            </div>
          </div>
          <p className="font-body text-white/45 text-xs leading-relaxed mb-4">
            International Institute for Publishing Studies. Faculty of Arts,
            Gwagwalada Campus, Abuja, Nigeria. Est. April 12, 2024.
          </p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-white/40">
              <Mail size={11} />
              <span className="font-mono text-[10px]">uiips@uniabuja.edu.ng</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <Phone size={11} />
              <span className="font-mono text-[10px]">+234 912 441 9714</span>
            </div>
          </div>
        </div>

        {/* Link columns */}
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="font-mono text-emerald-300 text-[10px] uppercase tracking-[0.2em] mb-4">
              {col.title}
            </div>
            <ul className="space-y-2.5">
              {col.links.map(([label, page]) => (
                <li key={label}>
                  <button
                    onClick={() => setPage(page)}
                    className="font-body text-white/45 text-xs hover:text-white/80 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-2">
        <div className="font-mono text-white/25 text-[10px]">
          © 2026 University of Abuja — UIIPS. All rights reserved.
        </div>
        <div className="font-mono text-white/25 text-[10px]">
          Est. April 12, 2024 · Gwagwalada, FCT, Nigeria
        </div>
      </div>
    </footer>
  );
}
