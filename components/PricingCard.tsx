import { PricingPlan } from "@/types/types";

interface Props {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: Props) {
  return (
    <div className="p-6 rounded-2xl border border-gray-700 bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
      <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
      <p className="text-3xl font-bold mt-2 text-purple-400">
        ${plan.price_monthly}/mo
      </p>
      <p className="mt-2 text-gray-300">{plan.description}</p>
      <ul className="mt-4 space-y-2">
        {plan.features.map((feature, idx) => (
          <li
            key={idx}
            className="text-sm text-gray-200 flex items-center gap-2"
          >
            <span className="text-green-400">✔</span> {feature}
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full px-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition cursor-pointer">
        {Number(plan.price_monthly) === 0 ? "Get Started" : "Choose Plan"}
      </button>
    </div>
  );
}
