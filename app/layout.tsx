import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Clinic Travel — Tibbiy Turizm va Reytinglar Platformasi",
  description:
    "O'zbekistonning eng yaxshi klinikalari reytingi. Kafolatlangan yo'llanmalar, shaffof reyting va haqiqiy bemorlar sharhlari asosida tanlov qiling.",
  keywords:
    "clinic travel, tibbiy turizm, klinika reytingi, uzbekistan klinikalar, davolanish, kardiologiya, ortopediya, EKO",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
