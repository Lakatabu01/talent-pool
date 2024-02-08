import { Montserrat } from "next/font/google";
// import "../globals.css";
import AboutPage from "./page";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${montserrat.className}`}>
        <AboutPage />
      </body>
    </html>
  );
}
