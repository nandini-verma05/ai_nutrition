import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "$9.99",
    period: "per month",
    description: "Perfect for individuals starting their nutrition journey",
    features: ["Personalized meal recommendations", "Basic nutrition tracking", "100+ recipes", "Weekly meal planner"],
    buttonText: "Get Started",
    popular: false,
  },
  {
    id: 2,
    name: "Premium Plan",
    price: "$19.99",
    period: "per month",
    description: "Advanced features for nutrition enthusiasts",
    features: [
      "All Basic Plan features",
      "Advanced nutrition analytics",
      "500+ recipes",
      "Custom meal plans",
      "Grocery list generator",
      "Priority support",
    ],
    buttonText: "Get Premium",
    popular: true,
  },
  {
    id: 3,
    name: "Family Plan",
    price: "$29.99",
    period: "per month",
    description: "Nutrition planning for the whole family",
    features: [
      "All Premium Plan features",
      "Up to 5 family profiles",
      "Family meal planning",
      "Shared grocery lists",
      "Nutritionist consultation",
      "24/7 support",
    ],
    buttonText: "Get Family Plan",
    popular: false,
  },
]

export default function SubscriptionPlans() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Subscription Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan that fits your nutrition goals and lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.id} className={`flex flex-col h-full ${plan.popular ? "border-green-500 shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="bg-green-500 text-white text-center py-1 text-sm font-medium">Most Popular</div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                <div className="text-center mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-center text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-white border-2 border-green-500 text-green-500 hover:bg-green-50"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


