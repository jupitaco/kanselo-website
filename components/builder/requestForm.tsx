"use client";
import Link from "next/link";
import {
  AboutYouForm,
  AttachmentsForm,
  BusinessInfoForm,
  ContactForm,
} from "./form";
import { FormChecked, Unchecked } from "@/public/svgs/svgs";

const steps = [
  {
    title: "Contact",
    path: "contact",
  },
  {
    title: "You",
    path: "you",
  },
  {
    title: "The Business",
    path: "the-business",
  },
  {
    title: "Attachments (optional)",
    path: "attachments",
  },
];

export const RequestForm = ({ params }: { params: { step: string } }) => {
  const activeStep = params?.step || "contact";
  let currentStep;

  switch (activeStep) {
    case "you":
      currentStep = <AboutYouForm />;
      break;
    case "the-business":
      currentStep = <BusinessInfoForm />;
      break;
    case "attachments":
      currentStep = <AttachmentsForm />;
      break;
    default:
      currentStep = <ContactForm />;
  }
  return (
    <section className="flex h-full w-full flex-col items-center gap-5">
      <ul className="grid grid-cols-4 overflow-x-auto">
        {steps.map(({ title, path }, index) => {
          // Find the index of the active step
          const activeStepIndex = steps.findIndex(
            (step) => step?.path === activeStep,
          );

          // Check if this step is completed (past) or current
          const isPastStep = index < activeStepIndex;
          const isCurrentStep = index === activeStepIndex;

          return (
            <Link
              key={index}
              href={`/build-with-us/request?step=${path}`}
              className="flex flex-col gap-5 text-center text-xs font-bold"
            >
              <div>
                {isPastStep || isCurrentStep ? <FormChecked /> : <Unchecked />}
              </div>
              <p
                className={
                  isPastStep || isCurrentStep ? "text-primary" : "text-grey-40"
                }
              >
                {title}
              </p>
            </Link>
          );
        })}
      </ul>

      {currentStep}
    </section>
  );
};
