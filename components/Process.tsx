"use client";

import { Search, BarChart2, PhoneCall, Building2, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const stepIcons = [Search, BarChart2, PhoneCall, Building2];
const stepNums = ["01", "02", "03", "04"];

export default function Process() {
  const { t } = useLang();

  return (
    <section id="process" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">{t.process.sectionLabel}</p>
            <h2 className="text-2xl font-bold text-white">{t.process.title}</h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
            {t.process.ctaLink} <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-700">
          {t.process.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={i} className="bg-slate-900 p-7 hover:bg-slate-800 transition-colors group">
                <div className="flex items-start justify-between mb-6">
                  <Icon className="w-5 h-5 text-green-400" strokeWidth={1.5} />
                  <span className="text-3xl font-bold text-slate-700 group-hover:text-slate-600 transition-colors select-none">
                    {stepNums[i]}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-700 p-6">
          <div>
            <p className="text-white font-semibold text-sm">{t.process.ctaTitle}</p>
            <p className="text-slate-400 text-sm mt-0.5">{t.process.ctaDesc}</p>
          </div>
          <a href="#contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 text-sm font-semibold transition-colors">
            {t.process.ctaBtn}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
