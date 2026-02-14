"use client";

import Image from "next/image";

export function Profile() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <div className="md:w-1/2 relative bg-primary/5 rounded-3xl overflow-hidden aspect-video md:aspect-square flex items-center justify-center">
          {/* Placeholder for Profile Image/Video */}
          <div className="text-center p-8">
            <p className="text-primary font-bold text-2xl">
              Agency / Worker Profile
            </p>
            <p className="text-muted-foreground mt-2">
              Video/Image placeholder
            </p>
          </div>
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Dedicated to <span className="text-primary">Inclusion</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are more than just a recruitment agency. We are a movement
            towards a more inclusive society where every individual is valued
            for their unique abilities. Our team works tirelessly to bridge the
            gap between employers and candidates.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="text-4xl font-bold text-primary mb-1">500+</h4>
              <p className="text-sm text-muted-foreground">Placements Made</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-primary mb-1">120+</h4>
              <p className="text-sm text-muted-foreground">Partner Companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
