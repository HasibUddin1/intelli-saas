import PricingCard from "@/components/PricingCard";
import { getPricingPlans } from "@/lib/api";
import Image from "next/image";

export default async function Home() {

  const plans = await getPricingPlans();

  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* HERO */}
      <section className="relative pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-[#2b2bff33] to-transparent blur-3xl"></div>

        <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Build Smarter With
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
              {" "}
              AI Power
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Generate content, automate workflows, analyze data and scale your
            business using our intelligent AI-powered SaaS platform.
          </p>

          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition cursor-pointer">
              Get Started Free
            </button>
            <button className="px-6 py-3 rounded-xl border border-gray-600 hover:border-white transition cursor-pointer">
              View Demo
            </button>
          </div>

          <div className="relative w-full h-[400px] mt-14 opacity-90">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              alt="dashboard mockup"
              fill
              className="object-cover rounded-2xl shadow-xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
            Craft, automate and deploy AI workflows faster than ever.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Text Generation",
                desc: "High-quality writing for blogs, ads, emails & more.",
              },
              {
                title: "Workflow Automation",
                desc: "Connect tasks, process data & build smart pipelines.",
              },
              {
                title: "Real-time Analytics",
                desc: "Monitor usage, performance & insights at scale.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <h3 className="text-2xl mb-3">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* PRICING */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Simple Pricing
          </h2>
          <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
            Flexible plans for individuals, teams & large businesses.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-400">
        © 2025 IntelliSaaS – All rights reserved.
      </footer>
    </div>
  );
}
