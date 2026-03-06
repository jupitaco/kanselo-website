import Button from "@/components/ui/button";
import { GetStarted } from "@/components/ui/getStarted";
import { keyFeaturesList, reviewData } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main className="py-10">
      <section className="from-secondary-25 to-secondary hidden space-y-5 bg-linear-to-b from-10% to-80% pt-10 pl-10 lg:block">
        <article className="flex flex-col items-center gap-4 px-2 text-center text-white">
          <h1 data-aos="fade-right" className="text-white">
            Connect, Share and Gift with Ease
          </h1>
          <p
            data-aos="fade-left"
            className="mx-auto max-w-lg text-center text-lg font-medium"
          >
            Join Geeft, the social community platform that makes gifting a
            delightful experience. Share moments, connect with friends and
            surprise loved ones with thoughtful gifts.
          </p>

          <Button data-aos="fade-in" className="pry-btn">
            Get Started
          </Button>
        </article>
      </section>

      <section className="container space-y-10 overflow-hidden py-10">
        <hgroup data-aos="fade-down" className="space-y-5 text-center">
          <h2>What Our Users Say</h2>
          <h4 className="text-grey-600">
            Diam quis enim lobortis scelerisque fermentum dui faucibus. Urna
            nunc id cursus
          </h4>
        </hgroup>

        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {reviewData.map(({ userImg, qoute, name }, idx) => (
            <li key={idx} className="space-y-3 text-center">
              <figure data-aos="zoom-in">
                <Image src={userImg} alt={name} />
              </figure>

              <h5
                data-aos="fade-up"
                className="text-grey-500 text-lg font-medium"
              >
                {qoute}
              </h5>
              <h4 data-aos="fade-up" className="text-lg font-bold">
                {name}
              </h4>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-grey-50 py-10">
        <article className="container flex flex-col items-center justify-between space-y-10 overflow-hidden">
          <hgroup data-aos="fade-down" className="space-y-5 text-center">
            <h2>Key Features</h2>
            <h4 className="text-grey-600">
              Explore the features that make Geeft the ultimate social gifting
              platform.
            </h4>
          </hgroup>

          <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {keyFeaturesList.map(({ icon, title, subtext }, idx) => (
              <li
                key={idx}
                className="border-primary/30 space-y-8 rounded-2xl border bg-white p-7"
              >
                <div data-aos="zoom-in">{icon}</div>
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

      <GetStarted />

      <article
        data-aos="fade-up"
        className="container flex flex-col items-center justify-between space-y-10 overflow-hidden py-10 text-center"
      >
        <h2>Join Geeft Today</h2>
        <h4 className="text-grey-600 mx-auto max-w-xl font-medium!">
          Start connecting, sharing and gifting with ease. Sign up now and
          experience the joy of Geeft.
        </h4>

        <Button className="pry-btn">Sign Up</Button>
      </article>
    </main>
  );
}
