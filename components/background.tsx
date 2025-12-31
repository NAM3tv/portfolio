"use client";

import { useEffect } from "react";
import Script from "next/script";
import styles from "./Background.module.css";

// 1. DICHIARAZIONE GLOBALE: Questo dice a TypeScript che 'Gradient' esiste su window.
// Mettendolo qui sopra, eliminiamo la necessità di ogni @ts-ignore.
declare global {
  interface Window {
    Gradient: any;
  }
}

interface BackgroundProps {
  clipPath?: string;
  className?: string;
}

export default function Background({ clipPath = "none", className = "" }: BackgroundProps) {
  
  // Funzione per inizializzare il gradiente
  const initGradient = () => {
    if (typeof window !== "undefined" && window.Gradient) {
      const canvas = document.getElementById("gradient-canvas");
      if (canvas) {
        const gradient = new window.Gradient();
        gradient.initGradient("#gradient-canvas");
        console.log("✅ Gradiente inizializzato");
      }
    }
  };

  useEffect(() => {
    // Inizializziamo se lo script è già stato caricato precedentemente
    const timer = setTimeout(initGradient, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Script 
        src="/background.js" 
        strategy="afterInteractive" 
        onLoad={initGradient} // Quando lo script finisce di caricare, lancia l'init
      />
      <canvas
        id="gradient-canvas"
        className={`${styles.canvasGradient} ${className}`}
        style={{ clipPath }}
        data-transition-in
      />
    </>
  );
}