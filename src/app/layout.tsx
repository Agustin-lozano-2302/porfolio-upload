import type { Metadata } from "next";
import "./globals.css";
import Header from "app/components/layout/header";
import Footer from "app/components/layout/footer";

export const metadata: Metadata = {
  title: "Agustin Lozano",
  description: "Porfolio Agustin Lozano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
