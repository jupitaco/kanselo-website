import FormInput from "../ui/formInput";
import Button from "../ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ImageFileUpload } from "../fileUpload/fileUpload";

export const industriesData = [
  {
    label: "Branding",
    value: "Branding",
  },
  {
    label: "Copywriting",
    value: "Copywriting",
  },
  {
    label: "Publishing",
    value: "Publishing",
  },
  {
    label: "Search Engine Optimization",
    value: "Search Engine Optimization",
  },
  {
    label: "Social Media Marketing",
    value: "Social Media Marketing",
  },
  {
    label: "Public Relations",
    value: "Public Relations",
  },
  {
    label: "Sales & Lead Generation",
    value: "Sales & Lead Generation",
  },
  {
    label: "Email Marketing",
    value: "Email Marketing",
  },
  {
    label: "Advertising",
    value: "Advertising",
  },
  {
    label: "Growth Strategy",
    value: "Growth Strategy",
  },
  {
    label: "Inbound Marketing",
    value: "Inbound Marketing",
  },
  {
    label: "Search Engine Marketing",
    value: "Search Engine Marketing",
  },
];

export const ContactForm = () => {
  const { push } = useRouter();

  return (
    <section className="mx-auto w-full max-w-lg space-y-4">
      <header className="border-Line border-b pb-2">
        <h5 className="text-grey-500 text-lg font-bold">Contact</h5>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          push(`/build-with-us/request?step=you`);
        }}
        className="space-y-6 px-5"
      >
        <FormInput
          id="fullName"
          name="fullName"
          type="text"
          label="Full Name"
          required
        />
        <FormInput
          id="email"
          name="email"
          type="email"
          label="Email"
          required
        />
        <FormInput
          id="fullName"
          name="fullName"
          label="Phone/Whatsapp"
          required
        />
        <FormInput id="city" name="city" label="Country/City" required />

        <Button className="pry-btn w-full" type="submit">
          Continue
        </Button>
      </form>
    </section>
  );
};

export const AboutYouForm = () => {
  const { push } = useRouter();
  return (
    <section className="mx-auto w-full max-w-lg space-y-4">
      <header className="border-Line border-b pb-2">
        <h5 className="text-grey-500 text-lg font-bold">You</h5>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          push(`/build-with-us/request?step=the-business`);
        }}
        className="space-y-6 px-5"
      >
        <FormInput
          id="you"
          name="you"
          type="shadSelect"
          label="You are:"
          shadcnSelectData={[
            { label: "Mentor", value: "mentor" },
            { label: "Mentee", value: "mentee" },
          ]}
          required
        />

        <Button className="pry-btn w-full" type="submit">
          Continue
        </Button>
      </form>
    </section>
  );
};

export const BusinessInfoForm = () => {
  const { push } = useRouter();

  const [formData, setFormData] = useState({
    whatToBuid: "",
    industry: "",
    explanation: "",
    isBrandName: "",
    timeline: "",
    budget: "",
    option: "",
    equity: "",
  });

  const handleSelect = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section className="mx-auto w-full max-w-lg space-y-4">
      <header className="border-Line border-b pb-2">
        <h5 className="text-grey-500 text-lg font-bold">The Business</h5>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          push(`/build-with-us/request?step=attachments`);
        }}
        className="space-y-6 px-5"
      >
        <FormInput
          id="whatToBuid"
          name="whatToBuid"
          type="textarea"
          label="What do you want to build?"
          required
        />

        <FormInput
          id="industry"
          name="industry"
          type="shadSelect"
          label="Industry"
          shadcnSelectData={industriesData}
          value={formData?.industry}
          onSelectItem={(v) => handleSelect("industry", v)}
          required
        />
        <FormInput
          id="explanation"
          name="explanation"
          type="textarea"
          label="Explain the idea in a few sentences"
          required
        />

        <FormInput
          id="isBrandName"
          name="isBrandName"
          type="shadSelect"
          label="Do you already have a name/brand"
          shadcnSelectData={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
          value={formData?.isBrandName}
          onSelectItem={(v) => handleSelect("isBrandName", v)}
          required
        />

        <FormInput
          id="timeline"
          name="timeline"
          type="shadSelect"
          label="Timeline"
          shadcnSelectData={[
            { label: "1 Week", value: "1week" },
            { label: "2 Week", value: "2week" },
            { label: "3 Week", value: "3week" },
            { label: "4 Week", value: "4week" },
          ]}
          value={formData?.timeline}
          onSelectItem={(v) => handleSelect("timeline", v)}
          required
        />

        <FormInput
          id="budget"
          name="budget"
          type="number"
          label="Budget amount range"
          required
        />

        <FormInput
          id="option"
          name="option"
          type="shadSelect"
          label="Preferred option"
          shadcnSelectData={[
            { label: "Option1", value: "option1" },
            { label: "Option2", value: "option2" },
          ]}
          value={formData?.option}
          onSelectItem={(v) => handleSelect("option", v)}
          required
        />

        <FormInput
          id="equity"
          name="equity"
          type="shadSelect"
          label="Do you want Kanselo to take equity?"
          shadcnSelectData={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
          value={formData?.equity}
          onSelectItem={(v) => handleSelect("equity", v)}
          required
        />

        <Button className="pry-btn w-full" type="submit">
          Continue
        </Button>
      </form>
    </section>
  );
};

export const AttachmentsForm = () => {
  const { push } = useRouter();

  const loading = {};
  return (
    <section className="mx-auto w-full max-w-lg space-y-4">
      <header className="border-Line border-b pb-2">
        <h5 className="text-grey-500 text-lg font-bold">Attachments</h5>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          push("/build-with-us/success");
        }}
        className="space-y-6 px-5"
      >
        <article className="flex w-full flex-col gap-3">
          <h5 className="text-grey-500 text-sm font-medium">
            Upload pitch deck/notes/sketches
          </h5>
          <ImageFileUpload
            id="profilePhoto"
            loading={loading}
            uploadFiles={() => {}}
            imgClassName="object-cover"
            singleUpload
          />
        </article>

        <div className="flex gap-4">
          <div>
            <input
              type="radio"
              name="consent"
              id="consent"
              className="size-5"
              required
            />
          </div>
          <label htmlFor="consent">
            By submitting this form, you agree that{" "}
            <b className="text-primary">Kanselo</b> may contact you about your
            enquiry. We do not share your information with third parties.
          </label>
        </div>

        <Button className="pry-btn w-full" type="submit">
          Continue
        </Button>
      </form>
    </section>
  );
};
