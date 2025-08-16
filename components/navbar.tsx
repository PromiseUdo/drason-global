"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Search,
  ChevronDown,
} from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Check if current route is home
  const isHome = pathname === "/";

  // Handle scroll effect
  useEffect(() => {
    if (!isHome) {
      setHasScrolled(true);
      return;
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setHasScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleAbout = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setAboutOpen(!aboutOpen);
  };
  const navLinks = [
    // { href: "/admissions", label: "Admissions" },
    { href: "/faculties", label: "Trainings" },

    { href: "/news", label: "News" },
    { href: "/", label: "Gallery" },

    { href: "/contact", label: "Contact" },

    // { href: "/faq", label: "FAQ" },
  ];

  const aboutLinks = [
    { href: "/about", label: "Agro Services" },
    { href: "/our-story", label: "Maritime" },
    { href: "/why-choose-us", label: "Energies" },
  ];

  const socialLinks = [
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      href: "https://twitter.com",
      label: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      href: "https://facebook.com",
      label: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
    },
    {
      href: "https://linkedin.com",
      label: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
          hasScrolled ? "bg-[#890c25] shadow-lg" : "bg-transparent"
        }`}
      >
        <MaxWidthWrapper>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" passHref>
                <Image
                  src="/drason-logo.png"
                  alt="Drason Logo"
                  width={205}
                  height={50}
                  className="object-contain w-auto h-12"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
              >
                Home
              </Link>

              {/* About Us Dropdown - Right after Home */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleAbout}
                  className="flex items-center gap-1 font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
                >
                  Our Businesses
                  <motion.span
                    animate={{ rotate: aboutOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white  shadow-xl z-50 overflow-hidden"
                    >
                      {aboutLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block px-4 py-2 text-sm text-gray-800 hover:text-[#890c25] hover:bg-gray-100 transition-colors duration-200"
                          onClick={() => setAboutOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side (Search + Mobile Menu) */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex-shrink-0"
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-white" />
              </button>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <button
                      className="relative z-50 flex items-center justify-center w-10 h-10"
                      onClick={toggleMenu}
                      aria-label="Toggle menu"
                    >
                      {isOpen ? (
                        <X className="h-6 w-6 text-white" />
                      ) : (
                        <Menu className="h-6 w-6 text-white" />
                      )}
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="bg-[#ffffff] text-[#191919] w-[75vw] max-w-sm p-6 overflow-y-auto"
                  >
                    <div className="flex flex-col h-full">
                      {/* ... (keep existing logo and other elements) */}

                      <div className="flex justify-center mb-8 pb-3 border-b border-gray-400/50">
                        <Link href="/" passHref>
                          <Image
                            src="/drason-logo.png"
                            alt="Drason Logo"
                            width={65}
                            height={36}
                            className="object-contain"
                          />
                        </Link>
                      </div>
                      <nav className="flex-1 flex flex-col gap-2">
                        {/* About Us Dropdown - First item on mobile */}

                        <Link
                          href="/"
                          className="text-lg font-medium hover:text-gray-200 transition-colors duration-200 px-4 py-3 hover:bg-[#a1122f]/50"
                          onClick={() => setIsOpen(false)}
                        >
                          Home
                        </Link>

                        <div ref={dropdownRef}>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleAbout(e);
                            }}
                            className="w-full flex items-center justify-between text-lg font-medium hover:text-gray-200 transition-colors duration-200 rounded-md px-4 py-3 hover:bg-[#a1122f]/50"
                          >
                            Businesses
                            <motion.span
                              animate={{ rotate: aboutOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="h-5 w-5" />
                            </motion.span>
                          </button>

                          <AnimatePresence>
                            {aboutOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 overflow-hidden"
                              >
                                {aboutLinks.map((link) => (
                                  <Link
                                    key={link.label}
                                    href={link.href}
                                    className="block text-base font-medium hover:text-[#890c25] transition-colors duration-200 px-4 py-2 hover:bg-[#a1122f]/30"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setIsOpen(false);
                                      setAboutOpen(false);
                                    }}
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {navLinks.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="text-lg font-medium hover:text-gray-200 transition-colors duration-200 px-4 py-3 hover:bg-[#a1122f]/50"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </nav>

                      <div className="mt-8 border-t border-gray-400/50 pt-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
                          Contact Us
                        </h3>
                        <div className="flex flex-col gap-3">
                          <a
                            href="tel:+1234567890"
                            className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
                          >
                            <Phone className="h-5 w-5" />
                            +2348138863143
                          </a>
                          <a
                            href="mailto:info@drasonglobal.com"
                            className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
                          >
                            <Mail className="h-5 w-5" />
                            info@drasonglobal.com
                          </a>
                        </div>
                      </div>

                      <div className="mt-6 border-t border-gray-400/50 py-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
                          Follow Us
                        </h3>
                        <div className="flex gap-4">
                          {socialLinks.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-gray-200 transition-colors duration-200"
                              aria-label={link.label}
                            >
                              {link.icon}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="absolute top-8 right-8">
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200"
                aria-label="Close search"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="w-full max-w-2xl px-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-5 pr-16 pl-8 text-white bg-white/10 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 text-lg backdrop-blur-sm"
                  autoFocus
                />
                <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
