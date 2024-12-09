import { Ticket, BombIcon as Balloon, Diamond, Award } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: <Ticket className="w-12 h-12 text-emerald-500" strokeWidth={1.5} />,
    title: "Expertise and Experience",
    description: "Benefit from our years of travel industry knowledge, ensuring top-notch service and expert guidance."
  },
  {
    icon: <Balloon className="w-12 h-12 text-emerald-500" strokeWidth={1.5} />,
    title: "Wide Range of Destinations",
    description: "Explore diverse destinations worldwide, offering something unique for every traveler's preference and interest."
  },
  {
    icon: <Diamond className="w-12 h-12 text-emerald-500" strokeWidth={1.5} />,
    title: "Exclusive Deals and Discounts",
    description: "Save with special offers and discounts, providing excellent value for your travel investment."
  },
  {
    icon: <Award className="w-12 h-12 text-emerald-500" strokeWidth={1.5} />,
    title: "Customer Support and Assistance",
    description: "Rely on our dedicated customer support team for help and advice, whenever you need it."
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why to Choose Us?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

