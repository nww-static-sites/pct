import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import { DesignProvider } from "@/context/design";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "PCT | Para-coat Technologies",
  icons: {
    icon:"/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KT50VLEY6Z"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-KT50VLEY6Z');
          `}
        </Script>
      </head>
      <body>
        <DesignProvider>
          <Header />
          {children}
          <Footer />
        </DesignProvider>
      </body>
    </html>
  );
}
