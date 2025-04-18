import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";
import { LandPlot, Bed, Bath } from "lucide-react";

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
    >
      <hr className="my-32 text-neutral-300"/>
      <Container>
        <div className="flex-grow">
          <div className="flex flex-col items-center justify-center sm:mt-4 mt-16">
            <div className="text-2xl md:text-4xl font-heading leading-tight tracking-tight font-bold">
              <PrismicRichText field={slice.primary.heading} />
            </div>
            <div className="text-sm md:text-md mt-2">
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

          {/* Property Cards */}
          <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {slice.primary.image_navigator.map(
              ({ display_img, display_link, display_label, scale, rooms, bath }) => (
                <div key={display_label} className="flex flex-col h-full">
                  <PrismicNextLink
                    field={display_link}
                    className="flex flex-col h-full"
                  >
                    {/* Image Section - Increased height */}
                    <div className="relative aspect-[4/5] w-full">
                      <PrismicNextImage
                        className="w-full h-full object-cover"
                        field={display_img}
                      />
                    </div>

                    {/* Text Section - Kept the same */}
                    <div className="p-4">
                      <div className="text-2xl font-heading font-bold">
                        {display_label}
                      </div>
                      <div className="text-md mt-4 font-body">
                        <div className="flex gap-4 text-neutral-600">
                          <span className="flex items-center">
                            <LandPlot size={18} className="mr-2" />
                            {scale}
                          </span>
                          <span className="flex items-center">
                            <Bed size={18} className="mr-2" />
                            {rooms}
                          </span>
                          <span className="flex items-center">
                            <Bath size={18} className="mr-2" />
                            {bath}
                          </span>
                        </div>
                      </div>
                    </div>
                  </PrismicNextLink>
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Properties;