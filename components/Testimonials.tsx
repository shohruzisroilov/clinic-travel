"use client";

import { Star } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-2">{t.testimonials.sectionLabel}</p>
          <h2 className="text-2xl font-bold text-slate-900">{t.testimonials.title}</h2>
          <p className="text-slate-500 text-sm mt-1">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
          {t.testimonials.items.map((item) => (
            <div key={item.name} className="bg-white p-6 flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">&ldquo;{item.text}&rdquo;</p>
              <div className="flex gap-1.5 mb-4 flex-wrap">
                <span className="text-[11px] bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 font-semibold uppercase tracking-wide">{item.treatment}</span>
                <span className="text-[11px] border border-slate-200 text-slate-500 px-2 py-0.5 font-medium">{item.clinic}</span>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-8 h-8 bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 flex-shrink-0">
                  {item.name[0]}
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">{item.name}</p>
                  <p className="text-slate-400 text-xs">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
