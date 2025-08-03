import type { Metadata } from "next";
import { Baloo_2, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baloo2 = Baloo_2({
  weight: ['600', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Compact Softwares & Services (CSS) – Trusted IT & BUSY ERP Solutions Since 1996",
  description:
    "Compact Softwares & Services (CSS) has empowered 25,000+ clients over 29+ years with BUSY ERP, Cloud Services, Payroll Software, POS, E-Commerce tools, Training & more. Your trusted IT partner for automation and growth.",
  keywords: [
    "Compact Softwares",
    "CSS Delhi",
    "BUSY ERP partner",
    "BUSY software sales",
    "BUSY on Cloud",
    "Production ERP software",
    "Payroll software India",
    "Barcode billing software",
    "POS system Delhi",
    "Cloud accounting software",
    "e-Invoice software",
    "GST billing software",
    "BUSY implementation services",
    "BUSY customization Delhi",
    "Mobile accounting app",
    "E-Commerce reconciliation plugin",
    "BUSY Recom plugin",
    "Remote desktop services",
    "Data recovery services",
    "Database hosting India",
    "IT channel partner Delhi",
    "Busy Academy",
    "computerized accounting training",
    "TDS GST Income Tax software",
    "Professional IT training Delhi",
    "BUSY subscription plans",
    "BUSY perpetual plans",
    "BUSY mobile app features",
    "Authorized BUSY training center",
    "Compact software & services",
    "Accounting software for businesses",
    "BUSY software reseller",
    "BUSY software dealer Rohini",
    "BUSY support & services",
    "IT company since 1996",
    "29+ years in business",
    "top ERP partner Delhi NCR"
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  authors: [
    { name: 'Compact Softwares & Services (CSS)', url: 'https://cssbusy.com' },
  ],
  metadataBase: new URL("https://cssbusy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: 'Compact Softwares & Services (CSS) – Trusted IT & BUSY ERP Solutions Since 1996',
    description:
      "Serving 25,000+ customers for over 29+ years with BUSY ERP software, cloud services, mobile billing apps, POS, payroll, training, and support across Delhi NCR and beyond.",
    url: 'https://cssbusy.com',
    siteName: 'Compact Softwares & Services',
    images: [
      {
        url: '/opengraph-css.png',
        width: 1200,
        height: 630,
        alt: 'Compact Softwares & Services – Trusted IT Partner',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    site: '@cssbusy',
    card: 'summary_large_image',
    title: 'Compact Softwares & Services (CSS) – Trusted IT Partner Since 1996',
    description:
      "29+ years of excellence in providing BUSY ERP, Payroll, Cloud Services, POS & Training to 25,000+ clients. Compact Softwares – Your Business IT Partner.",
    creator: '@cssbusy',
    images: ['/opengraph-css.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${baloo2.className} antialiased`}
      >
        <NextTopLoader
          color="#3B82F6"         // Customize color
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        {children}
      </body>
    </html>
  );
}
