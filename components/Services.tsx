"use client";

import { Globe, Microscope, Video, BookOpen } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Davolanish yo'l ko'rsatish",
    description:
      "Xorijda qaysi klinikaga borish kerakligini bilmaysizmi? Mamlakatdan tortib, shifokorga yozilishgacha to'liq yo'l ko'rsatamiz.",
    features: ["Mamlakat tanlash", "Klinika tanlash", "Shifokorga yozilish", "Viza yordam"],
  },
  {
    icon: <Microscope className="w-5 h-5" />,
    title: "Klinikalarni tahlil qilish",
    description:
      "Har bir klinikani chuqur o'rganamiz — akkreditatsiya, shifokorlar tajribasi, narxlar va real mijozlar fikrlari asosida.",
    features: ["Akkreditatsiya tekshiruvi", "Shifokor profili", "Narx tahlili", "Mijoz sharhlari"],
  },
  {
    icon: <Video className="w-5 h-5" />,
    title: "Real intervyular",
    description:
      "Davolanib qaytgan bemorlar bilan real suhbatlar. Hech qanday reklama emas — faqat haqiqiy tajriba va fikrlar.",
    features: ["Video intervyular", "Bemor tajribasi", "Klinika sharhi", "Natijalar"],
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Maslahatlar va bloglar",
    description:
      "Tibbiy turizm haqida foydali maqolalar, maslahatlar va qo'llanmalar. Qaror qabul qilishdan oldin bilishingiz kerak bo'lgan hamma narsa.",
    features: ["Tibbiy maqolalar", "Yo'l qo'llanmasi", "Narx taqqoslash", "Ekspert maslahati"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="text-emerald-600 text-sm font-medium mb-3">Bizning xizmatlar</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Nima qilamiz?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Xorijda davolanish jarayonini osonlashtirish uchun to&apos;liq xizmat ko&apos;rsatamiz
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-emerald-200 transition-colors duration-200 group"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                {service.icon}
              </div>

              <h3 className="text-gray-900 text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
