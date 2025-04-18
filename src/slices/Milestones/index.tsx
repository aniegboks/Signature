import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/ui/container";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `Milestones`.
 */
export type MilestonesProps = SliceComponentProps<Content.MilestonesSlice>;

/**
 * Component for "Milestones" Slices.
 */
const Milestones: FC<MilestonesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr className="text-neutral-300 my-32"/>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-24">
          <div>
            <div className="text-2xl md:text-4xl font-heading leading-tight tracking-tight font-bold">
              <PrismicRichText field={slice.primary.heading} />
            </div>
            <div className="text-xl xl:text-2xl font-heading max-w-full text-neutral-600 mt-2">
              <PrismicRichText field={slice.primary.sub_heading} />
            </div>
            <div className="mt-4">
              <PrismicRichText field={slice.primary.paragraph} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {slice.primary.portfoilo.map(({ port_heading, port_paragraph, port_sub_heading }, i) => (
              <div key={i} className="pb-8">
                <div className="text-2xl md:text-4xl font-heading leading-tight tracking-tight font-bold">
                  <PrismicRichText field={port_heading} />
                </div>
                <div className="text-xl xl:text-2xl font-heading max-w-full mt-2">
                  <PrismicRichText field={port_sub_heading} />
                </div>
                <div className="mt-2 text-neutral-600">
                  <PrismicRichText field={port_paragraph} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Milestones;
