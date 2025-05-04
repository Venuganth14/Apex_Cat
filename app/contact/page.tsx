"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ContactPage() {
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
          <source src="/Contact.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 flex items-center justify-start px-8">
          <div className="flex flex-col max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-blue-200 text-lg">
              We're here to help. Reach out to us for any inquiries or support.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="bg-[#003566] text-white">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Head Office</h4>
                <p className="text-blue-200 text-sm mb-2">
                  376/A Kaduwela Rd, Koswatta, Battaramulla, Western 10120, LK
                </p>
                <p className="text-blue-100 text-sm mb-2">
                  Phone: +94 711 737 175
                </p>
                <p className="text-blue-100 text-sm">
                  Email: support@apexcatalyst.com.au
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="bg-[#003566] text-white">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Australia Office</h4>
                <p className="text-blue-200 text-sm mb-2">
                  Little Collins St, Melbourne, Victoria 3000, AU
                </p>
                <p className="text-blue-100 text-sm mb-2">
                  Phone: +61 401 561 481
                </p>
                <p className="text-blue-100 text-sm">
                  Email: support@apexcatalyst.com.au
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-blue-200 text-lg mb-8">
          Have questions or need assistance? Fill out the form below, and we'll
          get back to you as soon as possible.
        </p>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-[#001d3d] text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-[#001d3d] text-white"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded bg-[#001d3d] text-white"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded bg-[#001d3d] text-white h-40"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
