"use client";

import { Heart, Bone, Baby, ClipboardCheck, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const icons = [Heart, Bone, Baby, ClipboardCheck];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-2">{t.services.sectionLabel}</p>
            <h2 className="text-2xl font-bold text-slate-900">{t.services.title}</h2>
          </div>
          <a href="#clinics" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            {t.services.viewAll} <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="bg-white p-7 hover:bg-slate-50 transition-colors group cursor-pointer">
                <div className="mb-5">
                  <Icon className="w-6 h-6 text-green-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">{item.count}</span>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-green-600 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
