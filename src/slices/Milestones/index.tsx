"use client"
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/ui/container";
import { PrismicRichText } from "@prismicio/react";
import { RevealAnimation } from "@/utils/reveal_animation";
import MilestoneGrid from "@/components/ui/milestones_grid";

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
      className="my-24"
    >
      <Container>
        <RevealAnimation>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <div className="text-2xl md:text-4xl font-heading leading-tight tracking-tighter font-bold">
                <PrismicRichText field={slice.primary.heading} />
              </div>
              <div className="font-heading max-w-full text-neutral-600 mt-2 text-md tracking-tighter">
                <PrismicRichText field={slice.primary.sub_heading} />
              </div>
              <div className="mt-4">
                <PrismicRichText field={slice.primary.paragraph} />
              </div>
            </div>
            <MilestoneGrid />
          </div>
        </RevealAnimation>
      </Container>
    </section>
  );
};

export default Milestones;
