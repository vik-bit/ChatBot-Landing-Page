import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { MessageSquare, Zap, BarChart, Users } from 'lucide-react'

const features = [
  {
    title: "24/7 Availability",
    description: "Our chatbot is always online to assist your customers.",
    icon: MessageSquare
  },
  {
    title: "Quick Responses",
    description: "Instant answers to common queries, improving customer satisfaction.",
    icon: Zap
  },
  {
    title: "Analytics Dashboard",
    description: "Gain insights from customer interactions to improve your service.",
    icon: BarChart
  },
  {
    title: "Multi-language Support",
    description: "Communicate with customers in their preferred language.",
    icon: Users
  }
]

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

