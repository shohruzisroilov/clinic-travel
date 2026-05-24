"use client";

import { Phone, Mail, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.04 9.61c-.15.67-.54.835-1.084.52l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 14.4l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.445c.533-.194 1.002.13.59.165z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const contactIcons = [TelegramIcon, Phone, Mail, WhatsAppIcon];
const contactHrefs = [
  "https://t.me/clinic_travel",
  "tel:+998338393400",
  "mailto:clinic@clinictravel.uz",
  "https://wa.me/998338393400",
];

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}
          <div>
            <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-3">{t.contact.sectionLabel}</p>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.contact.title}</h2>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed whitespace-pre-line">{t.contact.desc}</p>

            <div className="border border-slate-200">
              {t.contact.contacts.map((c, i) => {
                const Icon = contactIcons[i];
                return (
                  <a
                    key={c.label}
                    href={contactHrefs[i]}
                    target={contactHrefs[i].startsWith("http") ? "_blank" : undefined}
                    rel={contactHrefs[i].startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-4 px-5 py-4 hover:bg-white transition-colors group ${
                      i < t.contact.contacts.length - 1 ? "border-b border-slate-200" : ""
                    }`}
                  >
                    <div className="w-8 h-8 bg-slate-100 group-hover:bg-green-50 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon className="w-4 h-4 text-slate-500 group-hover:text-green-600 transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-400 mb-0.5">{c.label}</p>
                      <p className="text-sm font-semibold text-slate-900 truncate">{c.value}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors flex-shrink-0" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="bg-slate-900 p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-green-600 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-white" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 1a7 7 0 100 14A7 7 0 008 1zM7 4h2v3h3v2H9v3H7V9H4V7h3V4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{t.contact.ctaTitle}</h3>
              <p className="text-green-400 text-sm font-medium mb-5">{t.contact.ctaSubtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">{t.contact.ctaDesc}</p>
              <div className="space-y-2">
                {t.contact.features.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-green-500 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 space-y-2">
              <a href="https://t.me/clinic_travel" target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 text-sm font-semibold transition-colors">
                <TelegramIcon className="w-4 h-4" />
                {t.contact.telegramBtn}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:+998338393400"
                className="w-full flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white py-3 text-sm font-semibold transition-colors">
                <Phone className="w-4 h-4" />
                {t.contact.phoneBtn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
