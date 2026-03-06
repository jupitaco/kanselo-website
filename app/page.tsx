import Button from "@/components/ui/button";
import { howItWorks } from "@/constants";
import { allImages } from "@/public/images/images";
import Image from "next/image";

export default function Home() {
  return (
    <main className="py-10">
      <section className="to-secondary/60 flex h-[80vh] flex-col justify-between space-y-5 overflow-hidden bg-linear-to-b from-white from-30% to-90% md:min-h-[800px]">
        <div data-aos="fade-down" className="space-y-6">
          <article className="flex flex-col items-center gap-4 px-2 text-center">
            <h1 className="text-grey-800 mx-auto max-w-3xl">
              Where Ambition Meets Guidance
            </h1>
            <p className="text-grey-500 mx-auto max-w-2xl text-center text-lg font-medium">
              Build with confidence. Grow with clarity.
              <br />
              <br />
              Kanselo (pronounced Kan-seh-lo) is a digital mentorship and
              business advisory platform connecting entrepreneurs and
              professionals with verified mentors and experienced business
              owners — so you’re never building alone.
            </p>
          </article>
          <article
            // data-aos="fade-down"
            className="mx-auto flex w-11/12 max-w-[400px] flex-col justify-center gap-5 lg:flex-row"
          >
            <Button
              link
              href="https://kanselo-mentor.vercel.app"
              className="outline-btn bg-white!"
            >
              Apply as a Mentor
            </Button>
            <Button
              link
              href="https://kanselo-mentee.vercel.app"
              className="pry-btn"
            >
              Sign Up Today
            </Button>
          </article>
        </div>

        <figure
          // data-aos="zoom-up"
          className="mx-auto -mb-2 w-11/12 overflow-hidden md:-mb-7 lg:w-7/12"
        >
          <Image
            src={allImages.dashboardHero}
            alt=""
            className="mx-auto shadow-2xl"
          />
        </figure>
      </section>

      <section id="how-it-works" className="bg-grey-50 py-10">
        <article className="container flex flex-col items-center justify-between space-y-10 overflow-hidden">
          <hgroup data-aos="fade-down" className="space-y-5 text-center">
            <h2>How Kanselo Works</h2>
            <h4 className="text-grey-600">
              Simple. Intentional. Impact-driven.
            </h4>
          </hgroup>

          <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {howItWorks.map(({ title, subtext }, idx) => (
              <li
                key={idx}
                className="border-primary/30 space-y-8 rounded-2xl border bg-white p-7"
              >
                <div
                  data-aos="zoom-in"
                  className="text-primary bg-grey-100 grid size-12 place-items-center rounded-full"
                >
                  {idx + 1}
                </div>
                <div data-aos="fade-right" className="space-y-2">
                  <h4 className="font-black">{title}</h4>
                  <p>{subtext}</p>
                </div>
              </li>
            ))}
          </ul>

          <Button className="pry-btn">Learn More</Button>
        </article>
      </section>
    </main>
  );
}
