import type { Metadata } from "next";
import "./globals.css";
import Header from "app/components/layout/header";
import Footer from "app/components/layout/footer";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import App from "./app";



export const metadata: Metadata = {
  title: "Agustin Lozano",
  description: "Porfolio Agustin Lozano",
  keywords: "Agustin Lozano",
  applicationName: "Porfolio Agustin Lozano"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body className="animate-fade animate-once animate-duration-1000">
        <App>{children} </App>
      </body>
    </html>
  );
}
