"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import ServicesVideo from "../components/servideo";

const services = [
  {
    title: "Web Development",
    description:
      "Our expert team designs and develops visually captivating, fully responsive websites that provide seamless user experiences. We specialize in modern web technologies like React, Next.js, and Tailwind CSS to ensure performance, accessibility, and scalability. Whether it's a corporate site, portfolio, or e-commerce platform, we create solutions tailored to your goals.",
    image: "/WebDevelopement.JPG",
    link: "/services/web-development",
  },
  {
    title: "Mobile Application Development",
    description:
      "We build high-performance mobile applications for both Android and iOS using platforms like React Native and Flutter. Our apps are optimized for speed, functionality, and user engagement. From wireframing and UI design to deployment and maintenance, we cover the full lifecycle of app development to deliver smooth and intuitive experiences.",
    image: "/MobileApplication.JPG",
    link: "/services/mobile-application-development",
  },
  {
    title: "Digital Marketing",
    description:
      "Fuel your brand’s digital growth with our results-driven marketing strategies. We offer SEO, social media management, PPC campaigns, email marketing, and content creation services designed to boost visibility, generate leads, and increase ROI. Let our marketing experts craft a personalized strategy that aligns with your business objectives.",
    image: "/ApexAiAssist.JPG",
    link: "/services/digital-marketing",
  },
  {
    title: "Catalyst Cloud Service",
    description:
      "Empower your business with our scalable and secure Catalyst Cloud infrastructure. We offer cloud migration, serverless architecture, and managed hosting solutions that reduce costs and increase performance. Our DevOps experts ensure your cloud environment is always optimized for uptime and security.",
    image: "/Cloud Service.JPG",
    link: "/services/catalyst-cloud-service",
  },
  {
    title: "Catalyst Digital Innovation",
    description:
      "Transform your operations with our end-to-end digital innovation services. From AI-powered tools to IoT integration and enterprise automation, we help future-proof your business. Our solutions focus on enhancing efficiency, improving customer engagement, and driving sustainable growth through cutting-edge technology.",
    image: "/CatalystDigitalInnovation.JPG",
    link: "/services/catalyst-digital-innovation",
  },
  {
    title: "Apex AI Assist for Smart Automation",
    description:
      "Leverage the power of AI to automate tasks, analyze data, and make smarter decisions. Our Apex AI Assist platform integrates natural language processing, predictive analytics, and machine learning into your workflows, helping your business operate more efficiently and stay ahead of the curve in a rapidly evolving tech landscape.",
    image: "/ApexAiAssist.JPG",
    link: "/services/apex-ai-assist",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-br from-[#00204a] via-[#003566] to-[#001d3d] text-white font-poppins">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <ServicesVideo />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-8">
          <div className="flex flex-col max-w-3xl text-center">
            <h1 className="text-5xl font-bold mb-4 text-blue-600">Our Services</h1>
            <p className="text-blue-400 text-lg">
              Delivering high-quality, innovative solutions for your digital needs.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }}>
              <Card className="bg-[#003566] text-white">
                <CardContent className="p-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover rounded-t"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h4>
                    <p className="text-blue-100 text-sm mb-4">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
