"use client";

import { ArrowRight, Phone, Globe, Search, MessageSquare, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-white pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              Medical Travel Clinic
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              SOG&apos;LIK
              <br />
              <span className="gradient-text">va SAFAR</span>
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
              Xorijda davolanishni xohlaysizmi? Eng yaxshi klinikalarni topamiz,
              tahlil qilamiz va to&apos;liq yo&apos;l ko&apos;rsatamiz —{" "}
              <span className="text-gray-900 font-medium">shaffof va xolis</span>.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {[
                { icon: <Globe className="w-3.5 h-3.5" />, text: "Davolanish yo'l ko'rsatish" },
                { icon: <Search className="w-3.5 h-3.5" />, text: "Klinika tahlili" },
                { icon: <MessageSquare className="w-3.5 h-3.5" />, text: "Real maslahatlar" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full text-xs font-medium"
                >
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://t.me/+1eXc-ERr0Y80NTQy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.04 9.61c-.15.67-.54.835-1.084.52l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 14.4l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.445c.533-.194 1.002.13.59.165z" />
                </svg>
                Telegram kanalga o&apos;tish
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+998330033033"
                className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                +998 33-003-30-33
              </a>
            </div>
          </div>

          {/* Right — Info card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              {/* Main card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                {/* Logo mark */}
                <div className="w-14 h-14 rounded-xl bg-emerald-600 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
                  </svg>
                </div>

                <p className="text-xs text-gray-400 font-medium tracking-widest uppercase mb-1">Medical Travel Clinic</p>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-1">CLINIC TRAVEL</h2>
                <p className="text-emerald-600 font-medium text-sm mb-6">SOG&apos;LIK va SAFAR</p>

                <div className="space-y-3 mb-6">
                  {[
                    { icon: <Globe className="w-4 h-4 text-emerald-600" />, text: "Xorijda davolanish yo'l ko'rsatish" },
                    { icon: <Search className="w-4 h-4 text-emerald-600" />, text: "Klinikalarni shaffof tahlil qilish" },
                    { icon: <MessageSquare className="w-4 h-4 text-emerald-600" />, text: "Real intervyular va maslahatlar" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                      <span className="text-gray-600 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-5 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-1">Telefon</p>
                  <p className="text-gray-900 font-bold">+998 33-003-30-33</p>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mt-3">
                {[
                  { number: "501+", label: "Obunachi" },
                  { number: "10+", label: "Mamlakat" },
                  { number: "24/7", label: "Maslahat" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
                    <p className="text-gray-900 font-bold text-lg">{stat.number}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
