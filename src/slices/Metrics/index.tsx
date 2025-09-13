'use client'

import { FC, useEffect, useState } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Container from '@/components/ui/container';
import { PrismicRichText } from '@prismicio/react';
import { Palette, Atom, Expand, Building } from 'lucide-react';
import Carousel from '@/components/ui/carousel';
import { RevealAnimation } from '@/utils/reveal_animation';

/**
 * Props for `Content`.
 */
export type ContentProps = SliceComponentProps<Content.ContentSlice>;

/**
 * Component for "Content" Slices.
 */
const Metric: FC<ContentProps> = ({ slice }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures the code only runs client-side
  }, []);

  if (!isClient) return null; // Prevent rendering on the server

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
        <div>
          <RevealAnimation>
            <div className="pb-24">
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-48 pb-16">
                  <div>
                    <div className="text-4xl md:text-5xl font-heading leading-tight tracking-tighter">
                      <PrismicRichText field={slice.primary.title} />
                    </div>
                    <div className="text-sm mt-4 text-neutral-600 font-body">
                      {slice.primary.geo}
                    </div>
                  </div>

                  <div className="text-start 2xl:text-right">
                    <div className="text-sm font-body mt-4 text-neutral-600">
                      {slice.primary.over_paragraph}
                    </div>
                  </div>
                </div>

                <div className="w-full h-auto max-h-[100dvh] object-cover relative z-0">
                  {slice.primary.gallery_img.length > 0 && (
                    <Carousel
                      images={slice.primary.gallery_img
                        .filter(({ gal_img }) => gal_img?.url)
                        .map(({ gal_img }) => ({
                          url: gal_img.url as string,
                          alt: gal_img.alt || '',
                        }))}
                    />
                  )}
                </div>
              </div>

              <div className="py-16">
                <div className="text-2xl md:text-4xl font-heading leading-tight tracking-tighter mb-2 font-bold">
                  <h3>Housing Description</h3>
                </div>
                <div className="text-start mb-4 font-sm font-body text-neutral-600">
                  <p>Signature embodies essence of craftsmanship.</p>
                </div>
                {slice.primary.overview.map(({ stat_result, al_stat }, i) => (
                  <div key={i}>
                    <div className='font-body text-sm'>
                      <div className="flex justify-between my-4 text-neutral-600 py-4">
                        <span className="flex">
                          <Palette size={18} />
                          <p className="mx-4">Color</p>
                        </span>
                        <span>{stat_result}</span>
                      </div>
                      <hr className="text text-neutral-300 my-2" />
                      <div className="flex my-4 justify-between text-neutral-600 py-4">
                        <span className="flex">
                          <Atom size={18} />
                          <p className="mx-4">Material</p>
                        </span>
                        <span>Brick</span>
                      </div>
                      <hr className="text text-neutral-300 my-2" />

                      <div className="flex my-4 justify-between text-neutral-600 py-4">
                        <span className="flex ">
                          <Expand size={18} />
                          <p className="mx-4">Type</p>
                        </span>
                        <span>{al_stat}</span>
                      </div>
                      <hr className="text text-neutral-300 my-2" />
                      <div className="flex justify-between text-neutral-600 py-4">
                        <span className="flex">
                          <Building size={18} />
                          <p className="px-4">Building</p>
                        </span>
                        <span>Residential</span>
                      </div>
                      <hr className="text text-neutral-300 my-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </Container>
    </section>
  );
};

export default Metric;
