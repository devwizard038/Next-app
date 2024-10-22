import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Gustavo Marcos - Software Developer",
  description:
    "This is Gustavo Marcos. I am a proficient full-stack developer specializing in C# and ASP.NET , boasting over 5 years of practical experience across various sectors including Fintech, e-commerce, management, and education. My expertise lies not only in the C# programming language but also in leveraging web frameworks like ASP.NET and Blazor, coupled with proficiency in utilizing the Azure platform. I thrive in team settings, valuing clear communication as a cornerstone for enhanced understanding and collaboration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
        <Analytics />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
