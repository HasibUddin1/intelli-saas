import { PricingPlan } from "@/types/types";

interface Props {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: Props) {
  return (
    <div className="p-6 rounded-2xl border bg-white shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{plan.name}</h3>
      <p className="text-3xl font-bold mt-2">${plan.price_monthly}/mo</p>
      <p className="mt-2 text-gray-600">{plan.description}</p>
      <ul className="mt-4 space-y-2">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="text-sm text-gray-700">
            ✅ {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
