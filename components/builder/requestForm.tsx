"use client";
import Link from "next/link";
import {
  AboutYouForm,
  AttachmentsForm,
  BusinessInfoForm,
  ContactForm,
  type RequestFormData,
} from "./form";
import { FormChecked, Unchecked } from "@/public/svgs/svgs";
import { useCallback, useState } from "react";
import emailjs from "@emailjs/browser";

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
  const [formData, setFormData] = useState<RequestFormData>({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    you: "",
    whatToBuid: "",
    industry: "",
    explanation: "",
    isBrandName: "",
    timeline: "",
    budget: "",
    option: "",
    equity: "",
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);

  const updateField = useCallback(
    (name: keyof RequestFormData, value: string | boolean) => {
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleFinalSubmit = useCallback(async () => {
    if (submitting) return false;
    setSubmitting(true);
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        // eslint-disable-next-line no-console
        console.error("EmailJS env vars are missing.");
        return false;
      }

      await emailjs.send(
        serviceId,
        templateId,
        formData,
        {
          publicKey,
        },
      );
      return true;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("EmailJS send failed:", error);
      return false;
    } finally {
      setSubmitting(false);
    }
  }, [formData, submitting]);

  let currentStep;

  switch (activeStep) {
    case "you":
      currentStep = (
        <AboutYouForm values={formData} onChange={updateField} />
      );
      break;
    case "the-business":
      currentStep = (
        <BusinessInfoForm values={formData} onChange={updateField} />
      );
      break;
    case "attachments":
      currentStep = (
        <AttachmentsForm
          values={formData}
          onChange={updateField}
          onSubmit={handleFinalSubmit}
          submitting={submitting}
        />
      );
      break;
    default:
      currentStep = (
        <ContactForm values={formData} onChange={updateField} />
      );
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
