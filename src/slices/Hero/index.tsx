"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Container from "@/components/ui/container";
import { RevealAnimation } from "@/utils/reveal_animation";

export type HeroProps = {
  slice: Content.HeroSlice;
};

export default function Hero({ slice }: HeroProps) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "alternate" ? (
        <RevealAnimation>
          <div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <Container>
              <div>
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 pt-48 pb-16">
                  <div>
                    <div className="text-4xl md:text-5xl font-heading leading-tight tracking-tight">
                      <PrismicRichText field={slice.primary.heading} />
                    </div>
                  </div>

                  <div className="text-start 2xl:text-right">
                    <div className="text-sm mt-4 text-neutral-600 font-body">
                      <PrismicRichText field={slice.primary.body} />
                    </div>
                  </div>
                </div>

                {slice.primary.image?.url && (
                  <div className="relative mt-2 w-full aspect-video">
                    <div className="absolute inset-0 bg-black opacity-20 z-10 pointer-events-none rounded-md" />
                    <PrismicNextImage
                      field={slice.primary.image}
                      className="w-full h-full object-cover relative z-0 rounded-md"
                    />
                  </div>
                )}
              </div>
            </Container>
          </div>
        </RevealAnimation>
      ) : (
        <RevealAnimation>
          <div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <Container>
              <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 pt-48 pb-16">
                <div>
                  <div
                    className="text-4xl md:text-5xl font-heading leading-tight tracking-tight"
                    suppressHydrationWarning
                  >
                    <PrismicRichText field={slice.primary.heading} />
                  </div>
                </div>
                <div className="text-start 2xl:text-right">
                  <div
                    className="text-xl sm:text-xl md:text-3xl font-heading font-bold leading-tight tracking-tight"
                    suppressHydrationWarning
                  >
                    <PrismicRichText field={slice.primary.sub_heading} />
                  </div>
                  <div
                    className="text-sm mt-4 text-neutral-600 font-body"
                    suppressHydrationWarning
                  >
                    <PrismicRichText field={slice.primary.body} />
                  </div>
                </div>
              </div>
              {slice.primary.image?.url && (
                <div className="relative mt-2 w-full">
                  <div className="absolute inset-0 bg-black opacity-20 z-10 pointer-events-none rounded-md" />
                  <PrismicNextImage
                    field={slice.primary.image}
                    className="w-full h-full object-cover relative z-0 rounded-md"
                  />
                </div>
              )}
            </Container>
          </div>
        </RevealAnimation>
      )}
    </section>
  );
}
