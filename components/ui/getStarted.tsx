import React from "react";
import { AppStoreIcon, GoogleStoreIcon } from "@/public/svgs/svgs";

export const GetStarted = () => {
  return (
    <section
      className={`bg-success-50 container my-10 flex min-h-[383px] flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl px-3 py-10`}
    >
      <hgroup
        data-aos="fade-down"
        className="mx-auto w-full max-w-xl space-y-5 text-center"
      >
        <h3 className="font-black">Download the Geeft App</h3>

        <h4 className="text-grey-600">
          Take Geeft with you wherever you go. Enjoy seamless gifting and stay
          connected with your community on our mobile app. get notified about
          birthdays, special occasions and new gift ideas.
        </h4>
      </hgroup>

      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center lg:flex-row"
      >
        <AppStoreIcon />
        <GoogleStoreIcon />
      </div>
    </section>
  );
};
