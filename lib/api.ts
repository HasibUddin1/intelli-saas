import { PricingPlan } from "@/types/types";


export async function getPricingPlans(): Promise<PricingPlan[]> {
    const res = await fetch('http://localhost:8000/api/pricing-plans', {
        cache: 'no-store', // or { next: { revalidate: 60 } } for ISR
    });
    if (!res.ok) throw new Error('Failed to fetch pricing plans');
    return res.json();

}