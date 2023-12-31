import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Montserrat } from "next/font/google";
import ReduxProvider from "@/app/provider";
import { ToastContainer } from "react-toastify";

const inter = Montserrat({ subsets: ["latin"], weight: "600" });

export const metadata = {
  title: "Bolero",
  description: "Generated by AWEC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ToastContainer />
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
