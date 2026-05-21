"use client";

import Image from "next/image";
import { services, serviceExclusion } from "@/lib/site-data";
import { imageSrc, images } from "@/lib/images";
import { RevealBlock } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { EditorialHeading } from "@/components/ui/editorial-heading";

export function ServicesCinematic() {
  return (
    <section id="services" className="bg-navy">
      {/* Header: centered, less padding, larger type */}
      <div className="flex min-h-[42vh] flex-col items-center justify-center px-6 py-20 text-center md:min-h-[48vh] md:py-24">
        <div className="container-maison max-w-4xl">
          <SectionLabel light>Services</SectionLabel>
          <EditorialHeading
            light
            className="mx-auto mt-8 text-[2.5rem] leading-[1.05] md:text-6xl lg:text-7xl"
          >
            Built for every zone of the operation.
          </EditorialHeading>
        </div>
      </div>

      <div className="flex flex-col">
        {services.map((service, index) => {
          const reverse = index % 2 === 1;
          return (
            <article
              key={service.id}
              className="grid border-t border-porcelain/10 md:min-h-[78vh] md:grid-cols-2"
            >
              <div
                className={`relative min-h-[52vh] w-full md:min-h-[78vh] ${
                  reverse ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={imageSrc(service.imageKey)}
                  alt={images[service.imageKey].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/15" aria-hidden />
              </div>

              <div
                className={`flex flex-col items-center justify-center px-8 py-20 text-center md:px-16 md:py-24 lg:px-24 ${
                  reverse ? "md:order-1" : ""
                }`}
              >
                <RevealBlock className="max-w-xl">
                  <span className="label-maison text-porcelain/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-editorial text-4xl leading-[1.05] text-porcelain md:text-5xl lg:text-6xl">
                    {service.title}
                  </h3>
                  <p className="mx-auto mt-8 max-w-lg text-base leading-[1.9] text-porcelain/75 md:text-lg md:leading-[1.85]">
                    {service.copy}
                  </p>
                </RevealBlock>
              </div>
            </article>
          );
        })}
      </div>

      <div className="container-maison px-6 py-20 md:py-28">
        <p className="mx-auto max-w-4xl text-center text-base leading-[1.9] text-porcelain/65 md:text-lg md:leading-[1.85] lg:text-xl">
          {serviceExclusion}
        </p>
      </div>
    </section>
  );
}
