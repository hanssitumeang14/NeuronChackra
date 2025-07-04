'use client';

import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css"
          rel="stylesheet"
        />
        <Script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></Script>

        {/* jsPDF */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></Script>

        {/* html2canvas */}
        <Script src="https://cdn.jsdelivr.net/npm/canvg@3.0.9/lib/umd.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.28/jspdf.plugin.autotable.min.js"></Script>
      </head>
      <body className="bg-gray-500">
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></Script>
        <Script src="/code.js" strategy="lazyOnload" />
        <Script src="/style.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
