"use client";

import { Eye, Award, Network, MessageCircle, Smartphone, Wallet } from "lucide-react";

const reasons = [
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Shaffof va xolis",
    description: "Hech qanday yashirin to'lov yoki reklama yo'q. Faqat haqiqiy ma'lumot va real tahlil.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Tajribali jamoa",
    description: "Tibbiy turizm sohasida yillar davomida ishlagan mutaxassislar jamoasi.",
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "Keng tarmoq",
    description: "Turkiya, Germaniya, Koreya, Hindiston va boshqa 10+ mamlakatdagi klinikalar bilan aloqa.",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Real fikrlar",
    description: "Davolanib qaytgan bemorlarning haqiqiy tajribalari va video sharhlari.",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Doimiy aloqa",
    description: "Telegram orqali 24/7 maslahat va yordam. Hech qachon yolg'iz qoldirmaymiz.",
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    title: "Tejamkor yechim",
    description: "Eng yaxshi narx-sifat nisbatini topishga yordam beramiz.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-24">
            <p className="text-emerald-600 text-sm font-medium mb-3">Nima uchun biz?</p>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-5">
              Nima uchun Clinic Travel ni tanlashadi?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Xorijda davolanish — bu katta qaror. Biz shu qarorni to&apos;g&apos;ri qabul
              qilishingizga yordam beramiz.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "501+", label: "Ishonchli mijoz" },
                { number: "10+", label: "Mamlakat" },
                { number: "100%", label: "Shaffoflik" },
              ].map((stat) => (
                <div key={stat.label} className="border border-gray-200 rounded-xl p-4">
                  <p className="text-2xl font-extrabold text-gray-900">{stat.number}</p>
                  <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex items-start gap-4 p-5 border border-gray-100 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold text-sm mb-1">{reason.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
