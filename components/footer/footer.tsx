"use client";
import Link from "next/link";
import { footerRoutes } from "../routes";
import BrandLogo from "../ui/brandLogo";
import { usePathname } from "next/navigation";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "@/public/svgs/svgs";

const Footer = () => {
  const path = usePathname();

  if (path.includes("/build-with-us/request")) return;
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

        <ul className="flex items-center justify-center gap-3">
          <li>
            <a href="#">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <XIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <LinkedinIcon />
            </a>
          </li>
        </ul>

        <small className="w-fit">
          Copyright © {new Date().getFullYear()} Kanselo All Right Reserved.
        </small>
      </section>
    </footer>
  );
};

export default Footer;
