"use client";

import { ArrowRight, Star, ChevronRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const regionKeys = ["Toshkent", "Samarqand", "Buxoro", "Farg'ona vodiysi"] as const;
const regionCounts = [87, 34, 21, 28];
const statsNumbers = ["200+", "5 000+", "14", "4.9"];

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="hero" className="pt-14 bg-white">
      {/* Top bar */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2.5 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            {t.hero.infoBar}{" "}
            <span className="text-white font-medium">{t.hero.infoBarBold}</span>{" "}
            {t.hero.infoBarSuffix}
          </p>
          <a href="#contact" className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1 transition-colors">
            {t.hero.infoBarCta} <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-0 min-h-[calc(100vh-104px)]">

          {/* Left */}
          <div className="lg:col-span-7 flex flex-col justify-center py-16 lg:pr-16 border-r border-slate-100">
            <div className="mb-6">
              <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 border border-green-200 uppercase tracking-wider">
                {t.hero.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight mb-5">
              {t.hero.title1}<br />
              <span className="text-green-600">{t.hero.title2}</span><br />
              {t.hero.title3}
            </h1>

            <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-lg">
              {t.hero.desc}
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <a href="#clinics" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-sm font-semibold transition-colors">
                {t.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-6 py-3 text-sm font-semibold transition-colors">
                {t.hero.ctaSecondary}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-0 border border-slate-200">
              {statsNumbers.map((num, i) => (
                <div key={i} className={`px-4 py-4 ${i < statsNumbers.length - 1 ? "border-r border-slate-200" : ""}`}>
                  <p className="text-xl font-bold text-slate-900">{num}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{t.hero.statsLabels[i]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-5 flex flex-col justify-center py-16 lg:pl-12">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              {t.hero.regionsTitle}
            </p>

            <div className="space-y-0 border border-slate-200 mb-6">
              {regionKeys.map((name, i) => (
                <a
                  key={name}
                  href="#clinics"
                  className={`flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition-colors group ${
                    i < regionKeys.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-green-500" />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">{regionCounts[i]} {t.hero.regionClinics}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" />
                  </div>
                </a>
              ))}
            </div>

            {/* Top clinic card */}
            <div className="border border-slate-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-slate-900">{t.hero.topClinic}</p>
                <span className="text-xs text-slate-400">Toshkent</span>
              </div>
              <p className="text-sm font-medium text-slate-800 mb-2 leading-snug">
                {t.hero.topClinicName}
              </p>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-900">4.9</span>
                <span className="text-xs text-slate-400">· 1 240 {t.hero.topClinicReviews}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 font-medium">{t.hero.topClinicType}</span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-1 font-medium">{t.hero.topClinicBadge}</span>
              </div>
            </div>

            <a href="#clinics" className="mt-4 flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 py-3 text-sm font-semibold transition-colors">
              {t.hero.viewAll}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
