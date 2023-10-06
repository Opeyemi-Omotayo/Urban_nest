import { useEffect } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  });

  return (
    <QueryClientProvider client={queryClient}>
      <main className="mt-8 bg-gray-50 lg:mt-0 font-Quicksand">
        {router.pathname.includes("dashboard") ? null : <Header />}
        <Component {...pageProps} />
        <Footer />
        <ToastContainer
          position="top-right"
          transition={Slide}
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </main>
    </QueryClientProvider>
  );
}
