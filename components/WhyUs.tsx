"use client";

import { ShieldCheck, BarChart3, Globe, MessageSquare } from "lucide-react";
import { useLang } from "@/lib/i18n";

const featureIcons = [ShieldCheck, BarChart3, Globe, MessageSquare];
const statsNumbers = ["200+", "5 000+", "14"];

export default function WhyUs() {
  const { t } = useLang();

  return (
    <section id="about" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — founder */}
          <div>
            <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-3">{t.about.sectionLabel}</p>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">{t.about.title}</h2>

            <div className="border-l-4 border-green-600 pl-6 mb-8">
              <blockquote className="text-slate-700 text-base leading-relaxed">
                &ldquo;{t.about.quote}&rdquo;
              </blockquote>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-200 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">{t.about.founderName}</p>
                <p className="text-slate-500 text-xs mt-0.5">{t.about.founderRole}</p>
                <div className="flex gap-2 mt-2">
                  {t.about.tags.map(tag => (
                    <span key={tag} className="text-[11px] border border-slate-200 text-slate-500 px-2 py-0.5 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — features */}
          <div>
            <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-3">{t.about.whyLabel}</p>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t.about.whyTitle}</h2>

            <div className="space-y-0 border border-slate-200">
              {t.about.features.map((f, i) => {
                const Icon = featureIcons[i];
                return (
                  <div key={f.title} className={`flex items-start gap-4 p-5 ${i < t.about.features.length - 1 ? "border-b border-slate-200" : ""} hover:bg-white transition-colors`}>
                    <div className="w-9 h-9 bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-green-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-0.5">{f.title}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-3 gap-0 border border-slate-200 border-t-0">
              {statsNumbers.map((n, i) => (
                <div key={i} className={`px-5 py-4 ${i < 2 ? "border-r border-slate-200" : ""}`}>
                  <p className="text-xl font-bold text-slate-900">{n}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{t.about.statsLabels[i]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
