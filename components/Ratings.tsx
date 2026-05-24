"use client";

import { useState } from "react";
import { Star, MapPin, ArrowRight, TrendingUp } from "lucide-react";
import { useLang } from "@/lib/i18n";

const regionIds = ["tashkent", "samarkand", "bukhara", "fergana", "voha"];

const clinics: Record<string, Array<{
  rank: number; name: string; nameRu: string; nameEn: string;
  specialty: string; specialtyRu: string; specialtyEn: string;
  rating: number; reviews: number;
  address: string; addressRu: string; addressEn: string;
  badge?: string; badgeRu?: string; badgeEn?: string;
}>> = {
  tashkent: [
    { rank: 1, name: "Toshkent Tibbiyot Akademiyasi Klinikasi", nameRu: "Клиника Ташкентской медицинской академии", nameEn: "Tashkent Medical Academy Clinic", specialty: "Ko'p tarmoqli", specialtyRu: "Многопрофильная", specialtyEn: "Multi-specialty", rating: 4.9, reviews: 1240, address: "Yunusobod tumani", addressRu: "Юнусабадский район", addressEn: "Yunusabad district", badge: "Eng yaxshi", badgeRu: "Лучшая", badgeEn: "Best" },
    { rank: 2, name: "Respublika Ixtisoslashtirilgan Kardiologiya Markazi", nameRu: "Республиканский специализированный кардиологический центр", nameEn: "Republican Specialized Cardiology Center", specialty: "Kardiologiya", specialtyRu: "Кардиология", specialtyEn: "Cardiology", rating: 4.8, reviews: 876, address: "Mirzo Ulug'bek tumani", addressRu: "Мирзо-Улугбекский район", addressEn: "Mirzo Ulugbek district", badge: "Top kardiologiya", badgeRu: "Топ кардиология", badgeEn: "Top cardiology" },
    { rank: 3, name: "Milliy Onkologiya Ilmiy Markazi", nameRu: "Национальный научный онкологический центр", nameEn: "National Oncology Research Center", specialty: "Onkologiya", specialtyRu: "Онкология", specialtyEn: "Oncology", rating: 4.8, reviews: 654, address: "Chilonzor tumani", addressRu: "Чиланзарский район", addressEn: "Chilanzar district" },
    { rank: 4, name: "Respublika Ortopediya va Travmatologiya Markazi", nameRu: "Республиканский центр ортопедии и травматологии", nameEn: "Republican Orthopedics & Traumatology Center", specialty: "Ortopediya", specialtyRu: "Ортопедия", specialtyEn: "Orthopedics", rating: 4.7, reviews: 543, address: "Shayxontohur tumani", addressRu: "Шайхантахурский район", addressEn: "Shaykhantakhur district" },
    { rank: 5, name: "O'zbekiston Reproduktiv Salomatlik Markazi", nameRu: "Узбекский центр репродуктивного здоровья", nameEn: "Uzbekistan Reproductive Health Center", specialty: "EKO / Reproduktiv", specialtyRu: "ЭКО / Репродуктивная", specialtyEn: "IVF / Reproductive", rating: 4.7, reviews: 489, address: "Yakkasaroy tumani", addressRu: "Яккасарайский район", addressEn: "Yakkasaray district" },
  ],
  samarkand: [
    { rank: 1, name: "Samarqand Viloyat Ko'p Tarmoqli Tibbiyot Markazi", nameRu: "Самаркандский областной многопрофильный медицинский центр", nameEn: "Samarkand Regional Multi-specialty Medical Center", specialty: "Ko'p tarmoqli", specialtyRu: "Многопрофильная", specialtyEn: "Multi-specialty", rating: 4.7, reviews: 432, address: "Markaziy ko'cha", addressRu: "Центральная улица", addressEn: "Central street", badge: "Eng yaxshi", badgeRu: "Лучшая", badgeEn: "Best" },
    { rank: 2, name: "Samarqand Davlat Tibbiyot Universiteti Klinikasi", nameRu: "Клиника Самаркандского государственного медицинского университета", nameEn: "Samarkand State Medical University Clinic", specialty: "Ko'p tarmoqli", specialtyRu: "Многопрофильная", specialtyEn: "Multi-specialty", rating: 4.6, reviews: 321, address: "Amir Temur ko'chasi", addressRu: "Улица Амира Темура", addressEn: "Amir Temur street" },
    { rank: 3, name: "Samarqand Kardiologiya Markazi", nameRu: "Самаркандский кардиологический центр", nameEn: "Samarkand Cardiology Center", specialty: "Kardiologiya", specialtyRu: "Кардиология", specialtyEn: "Cardiology", rating: 4.5, reviews: 198, address: "Registon tumani", addressRu: "Регистанский район", addressEn: "Registan district" },
  ],
  bukhara: [
    { rank: 1, name: "Buxoro Viloyat Tibbiyot Birlashmasi", nameRu: "Бухарское областное медицинское объединение", nameEn: "Bukhara Regional Medical Association", specialty: "Ko'p tarmoqli", specialtyRu: "Многопрофильная", specialtyEn: "Multi-specialty", rating: 4.6, reviews: 287, address: "Markaziy ko'cha", addressRu: "Центральная улица", addressEn: "Central street", badge: "Eng yaxshi", badgeRu: "Лучшая", badgeEn: "Best" },
    { rank: 2, name: "Buxoro Xususiy Tibbiyot Klinikasi", nameRu: "Бухарская частная медицинская клиника", nameEn: "Bukhara Private Medical Clinic", specialty: "Diagnostika", specialtyRu: "Диагностика", specialtyEn: "Diagnostics", rating: 4.5, reviews: 176, address: "Ark ko'chasi", addressRu: "Улица Арк", addressEn: "Ark street" },
  ],
  fergana: [
    { rank: 1, name: "Farg'ona Viloyat Ko'p Tarmoqli Klinikasi", nameRu: "Ферганская областная многопрофильная клиника", nameEn: "Fergana Regional Multi-specialty Clinic", specialty: "Ko'p tarmoqli", specialtyRu: "Многопрофильная", specialtyEn: "Multi-specialty", rating: 4.7, reviews: 356, address: "Mustaqillik ko'chasi", addressRu: "Улица Мустакиллик", addressEn: "Mustaqillik street", badge: "Eng yaxshi", badgeRu: "Лучшая", badgeEn: "Best" },
    { rank: 2, name: "Andijon Davlat Tibbiyot Instituti Klinikasi", nameRu: "Клиника Андижанского государственного медицинского института", nameEn: "Andijan State Medical Institute Clinic", specialty: "Ko'p tarmoqli", specialtyRu: "Многопрофильная", specialtyEn: "Multi-specialty", rating: 4.6, reviews: 298, address: "Bobur ko'chasi", addressRu: "Улица Бобура", addressEn: "Bobur street" },
    { rank: 3, name: "Namangan Tibbiyot Markazi", nameRu: "Наманганский медицинский центр", nameEn: "Namangan Medical Center", specialty: "Ortopediya, Kardiologiya", specialtyRu: "Ортопедия, Кардиология", specialtyEn: "Orthopedics, Cardiology", rating: 4.5, reviews: 213, address: "Navoi ko'chasi", addressRu: "Улица Навои", addressEn: "Navoi street" },
  ],
  voha: [
    { rank: 1, name: "Qashqadaryo Viloyat Tibbiyot Markazi", nameRu: "Кашкадарьинский областной медицинский центр", nameEn: "Kashkadarya Regional Medical Center", specialty: "Ko'p tarmoqli", specialtyRu: "Многопрофильная", specialtyEn: "Multi-specialty", rating: 4.5, reviews: 198, address: "Qarshi, Markaziy ko'cha", addressRu: "Карши, Центральная улица", addressEn: "Karshi, Central street", badge: "Eng yaxshi", badgeRu: "Лучшая", badgeEn: "Best" },
    { rank: 2, name: "Surxondaryo Viloyat Klinikasi", nameRu: "Сурхандарьинская областная клиника", nameEn: "Surkhandarya Regional Clinic", specialty: "Ko'p tarmoqli", specialtyRu: "Многопрофильная", specialtyEn: "Multi-specialty", rating: 4.4, reviews: 154, address: "Termiz, Alpomish ko'chasi", addressRu: "Термез, улица Алпомиш", addressEn: "Termez, Alpomish street" },
  ],
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(i => (
        <Star key={i} className={`w-3 h-3 ${i <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`} />
      ))}
    </div>
  );
}

