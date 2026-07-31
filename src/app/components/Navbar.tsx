import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Page } from "../types";
import { UniLogo } from "./UniLogo";

interface NavbarProps {
  current: Page;
  setPage: (p: Page) => void;
}

const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Admissions", page: "admissions" },
  { label: "Postgraduate", page: "postgraduate" },
  { label: "Events", page: "events" },
  { label: "Newsletter", page: "newsletter" },
  { label: "FAQ", page: "faq" },
];

export function Navbar({ current, setPage }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => setPage("home")}
          className="flex items-center gap-3 flex-shrink-0"
        >
          <UniLogo size={36} />
          <div className="text-left">
            <div className="font-display text-white font-semibold text-sm leading-tight">
              University of Abuja
            </div>
            <div className="font-mono text-emerald-300 text-[9px] tracking-[0.22em] uppercase leading-tight">
              Intl. Institute for Publishing Studies
            </div>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.page}
              onClick={() => setPage(item.page)}
              className={`font-body text-sm transition-colors whitespace-nowrap ${
                current === item.page
                  ? "text-emerald-300"
                  : "text-white/65 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-primary border-t border-white/10 px-4 sm:px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                setPage(item.page);
                setOpen(false);
              }}
              className={`text-left font-body text-sm py-1 ${
                current === item.page ? "text-emerald-300" : "text-white/65"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
