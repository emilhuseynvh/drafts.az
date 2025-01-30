import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./../../styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Drafts.az',
  description: 'IT consulting and breding',
};

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: any}
}>) {

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(); 
  
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${inter.variable} antialiased bg-[#151515]`}
      >
        <NextIntlClientProvider messages={messages}>
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
