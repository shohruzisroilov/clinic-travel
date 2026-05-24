"use client";

import { Star } from "lucide-react";

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const testimonials = [
  {
    name: "Malika S.",
    location: "Toshkent",
    text: "Turkiyada davolanish uchun Clinic Travel yordamida eng yaxshi klinikani topdim. Hamma narsa shaffof va aniq tushuntirildi.",
    rating: 5,
    treatment: "Onkologiya",
    country: "Turkiya",
  },
  {
    name: "Bobur T.",
    location: "Samarqand",
    text: "Germaniyada yurak operatsiyasi uchun yordam so'radim. Klinika tanlashdan tortib, qaytishgacha hammasida yonimda bo'lishdi.",
    rating: 5,
    treatment: "Kardiologiya",
    country: "Germaniya",
  },
  {
    name: "Nilufar R.",
    location: "Farg'ona",
    text: "Koreyadagi klinika haqida real ma'lumot olish qiyin edi. Clinic Travel intervyulari va tahlillari juda foydali bo'ldi.",
    rating: 5,
    treatment: "Ortopediya",
    country: "Koreya",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="text-emerald-600 text-sm font-medium mb-3">Mijozlar fikri</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Ular nima deyishadi?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Real bemorlarning haqiqiy tajribalari — hech qanday reklama emas
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="border border-gray-200 rounded-2xl p-6 hover:border-emerald-200 transition-colors duration-200 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Tags */}
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 rounded-full">
                  {item.treatment}
                </span>
                <span className="text-xs bg-gray-50 text-gray-600 border border-gray-100 px-2.5 py-1 rounded-full">
                  {item.country}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {item.name[0]}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{item.name}</p>
                  <p className="text-gray-400 text-xs">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube CTA */}
        <div className="flex justify-center">
          <a
            href="https://www.youtube.com/@Clinic_travel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-gray-200 hover:border-red-200 hover:bg-red-50 text-gray-700 hover:text-red-600 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
          >
            <YoutubeIcon className="w-4 h-4" />
            YouTube kanalimizda real intervyularni ko&apos;ring
          </a>
        </div>
      </div>
    </section>
  );
}
