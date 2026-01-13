import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Lerp easing function for ultra-smooth scrolling
    // Using a more gradual curve for maximum smoothness
    const lerpEasing = (t: number) => {
      // Ultra-smooth lerp effect with exponential ease-out
      // This creates a very gradual, smooth deceleration
      return 1 - Math.pow(1 - t, 3);
    };

    // Initialize Lenis with enhanced smoothness
    const lenis = new Lenis({
      duration: 1.2, // Longer duration for ultra-smooth effect
      easing: lerpEasing,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1, // Reduced for smoother, more controlled feel
      touchMultiplier: 2,
      infinite: false,
    });

    // Handle keyboard arrow keys for smooth scrolling
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "PageDown" || e.key === "PageUp") {
        e.preventDefault();
        const scrollAmount = 
          e.key === "ArrowDown" ? 280 : 
          e.key === "ArrowUp" ? -280 :
          e.key === "PageDown" ? window.innerHeight * 0.8 : 
          -window.innerHeight * 0.8;
        lenis.scrollTo(lenis.scroll + scrollAmount, {
          duration: 1.1, // Longer duration for smoother keyboard scrolling
          easing: lerpEasing,
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Integrate Lenis with GSAP ScrollTrigger
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Update ScrollTrigger on scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      lenis.destroy();
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
