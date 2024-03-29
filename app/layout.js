import { Inter } from "next/font/google";
import "./globals.scss";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nafibal",
  description: "Portofolio Page of Nafi Baliya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
