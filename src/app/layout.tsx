import "./globals.css";
import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import Navbar from "./components/Navbar";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { switchThemeDuration } from "./components/Constants/switch-theme-duration";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dolar-Dev",
  description: "Sitio web sobre el valor del dolar y las criptomonedas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body>
          <div
            className={`${bebas.className} bg-slate-50 dark:bg-[#0d1117] ${switchThemeDuration}`}
          >
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              <ThemeSwitcher />
              <header>
                <Navbar />
              </header>
              <main>{children}</main>
            </ThemeProvider>
          </div>
        </body>
      </html>
    </ReactQueryProvider>
  );
}