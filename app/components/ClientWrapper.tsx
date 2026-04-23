"use client";

import { useState, useEffect } from "react";
import QuoteModal from "./Freequote";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  //  Listen for event from Navbar
  useEffect(() => {
    const openHandler = () => setOpen(true);

    window.addEventListener("openModal", openHandler);

    return () => {
      window.removeEventListener("openModal", openHandler);
    };
  }, []);

  return (
    <>
      {/* All pages + navbar + footer */}
      {children}

      {/* Global Modal */}
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}