import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar/Header";
import Footer from "@/components/navbar/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Comuna Hogar",
  description: "Sitio web de Comuna Hogar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
