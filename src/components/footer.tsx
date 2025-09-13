import React from 'react';
import { createClient } from "@prismicio/client";
import { repositoryName } from '@/prismicio';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from "@prismicio/react";
import Link from 'next/link';
import Container from './ui/container';
import { RevealAnimation } from '@/utils/reveal_animation';


const Footer = async () => {
  const client = createClient(repositoryName);
  const settings = await client.getSingle("settings");

  return (
    <footer className="py-8">
      <div>
        <Container>
        <hr className="text-neutral-300" />
          <RevealAnimation>
            <div>
              <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 pt-24 pb-8 px-4">
                {/* Left section */}
                <div>
                  <Link href="/" className="text-2xl font-heading tracking-tighter font-bold text-orange-500">
                  {`Signature`}
                  </Link>
                  <div className="mt-2 font-body text-neutral-600 text-sm">
                    <PrismicRichText field={settings.data.paragraph} />
                  </div>
                </div>

                {/* Right section */}
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-1 mt-4">
                  <div>
                    {settings.data.cta.map(({ cta_label, cta_link }, index) => (
                      <span key={index}
                        className='flex lg:justify-end md:justify-start sm:justify-start text-[8px] font-body text-neutral-600'>
                        <PrismicNextLink
                          field={cta_link}
                          className="block mb-4 text-[8px] text-gray-600 hover:text-black transition duration-300"
                        >
                          {cta_label}
                        </PrismicNextLink>
                      </span>
                    ))}
                  </div>
                  <div>

                    {settings.data.navigation.map(({ link, label }, index) => (
                      <span key={index} className='flex lg:justify-end md:justify-start sm:justify-start text-[8px] font-body text-neutral-600'>

                        <PrismicNextLink
                          field={link}
                          className="block mb-4 text-[8px] text-gray-600 hover:text-black transition duration-300"
                        >
                          {label}
                        </PrismicNextLink>
                      </span>
                    ))}
                  </div>
                  <div>
                    {settings.data.lega.map(({ legal_link, legal_label }, index) => (
                      <span key={index}
                        className='flex lg:justify-end md:justify-start sm:justify-start text-[8px] font-body text-neutral-600'>
                        <PrismicNextLink
                          field={legal_link}
                          className="block mb-4 text-[8px] text-gray-600 hover:text-black transition duration-300"
                        >
                          {legal_label}
                        </PrismicNextLink>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <hr className="text-neutral-300" />

              {/* Footer bottom section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                <div className="font-heading italic text-sm">
                  © {new Date().getFullYear()}
                  <span className="mx-2 text-sm">Signature Inc. All rights reserved</span>
                </div>
                <div className="flex sm:justify-end gap-4">
                  {settings.data.socials.map(({ icon_link, icons }, index) => (
                    <PrismicNextLink key={index} field={icon_link}>
                      <PrismicNextImage field={icons} className="w-6 h-6" />
                    </PrismicNextLink>
                  ))}
                </div>
              </div>
            </div>
          </RevealAnimation>
        </Container>
      </div>

      <div className="">
      </div>
    </footer>
  );
};

export default Footer;
