import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/ui/container";
import { PrismicRichText } from "@prismicio/react";
import { Plus } from "lucide-react";

/**
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<Content.FaqSlice>;

/**
 * Component for "Faq" Slices.
 */
const Faq: FC<FaqProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr className="text-neutral-300 mt-24" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-24">
          <div>
            <div className="text-2xl md:text-4xl font-heading leading-tight tracking-tight font-bold">
              <PrismicRichText field={slice.primary.heading} />
            </div>
            <div className="text-xl xl:text-2xl font-heading max-w-full text-neutral-600 mt-4">
              <PrismicRichText field={slice.primary.sub_heading} />
            </div>
            <div className="mt-4">
              <PrismicRichText field={slice.primary.paragraph} />
            </div>
          </div>
          <div>
            {slice.primary.question.map(({ question, answer, }, i) => (
              <div key={i} className="mt-8">
                <span className="text-xl xl:text-2xl font-heading max-w-full mt-2 flex items-center justify-between mb-6">
                  <PrismicRichText field={question} />
                  <Plus size={18} />
                </span>
                <div className="text-neutral-600">
                  <PrismicRichText field={answer} />
                </div>
                <hr className="mt-5 text-neutral-300" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
