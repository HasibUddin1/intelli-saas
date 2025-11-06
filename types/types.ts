
// Pricing plan type definition
export interface PricingPlan {
  id: number;
  name: string;
  price_monthly: number;
  price_yearly: number;
  description: string;
  features: string[];
  is_popular: boolean;
}