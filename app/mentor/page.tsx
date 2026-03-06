import Button from "@/components/ui/button";
import { FAQs } from "@/components/ui/faq";
import { GetStarted } from "@/components/ui/getStarted";
import {
  howMentoringWorks,
  mentorsAre,
  mentorsFaq,
  whatMakeKanseloDifferent,
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
      <section className="to-secondary/40 from-secondary-25/60 flex min-h-screen flex-wrap justify-between space-y-5 overflow-hidden bg-linear-to-r from-20% to-90% pt-30">
        <article className="flex flex-1 flex-col justify-center gap-8 px-3 lg:px-10">
          <h1>Turn Your Experience Into Impact</h1>
          <p>Mentor the next generation of entrepreneurs and professionals.</p>
          <Button
            link
            href="https://kanselo-mentor.vercel.app"
            className="pry-btn w-full lg:w-fit"
          >
            Join as a Mentor
          </Button>
        </article>
        <figure className="-mb-20 flex w-full justify-end lg:w-[45%]">
          <Image src={allImages.dashboardImg} alt="" />
        </figure>
      </section>

      <section className="container grid grid-cols-1 items-center gap-5 overflow-hidden py-16 lg:grid-cols-2">
        <article data-aos="fade-left" className="w-full space-y-4 md:w-10/12">
          <h2>
            Your journey didn’t start yesterday — and it shouldn’t end with you
          </h2>
          <p>
            Behind every successful business or career is guidance earned
            through experience. Kanselo exists to ensure that knowledge doesn’t
            stay locked away, but reaches the people who need it most.
            <br /> <br />
            We help experienced professionals mentor with intention, clarity,
            and structure — without the noise.
          </p>
        </article>

        <figure data-aos="fade-left">
          <Image src={allImages.guidance} alt="" />
        </figure>
      </section>

      <section className="bg-grey-5 overflow-hidden py-16">
        <article className="container flex flex-col items-center justify-between space-y-10 overflow-hidden">
          <hgroup data-aos="fade-down" className="space-y-5 text-center">
            <h2>Why Mentor on Kanselo</h2>
            <h4 className="text-grey-500 font-normal!">
              Mentorship, designed for serious builders
            </h4>
          </hgroup>

          <ul className="grid grid-cols-1 lg:grid-cols-4">
            {whyMentorsOnKanselo.map(({ title, subtext, icon }, idx) => (
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

      <section className="container space-y-10 overflow-hidden py-16">
        <hgroup data-aos="fade-down" className="space-y-5 text-center">
          <h2>Who We’re Looking For</h2>
        </hgroup>
        <article className="grid grid-cols-1 items-center gap-5 py-10 lg:grid-cols-2">
          <div data-aos="fade-left" className="w-full space-y-4 md:w-10/12">
            <article className="space-y-4">
              <h3>Kanselo mentors are:</h3>
              <ul className="flex flex-col gap-5">
                {mentorsAre.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-grey-600 inline-flex items-center gap-2"
                  >
                    <CheckedIcon /> {item}
                  </li>
                ))}
              </ul>
              <p className="text-grey-600">
                If you’ve built, scaled, failed, learned, and grown — your
                experience matters here.
              </p>
            </article>
          </div>

          <figure data-aos="fade-right">
            <Image src={allImages.lookingFor} alt="" />
          </figure>
        </article>
      </section>

      <section id="how-it-works" className="bg-grey-5 overflow-hidden py-16">
        <article className="container flex flex-col items-center justify-between space-y-10 overflow-hidden">
          <hgroup data-aos="fade-down" className="space-y-5 text-center">
            <h2>How Mentoring Works</h2>
            <h4 className="text-grey-500 font-normal!">
              Simple. Respectful. Impact-driven.
            </h4>
          </hgroup>

          <ul className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {howMentoringWorks.map(({ title, subtext }, idx) => (
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
          <h2>Who We’re Looking For</h2>
        </hgroup>
        <article className="grid grid-cols-1 items-center gap-5 py-10 lg:grid-cols-2">
          <div data-aos="fade-left" className="w-full space-y-6 md:w-10/12">
            <article className="space-y-4">
              <h3>What Makes Kanselo Different</h3>
              <h5 className="text-grey-500 text-lg font-bold">
                Built on trust, not volume
              </h5>
              <p className="text-grey-600">
                Kanselo prioritizes depth over scale. We focus on meaningful
                mentorship — not mass sign-ups.
              </p>
            </article>
            <ul className="flex flex-col gap-5">
              {whatMakeKanseloDifferent.map((item, idx) => (
                <li
                  key={idx}
                  className="text-grey-600 inline-flex items-center gap-2"
                >
                  <CheckedIcon /> {item}
                </li>
              ))}
            </ul>
          </div>

          <figure data-aos="fade-right">
            <Image src={allImages.whatMakeus} alt="" />
          </figure>
        </article>
      </section>

      <GetStarted
        title="Experience deserves a platform"
        subtitle="Kanselo exists to honour experience by turning it into guidance — helping ambitious people avoid mistakes, grow faster, and build smarter."
        ctaTitle="Join as a Mentor"
        link="https://kanselo-mentor.vercel.app"
        className="bg-grey-5!"
      />

      <FAQs faqsData={mentorsFaq} />
    </main>
  );
}
