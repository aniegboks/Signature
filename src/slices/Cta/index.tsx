import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/ui/container";
import ContactForm from "@/components/ui/form";
import { PrismicNextImage } from "@prismicio/next";
import { RevealAnimation } from "@/utils/reveal_animation";

export type CtaProps = SliceComponentProps<Content.CtaSlice>;

// Cta.tsx
const Cta: FC<CtaProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-32"
    >
      <Container>
        <RevealAnimation>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-8 p-4 text-center">
              <h3>Have a Question? We&apos;re Here to Help</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Image */}
              <div className="w-full h-full rounded-s-md">
                <PrismicNextImage
                  field={slice.primary.cta_img}
                  className="w-full h-full object-cover rounded-l-md"
                />
              </div>

              {/* Right Side - Text and Form */}
              <div className="flex flex-col justify-center h-full w-full bg-neutral-800 p-6 rounded-r-md">
                <div className="w-full">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </Container>
    </section>
  );
};

export default Cta;