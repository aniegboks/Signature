"use client"
import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/ui/container";
import { PrismicRichText } from "@prismicio/react";
import { Plus } from "lucide-react";
import { RevealAnimation } from "@/utils/reveal_animation";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

/**
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<Content.FaqSlice>;

/**
 * Component for "Faq" Slices.
 */
const Faq: FC<FaqProps> = ({ slice }) => {
  const [displayIndex, setDisplayIndex] = useState<number | null>(null);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-24"
    >
      <Container>
        <RevealAnimation>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-24">
            {/* Left Section */}
            <div>
              <div className="text-2xl md:text-4xl font-heading leading-tight tracking-tight font-bold">
                <PrismicRichText field={slice.primary.heading} />
              </div>
              <div className="font-heading max-w-full text-neutral-600 mt-4">
                <PrismicRichText field={slice.primary.sub_heading} />
              </div>
              <div className="mt-4">
                <PrismicRichText field={slice.primary.paragraph} />
              </div>
            </div>

            {/* Right Section - Questions */}
            <div>
              {slice.primary.question.map(({ question, answer }, i) => (
                <div
                  key={i}
                  className="mt-8 cursor-pointer"
                  onClick={() => setDisplayIndex(displayIndex === i ? null : i)}
                >
                  <span className="text-xl xl:text-xl font-heading max-w-full mt-2 flex items-center justify-between mb-6">
                    <PrismicRichText field={question} />
                    <Plus
                      size={14}
                      className={twMerge(
                        "text-neutral-600 transition-transform duration-300",
                        displayIndex === i && "rotate-45"
                      )}
                    />
                  </span>

                  <AnimatePresence initial={false}>
                    {displayIndex === i && (
                      <motion.div
                        className="text-neutral-600 overflow-hidden font-body text-sm"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <PrismicRichText field={answer} />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <hr className="mt-5 text-neutral-300" />
                </div>
              ))}
            </div>
          </div>
        </RevealAnimation>
      </Container>
    </section>
  );
};

export default Faq;
