"use client";

import { PhoneCall, ClipboardList, Building2, Plane, Pill, Home, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <PhoneCall className="w-5 h-5" />,
    title: "Murojaat qiling",
    description: "Telegram yoki telefon orqali biz bilan bog'laning. Dastlabki maslahat bepul.",
  },
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: "Holatingizni baholash",
    description: "Tibbiy hujjatlaringizni ko'rib chiqamiz va sizga mos klinikalarni aniqlaymiz.",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Klinika tanlash",
    description: "Bir nechta variant taqdim etamiz — narx, sifat va joylashuv bo'yicha taqqoslab.",
  },
  {
    icon: <Plane className="w-5 h-5" />,
    title: "Yo'lga tayyorlanish",
    description: "Viza, transfer, turar joy va shifokorga yozilish — hammasini birgalikda hal qilamiz.",
  },
  {
    icon: <Pill className="w-5 h-5" />,
    title: "Davolanish",
    description: "Davolanish jarayonida ham yoningizdasiz. Tarjimon va koordinator xizmati.",
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: "Qaytish va kuzatuv",
    description: "Uyga qaytgandan so'ng ham kuzatib boramiz. Natijalarni birga baholaymiz.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="text-emerald-600 text-sm font-medium mb-3">Qanday ishlaydi?</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Jarayon bosqichlari
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Murojaat qilishdan davolanib qaytishgacha — har bir qadamda yoningizdasiz
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-emerald-200 transition-colors duration-200 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-gray-50 text-gray-400 flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                  {step.icon}
                </div>
                <span className="text-3xl font-extrabold text-gray-100 group-hover:text-emerald-100 transition-colors select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-gray-900 font-bold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-gray-900 text-xl font-bold mb-1">Boshlashga tayyormisiz?</h3>
            <p className="text-gray-500 text-sm">Birinchi qadam — biz bilan bog&apos;lanish. Dastlabki maslahat bepul.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="https://t.me/+1eXc-ERr0Y80NTQy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              Telegram
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+998330033033"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              Qo&apos;ng&apos;iroq
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
