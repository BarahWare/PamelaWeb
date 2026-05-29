import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Pamela Bakery | Pastelería Artesanal Premium",
  description: "Descubre nuestras exquisitas tortas artesanales, cupcakes personalizados, budines caseros y postres delicados. Calidad premium con amor en cada detalle.",
  keywords: ["tortas artesanales", "cupcakes personalizados", "pastelería artesanal", "budines caseros", "cakes personalizados", "bakery artesanal", "mesas dulces infantiles", "cookies infantiles"],
  openGraph: {
    title: "Pamela Bakery | Pastelería Artesanal Premium",
    description: "Repostería artesanal, delicada y con diseño premium.",
    url: "https://pamela-bakery.vercel.app",
    siteName: "Pamela Bakery",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
