"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Partners() {
  const partners = Array.from({ length: 8 }).map((_, i) => `Partner ${i + 1}`);
  // Duplicate for seamless loop
  const allPartners = [...partners, ...partners];
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = sliderRef.current.scrollWidth / 2;

      gsap.to(sliderRef.current, {
        x: -totalWidth,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-8 px-6 md:px-12">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted by leading companies
        </p>
      </div>

      <div className="flex overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-16 items-center whitespace-nowrap pl-6 md:pl-12"
        >
          {allPartners.map((partner, index) => (
            <div
              key={index}
              className="text-2xl font-bold text-foreground/40 hover:text-primary transition-colors cursor-default shrink-0"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
