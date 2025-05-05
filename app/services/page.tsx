"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Web Development",
    description:
      "Crafting stunning websites that captivate & engage. Elevate your online presence with immersive digital experiences designed to leave a lasting impression.",
      image: "/WebDevelopement.JPG",
      link: "/services/web-development",
  },
  {
    title: "Mobile Application Development",
    description:
      "Building intuitive and responsive mobile applications tailored to your business needs, ensuring seamless user experiences across all devices.",
    image: "/MobileApplication.JPG",
    link: "/services/mobile-application-development",
  },
  {
    title: "Digital Marketing",
    description:
      "Drive organic growth & engagement! Our SEO & SMO services improve search ranking, social media presence & brand awareness. Get a free quote today!",
    image: "/ApexAiAssist.JPG",
    link: "/services/digital-marketing",
  },
  {
    title: "Catalyst Cloud Service",
    description:
      "Catalyst Cloud Service offers secure, scalable, and high-performance cloud solutions for businesses of all sizes.",
    image: "/Cloud Service.JPG",
    link: "/services/catalyst-cloud-service",
  },
  {
    title: "Catalyst Digital Innovation",
    description:
      "We offer a comprehensive suite of digital marketing services, including search engine optimization (SEO), social media marketing, pay-per-click (PPC) advertising, and more.",
    image: "/CatalystDigitalInnovation.JPG",
    link: "/services/catalyst-digital-innovation",
  },
  {
    title: "Apex AI Assist for Smart Automation",
    description:
      "We offer a comprehensive suite of digital marketing services, including search engine optimization (SEO), social media marketing, pay-per-click (PPC) advertising, and more.",
    image: "/ApexAiAssist.JPG",
    link: "/services/catalyst-digital-innovation",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-br from-[#00204a] via-[#003566] to-[#001d3d] text-white font-poppins">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Services.mp4" type="video/mp4" />
        </video>
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
                    {/* <a
                      href={service.link}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition"
                    >
                      Learn More
                    </a> */}
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
