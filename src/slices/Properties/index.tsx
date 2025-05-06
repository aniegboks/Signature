import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/ui/container";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";
import { RevealAnimation } from "@/utils/reveal_animation";

/**
 * Props for `Properties`.
 */
export type PropertiesProps = SliceComponentProps<Content.PropertiesSlice>;

/**
 * Component for "Properties" Slices.
 */
const Properties: FC<PropertiesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-23"
    >
      <Container>
        <RevealAnimation>
          <div className="flex-grow">
            <div className="flex flex-col items-center justify-center sm:mt-4 mt-16">
              <div className="text-2xl md:text-4xl font-heading leading-tight tracking-tight font-bold">
                <PrismicRichText field={slice.primary.heading} />
              </div>
              <div className="text-sm md:text-md mt-2">
                <PrismicRichText field={slice.primary.paragraph} />
              </div>
            </div>

            {/* Property Cards */}
            <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
              {slice.primary.image_navigator.map(({ heading, display_img, paragraph, navigator_link }, i) => (
                <div key={i} className="flex flex-col h-full">
                  <PrismicNextLink field={navigator_link}>
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 rounded-md">
                      <PrismicNextImage
                        className="w-full h-full object-cover"
                        field={display_img}
                      />
                    </div>

                    <div className="p-4">
                      <div className="text-2xl font-heading font-bold">
                        <PrismicRichText field={heading} />
                      </div>
                      <div className="text-md mt-4 font-body">
                        <div className="flex gap-4 text-neutral-600">
                          <span className="flex items-center">
                            <PrismicRichText field={paragraph} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </PrismicNextLink>
                </div>
              ))}
            </div>
          </div>
        </RevealAnimation>
      </Container>
    </section>
  );
};

export default Properties;
