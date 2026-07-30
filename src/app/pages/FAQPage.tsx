import { useState } from "react";
import { ChevronDown, ChevronUp, Info, Mail, Phone } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Footer } from "../components/Footer";
import { FAQS } from "../data";
import type { Page } from "../types";

interface Props {
  setPage: (p: Page) => void;
}

export function FAQPage({ setPage }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div>
      <PageHeader
        eyebrow="Support"
        title="Frequently Asked Questions"
        subtitle="Answers to the most common questions about UIIPS and the University of Abuja."
      />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`border transition-colors ${
                openIdx === i
                  ? "border-accent/40 bg-card"
                  : "border-border bg-card hover:border-accent/20"
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left"
              >
                <span className="font-display text-foreground font-semibold text-sm leading-snug">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 mt-0.5 text-accent">
                  {openIdx === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-6 border-t border-border pt-4">
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-secondary border border-border p-8 text-center">
          <Info size={24} className="text-accent mx-auto mb-3" />
          <h3 className="font-display text-foreground font-semibold text-lg mb-2">
            Didn't find your answer?
          </h3>
          <p className="font-body text-muted-foreground text-sm mb-5">
            Our administrative team is happy to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:uiips@uniabuja.edu.ng"
              className="flex items-center gap-2 font-mono text-accent text-xs hover:underline"
            >
              <Mail size={13} /> uiips@uniabuja.edu.ng
            </a>
            <span className="text-border hidden sm:block">|</span>
            <span className="flex items-center gap-2 font-mono text-muted-foreground text-xs">
              <Phone size={13} /> +234 912 441 9714
            </span>
          </div>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
