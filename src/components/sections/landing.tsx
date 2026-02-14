"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Landing() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(imageRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-[calc(100vh-4rem)] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-0 bg-background overflow-hidden"
    >
      <div ref={textRef} className="md:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Empowering <span className="text-primary">Abilities</span>, <br />
          Enabling Success.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
          We connect talented individuals with disabilities to inclusive
          employers. Building a diverse workforce for a better future.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/applicant"
            className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            Find a Job <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/company"
            className="px-8 py-3 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors"
          >
            Hire Talent
          </Link>
        </div>
      </div>
      <div
        ref={imageRef}
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
      >
        {/* Abstract shape background */}
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-75 -z-10" />
        <div className="w-full max-w-md aspect-square bg-gradient-to-tr from-primary/30 to-secondary rounded-2xl flex items-center justify-center border border-primary/20 shadow-2xl">
          <span className="text-4xl text-primary/50 font-bold">
            Image Placeholder
          </span>
        </div>
      </div>
    </section>
  );
}
