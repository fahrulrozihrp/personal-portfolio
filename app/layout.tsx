import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./style/globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rozi Portfolio",
  description: "Fahrul Rozi Harahap Website portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} mx-[5%] md:mx-[5%] bg-black dark:bg-slate-400`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
