"use client";
import Link from "next/link";
import { footerRoutes } from "../routes";
import BrandLogo from "../ui/brandLogo";

const Footer = () => {
  return (
    <footer className="bg-primary py-10 text-white">
      <section className="container flex flex-col items-center justify-center gap-10">
        <BrandLogo footer />

        <ul className="flex flex-wrap gap-20">
          {footerRoutes.map(({ name, path }) => (
            <li key={name}>
              <Link href={path} className=" ">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <small className="w-fit">
          Copyright © {new Date()?.getFullYear()} Geeft
        </small>
      </section>
    </footer>
  );
};

export default Footer;
