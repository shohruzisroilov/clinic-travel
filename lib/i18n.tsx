"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, ReactNode } from "react";

export type Lang = "UZ" | "RU" | "EN";

const STORAGE_KEY = "clinic-travel-lang";
const HTML_LANG: Record<Lang, string> = { UZ: "uz", RU: "ru", EN: "en" };

export const translations = {
  UZ: {
    nav: {
      clinics: "O'zbekiston klinikalari",
      ratings: "Reytinglar",
      tours: "Yo'llanmalar & Sanatoriyalar",
      about: "Loyiha haqida",
      contact: "Kontaktlar",
      cta: "Konsultatsiya olish",
    },
    hero: {
      badge: "Tibbiy Turizm va Reytinglar Platformasi",
      infoBar: "O'zbekiston bo'yicha",
      infoBarBold: "200+ klinika",
      infoBarSuffix: "reytingi",
      infoBarCta: "Bepul konsultatsiya",
      title1: "Shifo va dam olish —",
      title2: "O'zbekistonning eng yaxshi",
      title3: "klinikalarida!",
      desc: "Yurtimizning yetakchi tibbiyot markazlari va dam olish maskanlariga kafolatlangan yo'llanmalar. Butun respublika bo'yicha eng shaffof reyting va haqiqiy bemorlar fikri asosida tanlov qiling.",
      ctaPrimary: "Klinikalarni ko'rish",
      ctaSecondary: "Konsultatsiya olish",
      statsLabels: ["Klinika", "Bemor sharhi", "Viloyat", "O'rtacha reyting"],
      regionsTitle: "Hududlar bo'yicha klinikalar",
      regionClinics: "klinika",
      topClinic: "Top klinika",
      topClinicName: "Toshkent Tibbiyot Akademiyasi Klinikasi",
      topClinicReviews: "sharh",
      topClinicType: "Ko'p tarmoqli",
      topClinicBadge: "#1 Reyting",
      viewAll: "Barcha reytinglarni ko'rish",
    },
    services: {
      sectionLabel: "Yo'nalishlar",
      title: "Bizning xizmatlar",
      viewAll: "Barcha yo'nalishlar",
      viewClinics: "klinika",
      items: [
        { title: "Kardiologiya", desc: "Yurak-qon tomir tizimining zamonaviy diagnostikasi va davolash dasturlari.", count: "23 klinika" },
        { title: "Ortopediya", desc: "Bo'g'im va umurtqa pog'onasi kasalliklarini ilg'or texnologiyalar yordamida tiklash.", count: "18 klinika" },
        { title: "EKO (IVF)", desc: "Farzand kutayotgan oilalar uchun yuqori natijali reproduktiv tibbiyot markazlari.", count: "12 klinika" },
        { title: "Health Check-up", desc: "Bor-yo'g'i 1–2 kun ichida butun organizmni to'liq tibbiy tekshiruvdan o'tkazish.", count: "31 klinika" },
      ],
    },
    ratings: {
      sectionLabel: "Milliy Reyting",
      title: "O'zbekiston Klinikalari Milliy Reytingi",
      subtitle: "Respublika bo'yicha eng ishonchli tibbiyot markazlari",
      viewAll: "Barcha reytinglar",
      viewAllBtn: "Barcha reytinglarni ko'rish",
      colClinic: "Klinika",
      colSpec: "Ixtisoslik",
      colRating: "Reyting",
      colAddress: "Manzil",
      reviews: "sharh",
      regions: ["Toshkent", "Samarqand", "Buxoro", "Farg'ona vodiysi", "Voha"],
    },
    about: {
      sectionLabel: "Loyiha haqida",
      title: "Asoschining so'zi",
      quote: "Bizning maqsadimiz — O'zbekistonning tibbiy salohiyatini yangi bosqichga olib chiqish va bemorlarga yurtimizning eng ishonchli, yuqori texnologik klinikalarini eng oson topishda ko'maklashishdir. Tanlov shaffof va sifatli bo'lishi uchun biz butun respublika bo'yicha yagona reyting tizimini joriy etdik.",
      founderName: "Sitora Jo'raboyeva",
      founderRole: "Clinic Travel — Asoschisi va direktori",
      tags: ["Tibbiy turizm eksperti", "10+ yil tajriba"],
      whyLabel: "Nima uchun biz?",
      whyTitle: "Platformaning afzalliklari",
      features: [
        { title: "Shaffof reyting", desc: "Mustaqil baholash tizimi. Hech qanday to'lov yoki reklama ta'siri yo'q." },
        { title: "Kafolatlangan", desc: "Har bir klinika tekshirilgan va sertifikatlangan." },
        { title: "Respublika bo'yicha", desc: "14 viloyat, 200+ klinika — yagona platformada." },
        { title: "Haqiqiy sharhlar", desc: "Faqat real bemorlarning tasdiqlangan sharhlari." },
      ],
      statsLabels: ["Klinika", "Sharh", "Viloyat"],
    },
    process: {
      sectionLabel: "Qanday ishlaydi?",
      title: "4 oddiy qadam",
      ctaLink: "Konsultatsiya olish",
      steps: [
        { title: "Klinika qidiring", desc: "Hudud, ixtisoslik yoki klinika nomi bo'yicha qidiring." },
        { title: "Reytingni solishtiring", desc: "Mustaqil reyting va haqiqiy bemorlar sharhlari asosida taqqoslang." },
        { title: "Konsultatsiya oling", desc: "Mutaxassislarimiz bilan bog'laning va yo'nalish oling." },
        { title: "Klinikaga boring", desc: "Kafolatlangan yo'llanma bilan eng yaxshi klinikaga murojaat qiling." },
      ],
      ctaTitle: "Boshlashga tayyormisiz?",
      ctaDesc: "Birinchi qadam — biz bilan bog'lanish. Dastlabki maslahat bepul.",
      ctaBtn: "Konsultatsiya olish",
    },
    testimonials: {
      sectionLabel: "Bemorlar fikri",
      title: "Ular nima deyishadi?",
      subtitle: "Haqiqiy bemorlarning tasdiqlangan sharhlari",
      items: [
        { name: "Malika S.", location: "Toshkent", text: "Clinic Travel orqali Toshkentdagi eng yaxshi kardiologiya markazini topdim. Reyting tizimi juda qulay va shaffof — hamma narsa aniq ko'rsatilgan.", treatment: "Kardiologiya", clinic: "RIKM" },
        { name: "Bobur T.", location: "Samarqand", text: "Ortopediya bo'yicha klinika qidirayotgandim. Samarqanddagi eng yaxshi markazni topishda Clinic Travel juda yordam berdi. Haqiqiy bemorlar sharhlari ishonch uyg'otdi.", treatment: "Ortopediya", clinic: "SVKTM" },
        { name: "Nilufar R.", location: "Farg'ona", text: "EKO dasturi uchun klinika izlayotgandim. Clinic Travel reytingi orqali eng yuqori natijali markazni topdim. Endi baxtli onamiz!", treatment: "EKO / IVF", clinic: "O'zRSM" },
        { name: "Jasur M.", location: "Buxoro", text: "Health Check-up uchun Toshkentga bordim. Clinic Travel tavsiyasi bilan borib, 1 kunda to'liq tekshiruvdan o'tdim. Juda qulay va professional.", treatment: "Health Check-up", clinic: "TTA Klinikasi" },
      ],
    },
    contact: {
      sectionLabel: "Bog'lanish",
      title: "Konsultatsiya olish",
      desc: "Savolingiz bormi? Klinika tanlashda yordam kerakmi?\nIstalgan vaqt murojaat qiling — bepul konsultatsiya.",
      ctaTitle: "Clinic Travel",
      ctaSubtitle: "Tibbiy Turizm va Reytinglar Platformasi",
      ctaDesc: "O'zbekistonning eng yaxshi klinikalarini topishda yordam beramiz. Shaffof reyting, haqiqiy bemorlar sharhlari, bepul konsultatsiya.",
      features: ["Bepul konsultatsiya", "Shaffof reyting tizimi", "Kafolatlangan yo'llanmalar", "24/7 qo'llab-quvvatlash"],
      telegramBtn: "Telegram orqali yozish",
      phoneBtn: "+ (998) 338-39-34",
      contacts: [
        { label: "Telegram", value: "@clinic_travel" },
        { label: "Telefon", value: "+ (998) 338-39-34" },
        { label: "Email", value: "clinic@clinictravel.uz" },
        { label: "WhatsApp", value: "+ (998) 338-39-34" },
      ],
    },
    footer: {
      desc: "O'zbekistonning eng ishonchli tibbiyot markazlari va dam olish maskanlariga kafolatlangan yo'llanmalar.",
      pagesTitle: "Sahifalar",
      contactTitle: "Kontakt",
      copyright: "Barcha huquqlar himoyalangan.",
      tagline: "Tibbiy Turizm va Reytinglar Platformasi",
    },
  },

  RU: {
    nav: {
      clinics: "Клиники Узбекистана",
      ratings: "Рейтинги",
      tours: "Путёвки & Санатории",
      about: "О проекте",
      contact: "Контакты",
      cta: "Получить консультацию",
    },
    hero: {
      badge: "Платформа медицинского туризма и рейтингов",
      infoBar: "По всему Узбекистану",
      infoBarBold: "200+ клиник",
      infoBarSuffix: "в рейтинге",
      infoBarCta: "Бесплатная консультация",
      title1: "Лечение и отдых —",
      title2: "в лучших клиниках",
      title3: "Узбекистана!",
      desc: "Гарантированные путёвки в ведущие медицинские центры и санатории страны. Выбирайте на основе самого прозрачного рейтинга и реальных отзывов пациентов по всей республике.",
      ctaPrimary: "Смотреть клиники",
      ctaSecondary: "Получить консультацию",
      statsLabels: ["Клиник", "Отзывов", "Регионов", "Средний рейтинг"],
      regionsTitle: "Клиники по регионам",
      regionClinics: "клиник",
      topClinic: "Топ клиника",
      topClinicName: "Клиника Ташкентской медицинской академии",
      topClinicReviews: "отзывов",
      topClinicType: "Многопрофильная",
      topClinicBadge: "#1 Рейтинг",
      viewAll: "Смотреть все рейтинги",
    },
    services: {
      sectionLabel: "Направления",
      title: "Наши услуги",
      viewAll: "Все направления",
      viewClinics: "клиник",
      items: [
        { title: "Кардиология", desc: "Современная диагностика и программы лечения сердечно-сосудистой системы.", count: "23 клиники" },
        { title: "Ортопедия", desc: "Восстановление заболеваний суставов и позвоночника с помощью передовых технологий.", count: "18 клиник" },
        { title: "ЭКО (IVF)", desc: "Высокорезультативные центры репродуктивной медицины для семей, ожидающих ребёнка.", count: "12 клиник" },
        { title: "Health Check-up", desc: "Полное медицинское обследование всего организма всего за 1–2 дня.", count: "31 клиника" },
      ],
    },
    ratings: {
      sectionLabel: "Национальный рейтинг",
      title: "Национальный рейтинг клиник Узбекистана",
      subtitle: "Самые надёжные медицинские центры по всей республике",
      viewAll: "Все рейтинги",
      viewAllBtn: "Смотреть все рейтинги",
      colClinic: "Клиника",
      colSpec: "Специализация",
      colRating: "Рейтинг",
      colAddress: "Адрес",
      reviews: "отзывов",
      regions: ["Ташкент", "Самарканд", "Бухара", "Ферганская долина", "Вохa"],
    },
    about: {
      sectionLabel: "О проекте",
      title: "Слово основателя",
      quote: "Наша цель — вывести медицинский потенциал Узбекистана на новый уровень и помочь пациентам легко найти самые надёжные и высокотехнологичные клиники страны. Для обеспечения прозрачного и качественного выбора мы внедрили единую рейтинговую систему по всей республике.",
      founderName: "Ситора Джурабоева",
      founderRole: "Clinic Travel — Основатель и директор",
      tags: ["Эксперт медтуризма", "10+ лет опыта"],
      whyLabel: "Почему мы?",
      whyTitle: "Преимущества платформы",
      features: [
        { title: "Прозрачный рейтинг", desc: "Независимая система оценки. Никаких скрытых платежей или рекламного влияния." },
        { title: "Гарантировано", desc: "Каждая клиника проверена и сертифицирована." },
        { title: "По всей республике", desc: "14 регионов, 200+ клиник — на одной платформе." },
        { title: "Реальные отзывы", desc: "Только подтверждённые отзывы реальных пациентов." },
      ],
      statsLabels: ["Клиник", "Отзывов", "Регионов"],
    },
    process: {
      sectionLabel: "Как это работает?",
      title: "4 простых шага",
      ctaLink: "Получить консультацию",
      steps: [
        { title: "Найдите клинику", desc: "Ищите по региону, специализации или названию клиники." },
        { title: "Сравните рейтинги", desc: "Сравнивайте на основе независимого рейтинга и реальных отзывов." },
        { title: "Получите консультацию", desc: "Свяжитесь с нашими специалистами и получите направление." },
        { title: "Посетите клинику", desc: "Обратитесь в лучшую клинику с гарантированной путёвкой." },
      ],
      ctaTitle: "Готовы начать?",
      ctaDesc: "Первый шаг — связаться с нами. Первичная консультация бесплатна.",
      ctaBtn: "Получить консультацию",
    },
    testimonials: {
      sectionLabel: "Отзывы пациентов",
      title: "Что они говорят?",
      subtitle: "Подтверждённые отзывы реальных пациентов",
      items: [
        { name: "Малика С.", location: "Ташкент", text: "Через Clinic Travel нашла лучший кардиологический центр в Ташкенте. Система рейтингов очень удобная и прозрачная — всё чётко показано.", treatment: "Кардиология", clinic: "РИКМ" },
        { name: "Бобур Т.", location: "Самарканд", text: "Искал клинику по ортопедии. Clinic Travel очень помог найти лучший центр в Самарканде. Реальные отзывы пациентов вызвали доверие.", treatment: "Ортопедия", clinic: "СВКТМ" },
        { name: "Нилуфар Р.", location: "Фергана", text: "Искала клинику для программы ЭКО. Через рейтинг Clinic Travel нашла центр с наилучшими результатами. Теперь мы счастливая семья!", treatment: "ЭКО / IVF", clinic: "УзРСМ" },
        { name: "Жасур М.", location: "Бухара", text: "Поехал в Ташкент на Health Check-up. По рекомендации Clinic Travel прошёл полное обследование за 1 день. Очень удобно и профессионально.", treatment: "Health Check-up", clinic: "ТМА Клиника" },
      ],
    },
    contact: {
      sectionLabel: "Связаться",
      title: "Получить консультацию",
      desc: "Есть вопросы? Нужна помощь с выбором клиники?\nОбращайтесь в любое время — консультация бесплатна.",
      ctaTitle: "Clinic Travel",
      ctaSubtitle: "Платформа медицинского туризма и рейтингов",
      ctaDesc: "Помогаем найти лучшие клиники Узбекистана. Прозрачный рейтинг, реальные отзывы, бесплатная консультация.",
      features: ["Бесплатная консультация", "Прозрачная рейтинговая система", "Гарантированные путёвки", "Поддержка 24/7"],
      telegramBtn: "Написать в Telegram",
      phoneBtn: "+ (998) 338-39-34",
      contacts: [
        { label: "Telegram", value: "@clinic_travel" },
        { label: "Телефон", value: "+ (998) 338-39-34" },
        { label: "Email", value: "clinic@clinictravel.uz" },
        { label: "WhatsApp", value: "+ (998) 338-39-34" },
      ],
    },
    footer: {
      desc: "Гарантированные путёвки в самые надёжные медицинские центры и санатории Узбекистана.",
      pagesTitle: "Страницы",
      contactTitle: "Контакты",
      copyright: "Все права защищены.",
      tagline: "Платформа медицинского туризма и рейтингов",
    },
  },

  EN: {
    nav: {
      clinics: "Uzbekistan Clinics",
      ratings: "Ratings",
      tours: "Tours & Sanatoriums",
      about: "About",
      contact: "Contact",
      cta: "Get Consultation",
    },
    hero: {
      badge: "Medical Tourism & Ratings Platform",
      infoBar: "Across Uzbekistan",
      infoBarBold: "200+ clinics",
      infoBarSuffix: "rated",
      infoBarCta: "Free consultation",
      title1: "Health & Recovery —",
      title2: "at Uzbekistan's best",
      title3: "clinics!",
      desc: "Guaranteed referrals to the country's leading medical centers and health resorts. Choose based on the most transparent rating and real patient reviews across the entire republic.",
      ctaPrimary: "View Clinics",
      ctaSecondary: "Get Consultation",
      statsLabels: ["Clinics", "Patient reviews", "Regions", "Avg. rating"],
      regionsTitle: "Clinics by region",
      regionClinics: "clinics",
      topClinic: "Top clinic",
      topClinicName: "Tashkent Medical Academy Clinic",
      topClinicReviews: "reviews",
      topClinicType: "Multi-specialty",
      topClinicBadge: "#1 Rated",
      viewAll: "View all ratings",
    },
    services: {
      sectionLabel: "Specialties",
      title: "Our Services",
      viewAll: "All specialties",
      viewClinics: "clinics",
      items: [
        { title: "Cardiology", desc: "Modern diagnostics and treatment programs for the cardiovascular system.", count: "23 clinics" },
        { title: "Orthopedics", desc: "Restoration of joint and spinal diseases using advanced technologies.", count: "18 clinics" },
        { title: "IVF (EKO)", desc: "High-success reproductive medicine centers for families expecting a child.", count: "12 clinics" },
        { title: "Health Check-up", desc: "Complete full-body medical examination in just 1–2 days.", count: "31 clinics" },
      ],
    },
    ratings: {
      sectionLabel: "National Rating",
      title: "National Clinic Rating of Uzbekistan",
      subtitle: "The most trusted medical centers across the republic",
      viewAll: "All ratings",
      viewAllBtn: "View all ratings",
      colClinic: "Clinic",
      colSpec: "Specialty",
      colRating: "Rating",
      colAddress: "Address",
      reviews: "reviews",
      regions: ["Tashkent", "Samarkand", "Bukhara", "Fergana Valley", "Voha"],
    },
    about: {
      sectionLabel: "About the project",
      title: "Founder's message",
      quote: "Our goal is to bring Uzbekistan's medical potential to a new level and help patients easily find the most reliable, high-tech clinics in the country. To ensure transparent and quality selection, we have introduced a unified rating system across the entire republic.",
      founderName: "Sitora Jo'raboyeva",
      founderRole: "Clinic Travel — Founder & Director",
      tags: ["Medical tourism expert", "10+ years experience"],
      whyLabel: "Why us?",
      whyTitle: "Platform advantages",
      features: [
        { title: "Transparent rating", desc: "Independent evaluation system. No hidden payments or advertising influence." },
        { title: "Guaranteed", desc: "Every clinic is verified and certified." },
        { title: "Nationwide", desc: "14 regions, 200+ clinics — on one platform." },
        { title: "Real reviews", desc: "Only verified reviews from real patients." },
      ],
      statsLabels: ["Clinics", "Reviews", "Regions"],
    },
    process: {
      sectionLabel: "How it works?",
      title: "4 simple steps",
      ctaLink: "Get consultation",
      steps: [
        { title: "Find a clinic", desc: "Search by region, specialty or clinic name." },
        { title: "Compare ratings", desc: "Compare based on independent ratings and real patient reviews." },
        { title: "Get consultation", desc: "Contact our specialists and get a referral." },
        { title: "Visit the clinic", desc: "Visit the best clinic with a guaranteed referral." },
      ],
      ctaTitle: "Ready to start?",
      ctaDesc: "First step — contact us. Initial consultation is free.",
      ctaBtn: "Get consultation",
    },
    testimonials: {
      sectionLabel: "Patient reviews",
      title: "What do they say?",
      subtitle: "Verified reviews from real patients",
      items: [
        { name: "Malika S.", location: "Tashkent", text: "Through Clinic Travel I found the best cardiology center in Tashkent. The rating system is very convenient and transparent — everything is clearly shown.", treatment: "Cardiology", clinic: "RICM" },
        { name: "Bobur T.", location: "Samarkand", text: "I was looking for an orthopedics clinic. Clinic Travel helped me find the best center in Samarkand. Real patient reviews inspired confidence.", treatment: "Orthopedics", clinic: "SVMTC" },
        { name: "Nilufar R.", location: "Fergana", text: "I was looking for a clinic for an IVF program. Through Clinic Travel's rating I found the center with the best results. Now we are a happy family!", treatment: "IVF", clinic: "UzRSM" },
        { name: "Jasur M.", location: "Bukhara", text: "I went to Tashkent for a Health Check-up. On Clinic Travel's recommendation I had a full examination in 1 day. Very convenient and professional.", treatment: "Health Check-up", clinic: "TMA Clinic" },
      ],
    },
    contact: {
      sectionLabel: "Contact",
      title: "Get Consultation",
      desc: "Have questions? Need help choosing a clinic?\nContact us anytime — consultation is free.",
      ctaTitle: "Clinic Travel",
      ctaSubtitle: "Medical Tourism & Ratings Platform",
      ctaDesc: "We help you find the best clinics in Uzbekistan. Transparent ratings, real reviews, free consultation.",
      features: ["Free consultation", "Transparent rating system", "Guaranteed referrals", "24/7 support"],
      telegramBtn: "Write on Telegram",
      phoneBtn: "+ (998) 338-39-34",
      contacts: [
        { label: "Telegram", value: "@clinic_travel" },
        { label: "Phone", value: "+ (998) 338-39-34" },
        { label: "Email", value: "clinic@clinictravel.uz" },
        { label: "WhatsApp", value: "+ (998) 338-39-34" },
      ],
    },
    footer: {
      desc: "Guaranteed referrals to the most trusted medical centers and health resorts in Uzbekistan.",
      pagesTitle: "Pages",
      contactTitle: "Contact",
      copyright: "All rights reserved.",
      tagline: "Medical Tourism & Ratings Platform",
    },
  },
} as const;

type Translations = (typeof translations)[Lang];

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: "UZ",
  setLang: () => {},
  t: translations.UZ,
});

const langListeners = new Set<() => void>();

function subscribeLang(cb: () => void) {
  langListeners.add(cb);
  return () => langListeners.delete(cb);
}

function getLangSnapshot(): Lang {
  const v = localStorage.getItem(STORAGE_KEY);
  return v === "RU" || v === "EN" || v === "UZ" ? v : "UZ";
}

function getServerLangSnapshot(): Lang {
  return "UZ";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribeLang, getLangSnapshot, getServerLangSnapshot);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

  const setLang = (l: Lang) => {
    localStorage.setItem(STORAGE_KEY, l);
    langListeners.forEach((cb) => cb());
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
