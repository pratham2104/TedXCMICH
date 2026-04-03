import "./globals.css";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import localFont from "next/font/local";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "TEDxCMICH | Ideas Worth Spreading",
  description:
    "TEDx Central Michigan University — Year III. 8 speakers. One stage. April 2026.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${bebasNeue.variable} ${dmSans.variable} font-body bg-background text-white`}>
        {children}
      </body>
    </html>
  );
}
