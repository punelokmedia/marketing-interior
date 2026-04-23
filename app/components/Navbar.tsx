"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiChevronDown, HiOutlineMenuAlt3, HiX } from "react-icons/hi";

type DropdownItem = { name: string; href: string };
type MegaDropdownGroup = { title: string; items: DropdownItem[] };

type NavLink = {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
  megaDropdown?: MegaDropdownGroup[];
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  {
    name: "What We Do",
    href: "/services",
    dropdown: [
      { name: "Interior Design", href: "/services/interior-design" },
      { name: "Renovation", href: "/services/renovation" },
      { name: "Custom Interior", href: "/services/Custom-interiorpage" },
    ],
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Location",
    href: "/location",
    megaDropdown: [
      {
        title: "Maharashtra",
        items: [
          { name: "Mumbai", href: "/location/mumbai" },
          { name: "Pune", href: "/location/pune" },
          { name: "Nagpur", href: "/location/nagpur" },
        ],
      },
      {
        title: "Karnataka",
        items: [{ name: "Bangalore", href: "/location/bangalore" }],
      },
      {
        title: "Tamil Nadu",
        items: [{ name: "Chennai", href: "/location/chennai" }],
      },
      {
        title: "Telangana",
        items: [{ name: "Hyderabad", href: "/location/hyderabad" }],
      },
      {
        title: "Gujarat",
        items: [
          { name: "Ahmedabad", href: "/location/ahmedabad" },
          { name: "Surat", href: "/location/surat" },
        ],
      },
      {
        title: "Rajasthan",
        items: [{ name: "Jaipur", href: "/location/jaipur" }],
      },
      {
        title: "West Bengal",
        items: [{ name: "Kolkata", href: "/location/kolkata" }],
      },
      {
        title: "Uttar Pradesh",
        items: [{ name: "Lucknow", href: "/location/lucknow" }],
      },
      {
        title: "Delhi NCR",
        items: [{ name: "Delhi", href: "/location/delhi" }],
      },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (name: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(name);
  };

  const queueDropdownClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
      closeTimerRef.current = null;
    }, 220);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3" aria-label="Go to home">
          <Image
            src="/interiorwala-logo.png"
            alt="InteriorWala"
            width={190}
            height={52}
            priority
            className="h-10 w-auto md:h-11"
          />
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => {
                if (link.dropdown || link.megaDropdown) openDropdown(link.name);
              }}
              onMouseLeave={() => {
                if (link.dropdown || link.megaDropdown) queueDropdownClose();
              }}
            >
              <motion.div whileHover={{ y: -2 }}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-base font-semibold text-slate-800 hover:text-black"
                >
                  {link.name}
                  {(link.dropdown || link.megaDropdown) && (
                    <HiChevronDown
                      className={`text-sm text-slate-500 transition-transform duration-200 group-hover:text-black ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
              </motion.div>

              {/* UNDERLINE */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-fuchsia-700 transition-all duration-300 group-hover:w-full" />

              {/* DROPDOWN */}
              <AnimatePresence>
                {(link.dropdown || link.megaDropdown) && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.99 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onMouseEnter={() => openDropdown(link.name)}
                    onMouseLeave={queueDropdownClose}
                    className="absolute left-1/2 top-full z-20 -translate-x-1/2 pt-3"
                  >
                    <div
                      className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10 ${
                        link.megaDropdown ? "min-w-[740px]" : "min-w-[240px]"
                      }`}
                    >
                      {link.megaDropdown ? (
                        <div className="grid grid-cols-2 gap-x-8 gap-y-5 lg:grid-cols-4">
                          {link.megaDropdown.map((group) => (
                            <div key={group.title}>
                              <p className="text-sm font-bold uppercase tracking-wide text-slate-600">
                                {group.title}
                              </p>
                              <div className="mt-2 space-y-1">
                                {group.items.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block rounded-lg px-2 py-1.5 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid gap-1">
                          {link.dropdown?.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          {/* CALL BUTTON */}
          <a
            href="tel:+916205878945"
            className="flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-slate-100"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full">
              <BiSolidPhoneCall className="text-red-500 text-lg" />
            </span>
            Call Now
          </a>

          {/* GET FREE QUOTE */}
          <button
            onClick={() => {
              window.dispatchEvent(new Event("openModal"));
            }}
            className="rounded-full bg-red-500 px-5 py-2 font-semibold text-white transition hover:bg-red-600"
          >
            GET FREE QUOTE
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <HiX className="size-5" /> : <HiOutlineMenuAlt3 className="size-5" />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 md:hidden">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.name} className="rounded-xl border border-slate-200/80 bg-slate-50/70">
                <div className="flex items-center justify-between px-3 py-2">
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-semibold text-slate-800"
                  >
                    {link.name}
                  </Link>
                  {(link.dropdown || link.megaDropdown) && (
                    <button
                      type="button"
                      onClick={() =>
                        setMobileDropdown((prev) => (prev === link.name ? null : link.name))
                      }
                      className="rounded-md p-1 text-slate-500"
                      aria-label={`Toggle ${link.name} submenu`}
                    >
                      <HiChevronDown
                        className={`size-4 transition ${
                          mobileDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                <AnimatePresence>
                  {(link.dropdown || link.megaDropdown) && mobileDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      {link.megaDropdown ? (
                        <div className="space-y-3 border-t border-slate-200 px-3 py-3">
                          {link.megaDropdown.map((group) => (
                            <div key={group.title}>
                              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                {group.title}
                              </p>
                              <div className="mt-1 grid gap-1">
                                {group.items.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="rounded-lg px-2 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid gap-1 border-t border-slate-200 px-3 py-2">
                          {link.dropdown?.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="rounded-lg px-2 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-2">
            <a
              href="tel:+916205878945"
              className="flex items-center justify-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-black"
            >
              <BiSolidPhoneCall className="text-red-500 text-base" />
              Call Now
            </a>
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new Event("openModal"));
                setMobileOpen(false);
              }}
              className="rounded-full bg-red-500 px-5 py-2 text-sm font-semibold text-white"
            >
              GET FREE QUOTE
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
