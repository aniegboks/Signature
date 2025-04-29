import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/ui/container";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Button from "@/components/ui/button";
import { PrismicNextImage } from "@prismicio/next";
import { MapPin } from "lucide-react";
import { RevealAnimation } from "@/utils/reveal_animation";

/**
 * Props for Recent.
 */
export type RecentProps = SliceComponentProps<Content.RecentSlice>;

/**
 * Component for "Recent" Slices.
 */
const Recent: FC<RecentProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-8 md:py-12 lg:py-16"
    >
      <Container>
        <RevealAnimation>
          <div>
            <div className="flex flex-col items-center justify-center sm:mt-4 mt-12">
              <div className="text-2xl md:text-4xl font-heading leading-tight tracking-tight font-bold text-center">
                <PrismicRichText field={slice.primary.heading} />
              </div>
              <div className="text-sm md:text-md mt-2 text-center max-w-2xl mx-auto">
                <PrismicRichText field={slice.primary.paragraph} />
              </div>
              <div className="mt-4">
                {slice.primary.navigator.map(({ link, label }) => (
                  <Button key={label} variant="secondary">
                    <PrismicNextLink field={link}>
                      {label}
                    </PrismicNextLink>
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
              {slice.primary.image_navigator.map(
                ({ display_img, display_link, display_text, display_geo }) => (
                  <div key={display_text} className="flex flex-col h-full">
                    <PrismicNextLink
                      field={display_link}
                      className="relative flex flex-col h-full"
                    >
                      <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden">
                        <PrismicNextImage
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          field={display_img}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>

                        {/* Text Overlay */}
                        <div className="absolute bottom-0 left-0 w-full text-white p-4 md:p-6">
                          <div className="text-xl sm:text-2xl font-heading font-bold mb-2">
                            {display_text}
                          </div>
                          <div className="flex items-center text-sm md:text-base">
                            <MapPin size={16} className="mr-2 flex-shrink-0" />
                            <span className="truncate">{display_geo}</span>
                          </div>
                        </div>
                      </div>
                    </PrismicNextLink>
                  </div>
                )
              )}
            </div>
          </div>
        </RevealAnimation>
      </Container>
    </section>
  );
};

export default Recent;
