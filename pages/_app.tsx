import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="mt-8 bg-gray-50 lg:mt-0 font-Quicksand">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
