import Button from "./button";

export const GetStarted = ({
  title,
  subtitle,
  className,
}: {
  className?: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <section
      className={`${className} my-10 flex min-h-[383px] flex-col items-center justify-center gap-8 overflow-hidden bg-white py-10`}
    >
      <article className="container space-y-5">
        <hgroup
          data-aos="fade-down"
          className="mx-auto w-full max-w-xl space-y-3 text-center"
        >
          <h3>{title}</h3>

          <p className="text-grey-600">{subtitle}</p>
        </hgroup>

        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center lg:flex-row"
        >
          <Button className="pry-btn">Get Started</Button>
        </div>
      </article>
    </section>
  );
};
