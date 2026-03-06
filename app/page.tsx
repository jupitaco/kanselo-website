import Button from "@/components/ui/button";
import { FAQs } from "@/components/ui/faq";
import { GetStarted } from "@/components/ui/getStarted";
import {
  forMentors,
  homeFaq,
  howItWorks,
  whoFor,
  whyKanselo,
  whyMentors,
  whyMentorsOnKanselo,
  youGain,
} from "@/constants";
import { allImages } from "@/public/images/images";
import { CheckedIcon } from "@/public/svgs/svgs";
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

      <section className="container grid grid-cols-1 items-center gap-5 py-10 lg:grid-cols-2">
        <article data-aos="fade-left" className="w-full space-y-4 md:w-10/12">
          <h3>Guidance shouldn’t be a privilege</h3>
          <p>
            Every ambitious idea deserves access to experience.
            <br /> <br />
            Kanselo exists to close the gap between where you are and where you
            want to be by making credible mentorship accessible, intentional,
            and practical. We connect people who are building with people who
            have already built.
          </p>
        </article>

        <figure data-aos="fade-left">
          <Image src={allImages.guidance} alt="" />
        </figure>
      </section>

      <section id="how-it-works" className="bg-grey-5 py-16">
        <article className="container flex flex-col items-center justify-between space-y-10 overflow-hidden">
          <hgroup data-aos="fade-down" className="space-y-5 text-center">
            <h2>How Kanselo Works</h2>
            <h4 className="text-grey-500 font-normal!">
              Simple. Intentional. Impact-driven.
            </h4>
          </hgroup>

          <ul className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {howItWorks.map(({ title, subtext }, idx) => (
              <li
                data-aos="fade-right"
                key={idx}
                className="flex flex-col items-center space-y-4 p-7"
              >
                <div className="text-primary bg-grey-100 grid size-12 place-items-center rounded-full">
                  {idx + 1}
                </div>
                <div className="space-y-2 text-center">
                  <h4 className="">{title}</h4>
                  <p>{subtext}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="container space-y-10 overflow-hidden py-16">
        <hgroup data-aos="fade-down" className="space-y-5 text-center">
          <h2>How Kanselo Works</h2>
          <h4 className="text-grey-500 font-normal!">
            Simple. Intentional. Impact-driven.
          </h4>
        </hgroup>
        <article className="grid grid-cols-1 items-center gap-5 py-10 lg:grid-cols-2">
          <div data-aos="fade-left" className="w-full space-y-4 md:w-10/12">
            <article className="space-y-4">
              <h3>For Entrepreneurs & Professionals</h3>
              <ul className="flex flex-col gap-5">
                {whoFor.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-grey-600 inline-flex items-center gap-2"
                  >
                    <CheckedIcon /> {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="space-y-4">
              <h3>You’ll gain:</h3>
              <ul className="flex flex-col gap-5">
                {youGain.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-grey-600 inline-flex items-center gap-2"
                  >
                    <CheckedIcon /> {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <figure data-aos="fade-right">
            <Image src={allImages.whoFor} alt="" />
          </figure>
        </article>
        <article className="flex flex-wrap-reverse items-center justify-between gap-5 py-10">
          <figure data-aos="fade-left w-full lg:w-6/12">
            <Image src={allImages.forMentors} alt="" />
          </figure>
          <div
            data-aos="fade-right"
            className="w-full flex-1 space-y-4 pl-0 md:w-10/12 md:pl-10"
          >
            <article className="space-y-4">
              <h3>For Mentors & Advisors</h3>
              <ul className="flex flex-col gap-5">
                {forMentors.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-grey-600 inline-flex items-center gap-2"
                  >
                    <CheckedIcon /> {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="space-y-4">
              <h3>Why mentor on Kanselo:</h3>
              <ul className="flex flex-col gap-5">
                {whyMentors.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-grey-600 inline-flex items-center gap-2"
                  >
                    <CheckedIcon /> {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </article>
      </section>

      <section id="how-it-works" className="bg-grey-5 py-16">
        <article className="container flex flex-col items-center justify-between space-y-10 overflow-hidden">
          <hgroup data-aos="fade-down" className="space-y-5 text-center">
            <h2>Why Kanselo</h2>
            <h4 className="text-grey-500 font-normal!">
              Built on trust. Designed for growth.
            </h4>
          </hgroup>

          <ul className="grid grid-cols-1 lg:grid-cols-4">
            {whyKanselo.map(({ title, subtext, icon }, idx) => (
              <li
                data-aos="fade-right"
                key={idx}
                className="flex flex-col items-center space-y-4 p-7"
              >
                <div>{icon}</div>
                <div className="space-y-2 text-center">
                  <h4 className="">{title}</h4>
                  <p>{subtext}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <GetStarted
        title="This isn’t motivation. It’s direction."
        subtitle="Kanselo helps ambitious people make smarter decisions, avoid costly mistakes, and move forward with confidence — guided by those who’ve already walked the path."
      />

      <section className="container space-y-10 overflow-hidden py-16">
        <article className="grid grid-cols-1 items-center gap-5 py-10 lg:grid-cols-2">
          <article data-aos="fade-left" className="w-full space-y-8 md:w-10/12">
            <h2>Work Directly With Kanselo</h2>
            <p>
              Want Kanselo to build your business for you? From Company setup to
              product, systems and optional staffing - We handle the heavy
              lifting and hand you a business that’s ready to run.
            </p>
            <Button
              link
              href="/build-with-us"
              className="pry-btn w-full md:w-fit"
            >
              Build with Kanselo
            </Button>
          </article>

          <figure data-aos="fade-right">
            <Image src={allImages.workWithUs} alt="" />
          </figure>
        </article>
      </section>

      <FAQs faqsData={homeFaq} />
    </main>
  );
}
