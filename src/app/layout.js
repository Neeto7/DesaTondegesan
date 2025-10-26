import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Desa Tondegesan Satu",
  description: "Website Profile Desa Tondegesan Satu",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-128x128.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
