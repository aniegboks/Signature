"use client";

import React, { useEffect, useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SettingsDocument } from "../../prismicio-types";
import { AnimatePresence, motion } from "framer-motion";

interface SettingsProps {
  settings: SettingsDocument<string>;
}

const menuVariants = {
  open: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -10 },
};

const Nav = ({ settings }: SettingsProps) => {
  const [isToggle, setIsToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true); // Scrolling up
      } else {
        setShowNavbar(false); // Scrolling down
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="backdrop-blur-md bg-white/30 px-4 py-6 md:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-8 md:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
          {/* Left Nav */}
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

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-heading font-bold text-orange-500 hover:opacity-80 transition"
          >
            Signature
          </Link>

          {/* Right Nav */}
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

          {/* Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              className="cursor-pointer text-neutral-600"
              onClick={() => setIsToggle(!isToggle)}
            >
              {isToggle ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isToggle && (
          <motion.div
            className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-6 py-6"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.ul className="flex flex-col gap-6">
              {settings.data.navigation.map(({ link, label }) => (
                <motion.li
                  key={label}
                  variants={itemVariants}
                  onClick={() => setIsToggle(false)}
                >
                  <PrismicNextLink
                    field={link}
                    className="text-sm font-medium text-gray-700 hover:text-black transition"
                  >
                    {label}
                  </PrismicNextLink>
                </motion.li>
              ))}
              {settings.data.cta.map(({ cta_link, cta_label }) => (
                <motion.li
                  key={cta_label}
                  variants={itemVariants}
                  onClick={() => setIsToggle(false)}
                >
                  <PrismicNextLink
                    field={cta_link}
                    className="text-sm font-medium text-gray-700 hover:text-black transition"
                  >
                    {cta_label}
                  </PrismicNextLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
