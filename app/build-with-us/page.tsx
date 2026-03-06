import Button from "@/components/ui/button";
import { FAQs } from "@/components/ui/faq";
import { GetStarted } from "@/components/ui/getStarted";
import {
  builderEngagement,
  howMentoringWorks,
  mentorsAre,
  mentorsFaq,
  whatBuilderGet,
  whatMakeKanseloDifferent,
  whatWeBuild,
  whoBuildIsFor,
  whyMentorsOnKanselo,
} from "@/constants";
import { allImages } from "@/public/images/images";
import { CheckedIcon } from "@/public/svgs/svgs";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mentor",
};

export default function page() {
  return (
    <main className="overflow-hidden">
      <section className="flex min-h-screen flex-wrap justify-between space-y-5 overflow-hidden pt-20">
        <article className="flex flex-1 flex-col justify-center gap-8 px-3 lg:px-16">
          <h1>Kanselo Build Service</h1>
          <p>
            Some people don’t just need advice - they need the business built.
            <br />
            <br />
            Kanselo can help you set up and launch a complete business,
            including company registration, product or service build, systems,
            and optional staffing. When we’re done, you either take over fully,
            or we can partner with you depending on what you prefer.
          </p>
          <Button className="pry-btn w-full lg:w-fit">Get Started</Button>
        </article>
        <figure className="flex w-full justify-end lg:w-[55%]">
          <Image src={allImages.buildHero} alt="" />
        </figure>
      </section>

      <section className="container space-y-10 overflow-hidden py-16">
        <hgroup data-aos="fade-down" className="space-y-5 text-center">
          <h2>Who this is for</h2>
        </hgroup>
        <article className="grid grid-cols-1 items-center gap-5 py-10 lg:grid-cols-2">
          <div data-aos="fade-left" className="w-full space-y-4 md:w-10/12">
            <article className="space-y-4">
              <ul className="flex flex-col gap-5">
                {whoBuildIsFor.map((item, idx) => (
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
            <Image src={allImages.whoThisFor} alt="" />
          </figure>
        </article>
      </section>

      <section className="bg-grey-5 overflow-hidden py-16">
        <section className="container space-y-10">
          <hgroup data-aos="fade-down" className="space-y-5 text-center">
            <h2>What we build</h2>
            <p>We build real, complete businesses such as:</p>
          </hgroup>
          <article className="grid grid-cols-1 items-center gap-5 py-10 lg:grid-cols-2">
            <figure data-aos="fade-right">
              <Image src={allImages.whatWeBuild} alt="" />
            </figure>{" "}
            <div
              data-aos="fade-left"
              className="flex w-full justify-end space-y-4 md:w-8/12"
            >
              <article className="space-y-4">
                <ul className="flex flex-col gap-5">
                  {whatWeBuild.map((item, idx) => (
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
      </section>

      <section className="container space-y-10 overflow-hidden py-16">
        <hgroup data-aos="fade-down" className="space-y-5 text-center">
          <h2>What you receive</h2>
          <p>By the end, you get:</p>
        </hgroup>
        <article className="grid grid-cols-1 items-center gap-5 py-10 lg:grid-cols-2">
          <div data-aos="fade-left" className="w-full space-y-4 md:w-10/12">
            <article className="space-y-4">
              <ul className="flex flex-col gap-5">
                {whatBuilderGet.map((item, idx) => (
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
            <Image src={allImages.whatYouGet} alt="" />
          </figure>
        </article>
      </section>

      <section id="how-it-works" className="bg-grey-5 overflow-hidden py-20">
        <article className="container flex flex-col items-center justify-between space-y-10 overflow-hidden">
          <hgroup data-aos="fade-down" className="space-y-5 text-center">
            <h2>Engagement Options</h2>
            <h4 className="text-grey-500 font-normal!">
              Select from our different options:
            </h4>
          </hgroup>

          <ul className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {builderEngagement.map(({ title, subtext }, idx) => (
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
    </main>
  );
}
