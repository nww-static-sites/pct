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
          <Script id="pardot-tracking" strategy="afterInteractive">
  {`
    piAId = '1109132';
    piCId = '172544';
    piHostname = 'go.pctconformalcoating.com';

    (function() {
      function async_load(){
        var s = document.createElement('script'); s.type = 'text/javascript';
        s.src = (document.location.protocol === 'https:' ? 'https://' : 'http://') + piHostname + '/pd.js';
        var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
      }
      if(window.attachEvent) { window.attachEvent('onload', async_load); }
      else { window.addEventListener('load', async_load, false); }
    })();
  `}
</Script>
      </body>
    </html>
  );
}
