"use client"

import React from 'react'
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { SettingsDocument } from '../../prismicio-types';
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";


interface SettingsProps {
    settings: SettingsDocument<string>
}
const Nav = ({ settings }: SettingsProps) => {

    const [isToggle, setIsToggle] = useState(false);
    return (
        <nav className="py-6">
            <div className="flex items-center justify-between gap-6">
                {/* Left Navigation */}
                <ul className="hidden md:flex items-center gap-4">
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
                <Link href="/" className="text-3xl font-heading font-bold italic text-gray-900 hover:opacity-80 transition ">
                    {settings.data.site_title}
                </Link>

                {/* Right CTA */}
                <ul className="hidden md:flex items-center gap-4">
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
                <div className='md:hidden flex items-center'>

                    {isToggle ?
                        (
                            <button className='cursor-pointer text-neutral-600' onClick={() => setIsToggle(!isToggle)}>
                                <X size={18} />
                            </button>
                        ) : (
                            <button className='cursor-pointer text-neutral-600' onClick={() => setIsToggle(!isToggle)}>
                                <Menu size={18} />
                            </button>
                        )
                    }
                </div>
            </div>
            <AnimatePresence>
                {isToggle && (
                    <motion.div
                        className="overflow-hidden mt-4"
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                    >
                        <ul className="flex flex-col gap-8 py-4 md:hidden">
                            {settings.data.navigation.map(({ link, label }, i) => (
                                <motion.li
                                    key={i}
                                    className="list-none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        delay: i * 0.1,
                                        duration: 0.5,
                                        ease: [0.22, 0.03, 0.26, 1],
                                    }}
                                >
                                    <PrismicNextLink
                                        field={link}
                                        className="text-sm font-medium text-gray-700 hover:text-black transition"
                                    >
                                        {label}
                                    </PrismicNextLink>
                                </motion.li>
                            ))}
                        </ul>

                        <ul className="flex flex-col gap-8 md:hidden mt-4">
                            {settings.data.cta.map(({ cta_link, cta_label }) => (
                                <motion.li
                                    key={cta_label}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        delay: 4 * 0.1,
                                        duration: 0.5,
                                        ease: [0.22, 0.03, 0.26, 1],
                                    }}
                                >
                                    <PrismicNextLink
                                        field={cta_link}
                                        className="text-sm font-medium text-gray-700 hover:text-black transition"
                                    >
                                        {cta_label}
                                    </PrismicNextLink>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>


        </nav>)
}

export default Nav 