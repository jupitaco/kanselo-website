import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import AOSAnimation from "@/constants/aosInit";

const geistSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kanselo.com"),
  title: {
    default: "Kanselo",
    template: "%s | Kanselo",
  },
  description:
    "Build with confidence. Grow with clarity. Kanselo (pronounced Kan-seh-lo) is a digital mentorship and business advisory platform connecting entrepreneurs and professionals with verified mentors and experienced business owners — so you’re never building alone.",

  openGraph: {
    title: "Kanselo",
    description:
      "Build with confidence. Grow with clarity. Kanselo (pronounced Kan-seh-lo) is a digital mentorship and business advisory platform connecting entrepreneurs and professionals with verified mentors and experienced business owners — so you’re never building alone.",
    type: "website",
    locale: "en_US",
    url: "https://kanselo.com",
    siteName: "Kanselo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <AOSAnimation>
          <Navbar />
          {children}

          <Footer />
        </AOSAnimation>
      </body>
    </html>
  );
}
