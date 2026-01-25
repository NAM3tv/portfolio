"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "introduction-meeting" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#42b847" },
          dark: { "cal-brand": "#42b847" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="introduction-meeting"
      data-cal-link="constantin-glavan-yfle0e/introduction-meeting"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"}'
      style={{
        padding: "12px 24px",
        fontSize: "16px",
        backgroundColor: "#42b847",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "500"
      }}
    >
      Prenota un appuntamento
    </button>
  );
}