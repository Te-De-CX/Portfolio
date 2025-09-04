"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/components/UI/layouts/nav";
import Footer from "@/components/UI/layouts/footer";
// import { WaterCircleFollow } from "@/components/UI/contents/WaterCircleFollow";
import Loader from "@/components/UI/contents/MecuryLoader";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Nav />
      <main className="flex-1 pt-10">
        {/* <WaterCircleFollow /> */}
        {children}
      </main>
      <Footer />
    </>
  );
}
