"use client";
import Link from "next/link";
import { footerRoutes } from "../routes";
import BrandLogo from "../ui/brandLogo";

const Footer = () => {
  return (
    <footer className="bg-grey-900 py-10 text-white">
      <section className="container flex flex-wrap items-center justify-between gap-y-10 lg:flex-row">
        <BrandLogo />

        <ul className="flex flex-wrap gap-10">
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
