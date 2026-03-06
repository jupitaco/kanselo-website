import Button from "@/components/ui/button";
import { GetStarted } from "@/components/ui/getStarted";
import { faqsData, featuresList } from "@/constants";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="overflow-hidden py-10">
      <section data-aos="fade-down" className="container space-y-5 text-center">
        <h1>Features Crafted for You</h1>
        <p className="mx-auto max-w-xl text-lg font-medium">
          Explore the features that make Geeft the perfect platform for
          connecting, sharing and gifting
        </p>
      </section>

      <section className="container space-y-10 py-20">
        <ul className="space-y-8">
          {featuresList
            .slice(0, 3)
            .map(({ image, icon, title, subtext }, idx) => (
              <li
                key={idx}
                className={`flex flex-col items-center justify-between gap-18 gap-y-5 lg:flex-row ${idx === 1 ? "lg:flex-row-reverse" : ""} `}
              >
                {image && (
                  <figure data-aos="fade-left" className="w-full lg:w-4/12">
                    <Image src={image} alt="" />
                  </figure>
                )}
                <article className="flex-1 space-y-8 rounded-2xl p-7">
                  <div data-aos="zoom-in">{icon}</div>
                  <div data-aos="fade-right" className="space-y-2">
                    <h4 className="font-black">{title}</h4>
                    <p>{subtext}</p>
                  </div>
                </article>
              </li>
            ))}
        </ul>

        <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featuresList.slice(3).map(({ image, icon, title, subtext }, idx) => (
            <li key={idx} className="flex-1 space-y-5 rounded-2xl p-7">
              <div data-aos="zoom-in">{icon}</div>
              <div data-aos="fade-right" className="space-y-2">
                <h4 className="font-black">{title}</h4>
                <p>{subtext}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="faqs" className="bg-grey-50 mb-16 space-y-10 py-20">
        <article className="container space-y-10">
          {" "}
          <section
            data-aos="fade-down"
            className="container space-y-5 text-center"
          >
            <h3>Frequently Asked Questions</h3>
            <p className="text-lg font-medium">
              Find answers to common questions about Geeft.
            </p>
          </section>
          <ul className="grid grid-cols-1 gap-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {faqsData.map(({ question, answer }, idx) => (
              <li key={idx} className="space-y-2">
                <h4 className="text-lg font-bold">{question}</h4>
                <p>{answer}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="bg-primary container flex flex-wrap justify-between gap-4 rounded-3xl p-6">
          <div className="space-y-3 text-white">
            <h4 className="font-black text-white">Still have questions?</h4>
            <p>
              We understand. Let&apos;s get in touch directly with our team,
              then.
            </p>
          </div>
          <Button className="sec-btn w-full md:w-fit">Contact us</Button>
        </article>
      </section>
      <GetStarted />
    </main>
  );
}
