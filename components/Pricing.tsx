import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

const plans = [
  {
    name: "Startup",
    price: "$29",
    description: "Perfect for small businesses just getting started.",
    features: ["1,000 messages/month", "Basic analytics", "1 language", "Email support"]
  },
  {
    name: "SMB",
    price: "$99",
    description: "Ideal for growing businesses with more demands.",
    features: ["10,000 messages/month", "Advanced analytics", "3 languages", "Priority support"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations requiring tailored solutions.",
    features: ["Unlimited messages", "Custom analytics", "Unlimited languages", "24/7 dedicated support"]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{plan.price}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

