import { GetStarted } from "@/components/ui/getStarted";

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

      <GetStarted />
    </main>
  );
}
