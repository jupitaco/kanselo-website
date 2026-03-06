import Button from "./button";

export const FAQs = ({
  faqsData,
}: {
  faqsData: { question: string; answer: string }[];
}) => {
  return (
    <section id="faqs" className="bg-grey-50 mb-16 space-y-10 py-10">
      <article className="container space-y-10">
        <h3>Frequently Asked Questions</h3>

        <ul className="grid grid-cols-1 gap-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {faqsData.map(({ question, answer }, idx) => (
            <li key={idx} className="space-y-2">
              <h4 className="text-lg font-bold">{question}</h4>
              <p>{answer}</p>
            </li>
          ))}
        </ul>
      </article>

      <article className="bg-grey-5 container flex flex-wrap items-center justify-between gap-4 rounded-3xl p-6">
        <div className="space-y-3">
          <h4 className="font-black">Still have questions?</h4>
          <p>
            We understand. Let&apos;s get in touch directly with our team, then.
          </p>
        </div>
        <Button className="pry-btn max-h-12 w-full py-0! md:w-fit">
          Contact us
        </Button>
      </article>
    </section>
  );
};
