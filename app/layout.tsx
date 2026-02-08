import type { Metadata,} from "next";
import Script from 'next/script'
import { Geist, Geist_Mono, Allura } from "next/font/google";
import "./globals.css";
import Background from '@/components/background';
import MobileNav from "@/components/mobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const allura = Allura({
  subsets: ['latin'],
  variable: '--font-allura', // Questa variabile deve corrispondere a quella nel CSS
  weight: '400',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glavan Portfolio",
  description: "Glavan Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${allura.variable} antialiased`}
      >
        <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        
        {children}
        <MobileNav/>
      </body>
    </html>
  );
}