export default function Ratings() {
  const { lang, t } = useLang();
  const [activeRegion, setActiveRegion] = useState(0);
  const list = clinics[regionIds[activeRegion]] || [];

  return (
    <section id="clinics" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-2">{t.ratings.sectionLabel}</p>
            <h2 id="ratings" className="text-2xl font-bold text-slate-900 scroll-mt-20">{t.ratings.title}</h2>
            <p className="text-slate-500 text-sm mt-1">{t.ratings.subtitle}</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap">
            {t.ratings.viewAll} <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Region tabs */}
        <div className="flex flex-wrap gap-0 border border-slate-200 w-fit mb-8">
          {t.ratings.regions.map((label, i) => (
            <button
              key={i}
              onClick={() => setActiveRegion(i)}
              className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                i < t.ratings.regions.length - 1 ? "border-r border-slate-200" : ""
              } ${activeRegion === i ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50"}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="border border-slate-200">
          <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 px-5 py-3">
            <div className="col-span-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">#</div>
            <div className="col-span-5 text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.ratings.colClinic}</div>
            <div className="col-span-2 hidden md:block text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.ratings.colSpec}</div>
            <div className="col-span-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.ratings.colRating}</div>
            <div className="col-span-2 hidden md:block text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.ratings.colAddress}</div>
          </div>

          {list.map((clinic, idx) => {
            const name = lang === "RU" ? clinic.nameRu : lang === "EN" ? clinic.nameEn : clinic.name;
            const spec = lang === "RU" ? clinic.specialtyRu : lang === "EN" ? clinic.specialtyEn : clinic.specialty;
            const addr = lang === "RU" ? clinic.addressRu : lang === "EN" ? clinic.addressEn : clinic.address;
            const badge = lang === "RU" ? clinic.badgeRu : lang === "EN" ? clinic.badgeEn : clinic.badge;

            return (
              <div key={clinic.name} className={`grid grid-cols-12 px-5 py-4 items-center border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors ${idx === 0 ? "bg-green-50/40" : ""}`}>
                <div className="col-span-1">
                  {clinic.rank === 1 ? (
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-bold text-green-600">1</span>
                    </div>
                  ) : (
                    <span className="text-sm font-semibold text-slate-400">{clinic.rank}</span>
                  )}
                </div>
                <div className="col-span-5 pr-4">
                  <p className="text-sm font-semibold text-slate-900 leading-snug">{name}</p>
                  {badge && (
                    <span className="inline-block mt-1 text-[11px] bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 font-semibold uppercase tracking-wide">
                      {badge}
                    </span>
                  )}
                </div>
                <div className="col-span-2 hidden md:block">
                  <span className="text-xs text-slate-500 font-medium">{spec}</span>
                </div>
                <div className="col-span-2">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Stars rating={clinic.rating} />
                    <span className="text-sm font-bold text-slate-900">{clinic.rating}</span>
                  </div>
                  <p className="text-xs text-slate-400">{clinic.reviews.toLocaleString()} {t.ratings.reviews}</p>
                </div>
                <div className="col-span-2 hidden md:flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-slate-500 leading-snug">{addr}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center">
          <a href="#contact" className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-6 py-2.5 text-sm font-semibold transition-colors">
            {t.ratings.viewAllBtn}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
