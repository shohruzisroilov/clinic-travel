"use client";

import { Phone, Send, ArrowRight } from "lucide-react";

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.04 9.61c-.15.67-.54.835-1.084.52l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 14.4l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.445c.533-.194 1.002.13.59.165z" />
    </svg>
  );
}

const contacts = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Telefon",
    value: "+998 33-003-30-33",
    sub: "Qo'ng'iroq qilish",
    href: "tel:+998330033033",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "hover:border-emerald-200",
  },
  {
    icon: <TelegramIcon className="w-5 h-5" />,
    label: "Telegram",
    value: "@clinic_travel_",
    sub: "Kanalga qo'shilish",
    href: "https://t.me/+1eXc-ERr0Y80NTQy",
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "hover:border-sky-200",
  },
  {
    icon: <YoutubeIcon className="w-5 h-5" />,
    label: "YouTube",
    value: "@Clinic_travel",
    sub: "Kanalga obuna bo'lish",
    href: "https://www.youtube.com/@Clinic_travel",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "hover:border-red-200",
  },
  {
    icon: <InstagramIcon className="w-5 h-5" />,
    label: "Instagram",
    value: "@clinic_travel_",
    sub: "Kuzatib borish",
    href: "https://instagram.com/clinic_travel_",
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "hover:border-pink-200",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="text-emerald-600 text-sm font-medium mb-3">Bog&apos;lanish</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Biz bilan aloqa
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Savolingiz bormi? Maslahat kerakmi? Istalgan vaqt murojaat qiling.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact list — 3 cols */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-4 bg-white border border-gray-200 ${c.border} rounded-2xl p-5 transition-all duration-200 group`}
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} ${c.color} flex items-center justify-center flex-shrink-0`}>
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-gray-400 text-xs mb-0.5">{c.label}</p>
                  <p className="text-gray-900 font-semibold text-sm truncate">{c.value}</p>
                  <p className={`text-xs ${c.color} mt-0.5`}>{c.sub}</p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA card — 2 cols */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
                </svg>
              </div>

              <h3 className="text-gray-900 text-xl font-extrabold mb-1">CLINIC TRAVEL</h3>
              <p className="text-emerald-600 text-sm font-medium mb-4">SOG&apos;LIK va SAFAR</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Davolanish bo&apos;yicha yo&apos;l ko&apos;rsatamiz.<br />
                Klinikalarni tahlil qilamiz — shaffof va xolis.<br />
                Real intervyular, maslahatlar, bloglar.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="https://t.me/+1eXc-ERr0Y80NTQy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                <Send className="w-4 h-4" />
                Telegram kanalga qo&apos;shiling
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+998330033033"
                className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                +998 33-003-30-33
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
