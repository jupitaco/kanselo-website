"use client";

import { useEffect, useState } from "react";
import BrandLogo from "../ui/brandLogo";
import styles from "./navBar.module.css";
import ResponsiveNavBar from "./responsiveNavBar";

const Navbar = () => {
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

  return (
    <header
      // className={`grid h-24 w-full place-items-center`}
      className={`border-grey-100 sticky top-0 z-50 grid min-h-20 w-full place-items-center border-b ${
        isScrolled ? "bg-white/80 backdrop-blur-xs" : "bg-white"
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
