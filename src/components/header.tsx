import React from 'react' 
import { createClient } from "@prismicio/client";
import { repositoryName } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import Container from './ui/container';

const Header = async () => {
    const client = createClient(repositoryName);
    const settings = await client.getSingle("settings");

    return (
        <header className="shadow-sm bg-white z-50 relative">
            <Container>
                <nav className="py-6">
                    <div className="flex items-center justify-between gap-6">
                        {/* Left Navigation */}
                        <ul className="flex items-center gap-4">
                            {settings.data.navigation.map(({ link, label }) => (
                                <li key={label}>
                                    <PrismicNextLink 
                                        field={link}
                                        className="text-sm font-medium text-gray-700 hover:text-black transition"
                                    >
                                        {label}
                                    </PrismicNextLink>
                                </li>
                            ))}
                        </ul>

                        {/* Center Logo */}
                        <Link href="/" className="text-3xl font-heading font-bold italic text-gray-900 hover:opacity-80 transition">
                            {settings.data.site_title}
                        </Link>

                        {/* Right CTA */}
                        <ul className="flex items-center gap-4">
                            {settings.data.cta.map(({ cta_link, cta_label }) => (
                                <li key={cta_label}>
                                    <PrismicNextLink 
                                        field={cta_link}
                                        className="text-sm font-medium text-gray-700 hover:text-black transition"
                                    >
                                        {cta_label}
                                    </PrismicNextLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
