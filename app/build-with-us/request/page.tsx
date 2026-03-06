import { RequestForm } from "@/components/builder/requestForm";
import BrandLogo from "@/components/ui/brandLogo";
import { Metadata } from "next";
import { use } from "react";

export const metadata: Metadata = {
  title: "Builder request",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ step: string }>;
}) {
  const p = use(searchParams);
  return (
    <main className="container min-h-screen space-y-10 py-10">
      <div className="flex items-center justify-center">
        <BrandLogo />
      </div>

      <article className="space-y-4 text-center">
        <h3>Tell us what you want to build</h3>
        <p>
          Fill the form below and our team will review your request and contact
          you.
        </p>
      </article>

      <RequestForm params={p} />
    </main>
  );
}
