"use client";

import { useEffect, useState } from "react";
import BrandLogo from "../ui/brandLogo";
import styles from "./navBar.module.css";
import ResponsiveNavBar from "./responsiveNavBar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (path.includes("/build")) return;
  return (
    <header
      // className={`grid h-24 w-full place-items-center`}
      className={`fixed top-0 z-50 grid min-h-20 w-full place-items-center ${
        isScrolled ? "bg-white/80 backdrop-blur-xs" : "bg-transparent"
      }`}
    >
      <section
        className={`${styles.navContainer} container flex items-center justify-between gap-5`}
      >
        <BrandLogo
        // className={isScrolled ? "text-black" : "text-white"}
        />

        <ResponsiveNavBar styles={styles} isScrolled={isScrolled} />
      </section>
    </header>
  );
};

export default Navbar;
