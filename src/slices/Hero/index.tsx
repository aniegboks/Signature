"use client"
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
        <Container>
          <RevealAnimation>
            <div>
              <div
                className="grid grid-cols-1 2xl:grid-cols-2 gap-4 pt-48 pb-16">
                <div>
                  <div className="text-4xl md:text-5xl font-heading leading-tight tracking-tight">
                    <PrismicRichText field={slice.primary.heading} />
                  </div>
                </div>

                <div className="text-start 2xl:text-right">
                  <div className="text-md mt-4 text-neutral-600">
                    <PrismicRichText field={slice.primary.body} />
                  </div>
                </div>
              </div>

              {slice.primary.image?.url && (
                <div className="relative mt-2 w-full">
                  <div className="absolute inset-0 bg-black opacity-20 z-10 pointer-events-none" />
                  <PrismicNextImage
                    field={slice.primary.image}
                    className="w-full h-auto max-h-[100dvh] object-cover relative z-0"
                  />
                </div>

              )}
            </div>
          </RevealAnimation>

        </Container>
      ) : <Container>
        <RevealAnimation>
          <div>
            <div
              className="grid grid-cols-1 2xl:grid-cols-2 gap-4 pt-48 pb-16">
              <div>
                <div className="text-4xl md:text-5xl font-heading leading-tight tracking-tight" suppressHydrationWarning>
                  <PrismicRichText field={slice.primary.heading} />
                </div>
              </div>
              <div className="text-start 2xl:text-right">
                <div className="text-xl sm:text-xl md:text-3xl font-heading font-bold leading-tight tracking-tight" suppressHydrationWarning>
                  <PrismicRichText field={slice.primary.sub_heading} />
                </div>
                <div className="text-md mt-4 text-neutral-600" suppressHydrationWarning>
                  <PrismicRichText field={slice.primary.body} />
                </div>
              </div>
            </div>
            {slice.primary.image?.url && (
              <div className="relative mt-2 w-full">
                <div className="absolute inset-0 bg-black opacity-20 z-10 pointer-events-none" />
                <PrismicNextImage
                  field={slice.primary.image}
                  className="w-full h-auto max-h-[100dvh] object-cover relative z-0"
                />
              </div>
            )}
          </div>
        </RevealAnimation>
      </Container>}

    </section>
  );
}


