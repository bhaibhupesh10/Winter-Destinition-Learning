import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Briefcase, Map, Mountain, Users, UserCheck, Signpost } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: <Briefcase className="w-12 h-12 text-red-500 transition-transform" />,
      title: "Exciting Journeys",
      description: "Embark on thrilling expeditions and immerse yourself in unforgettable experiences.",
    },
    {
      icon: <Map className="w-12 h-12 text-red-500 transition-transform" />,
      title: "Expert Guides",
      description: "Our seasoned guides ensure a safe and enriching adventure, tailored to your needs.",
    },
    {
      icon: <UserCheck className="w-12 h-12 text-red-500 transition-transform" />,
      title: "Personalized Packages",
      description: "Choose from a variety of custom packages designed to suit every traveler's desire.",
    },
    {
      icon: <Mountain className="w-12 h-12 text-red-500 transition-transform" />,
      title: "Scenic Trails",
      description: "Explore breathtaking trails and discover the beauty of untouched nature.",
    },
    {
      icon: <Users className="w-12 h-12 text-red-500 transition-transform" />,
      title: "Family Adventures",
      description: "Create lasting memories with family trips that are fun and suitable for all ages.",
    },
    {
      icon: <Signpost className="w-12 h-12 text-red-500 transition-transform" />,
      title: "Comprehensive Support",
      description: "Receive a complete guide to make your adventure seamless and worry-free.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="mb-2 text-mikado-yellow text-2xl font-comforter-brush">What We Offer</p>
          <h2 className="text-4xl font-bold">Best Services We Offer</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-sm hover:shadow-md transition-shadow group"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="group-hover:-translate-y-2 transform transition-transform">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link
                  href="#"
                  className="text-red-500 inline-flex items-center hover:text-red-600 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
