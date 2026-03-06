import BrandLogo from "@/components/ui/brandLogo";
import Button from "@/components/ui/button";
import { SuccessIcon } from "@/public/svgs/svgs";

export default function page() {
  return (
    <main className="grid h-screen place-items-center">
      <div className="flex items-center justify-center">
        <BrandLogo />
      </div>

      <section className="flex w-full flex-col items-center gap-5 text-center">
        <SuccessIcon />

        <article className="w-full max-w-xl space-y-5">
          <h2>Enquiry Received!</h2>
          <p>
            Thank you — we’ve received your enquiry. A member of the Kanselo
            team will review your details and contact you as soon as possible.
          </p>
        </article>

        <Button link href="/" className="pry-btn">
          Okay
        </Button>
      </section>
    </main>
  );
}
