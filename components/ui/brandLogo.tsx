import { BrandIcon } from "@/public/svgs/svgs";
import Link from "next/link";

const BrandLogo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={`${className} w-[94px]`}
      aria-label="Brand logo take you home"
    >
      <BrandIcon />
    </Link>
  );
};

export default BrandLogo;
