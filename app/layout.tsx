import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/nav/Header";
import ScrollProvider from "./components/hero/ClientLayout";
import { LocomotiveScrollProvider } from "./contexts/LocomotiveScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
export { metadata } from "./metadata";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <LocomotiveScrollProvider>
          <Header />
          {/* <ScrollProvider> */}
            <main className="pt-[50px] ">
              {children}
            </main>
          {/* </ScrollProvider> */}
        </LocomotiveScrollProvider>
      </body>
    </html>
  );
}