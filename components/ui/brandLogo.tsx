import { allImages } from "@/public/images/images";
import Image from "next/image";
import Link from "next/link";

const BrandLogo = ({
  className,
  footer,
}: {
  footer?: boolean;
  className?: string;
}) => {
  return (
    <Link
      href="/"
      className={`${className} flex w-26 items-center justify-center gap-2`}
    >
      <Image
        src={footer ? allImages.brandWhiteLogo : allImages.brandLogo}
        alt="Kanselo Logo"
      />
    </Link>
  );
};

export default BrandLogo;
