import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import dynamic from "next/dynamic";
import Container from "@/components/ui/container";
import { RevealAnimation } from "@/utils/reveal_animation";
import Button from "@/components/ui/button";
import { PrismicNextImage } from "@prismicio/next";
const SliceZone = dynamic(() => import('@prismicio/react').then((module) => module.SliceZone));

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About: FC<AboutProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "alternate" ? (
        <Container>
          <SliceZone />
          <div className="py-24">
            <RevealAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="text-2xl md:text-4xl font-heading leading-tight mb-4">
                    {slice.primary.links.map(({ about, label }) => (
                      <PrismicNextLink className="font-bold" key={label} field={about}>
                        {label}
                      </PrismicNextLink>
                    ))}
                  </div>
                  <div className="text-start md:text-left flex justify-end mb-2">
                    <div
                      className="text-sm font-body max-w-full text-neutral-600"
                      style={{ maxWidth: '800px' }}
                    >
                      <PrismicRichText field={slice.primary.caption} />
                    </div>
                  </div>
                  {slice.primary.links.map(({ about, label }) => (
                    <PrismicNextLink key={label} field={about}>
                      <Button variant="secondary" className="hover:text-white animate-gradient-x font-body text-sm">
                        {label}
                      </Button>
                    </PrismicNextLink>
                  ))}
                </div>
                <div>
                  {slice.primary.about_img?.url && (
                    <div className="relative mt-2 w-full aspect-video">
                      <div className="absolute inset-0 bg-black opacity-20 z-10 pointer-events-none rounded-md" />
                      <PrismicNextImage
                        field={slice.primary.about_img}
                        className="w-full h-full object-cover relative z-0 rounded-md"
                      />
                    </div>
                  )}
                </div>

              </div>
            </RevealAnimation>
          </div>
        </Container>
      ) : (
        <Container>
          <SliceZone />
          <div className="py-32">
            <RevealAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="text-2xl md:text-4xl font-heading leading-tight mb-4">
                    {slice.primary.links.map(({ about, label }) => (
                      <PrismicNextLink className="font-bold" key={label} field={about}>
                        {label}
                      </PrismicNextLink>
                    ))}
                  </div>
                  <div
                    className="text-sm font-body max-w-full text-neutral-600 "
                    style={{ maxWidth: '800px' }}
                  >
                    <PrismicRichText field={slice.primary.history} />
                  </div>
                </div>
                <div className="text-start md:text-left flex justify-end">
                  <div
                    className="text-sm font-body max-w-full text-neutral-600"
                    style={{ maxWidth: '800px' }}
                  >
                    <PrismicRichText field={slice.primary.caption} />
                  </div>
                </div>
                {slice.primary.links.map(({ about, label }) => (
                  <PrismicNextLink key={label} field={about}>
                    <Button variant="secondary" className="mt-2 hover:text-white animate-gradient-x font-body text-sm">
                      {label}
                    </Button>
                  </PrismicNextLink>
                ))}
              </div>
            </RevealAnimation>
          </div>
        </Container>
      )}

    </section>
  );
};

export default About;
