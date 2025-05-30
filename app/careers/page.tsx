"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import CareerVideo from "../components/carrervideo";

export default function CareersPage() {
  return (
    <div className="relative w-full bg-gradient-to-br from-[#00204a] via-[#003566] to-[#001d3d] text-white font-poppins">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <CareerVideo />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-8">
          <h1 className="text-5xl font-bold mb-4 text-blue-600">Careers</h1>
        </div>
      </div>

      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Where IT Meets Passion</h2>
        <p className="text-blue-200 text-lg">
          At Apex Catalyst, we believe in empowering our team to drive change
          and deliver exceptional digital solutions. Our collaborative
          environment fosters growth, creativity, and innovation.
        </p>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">
          Current Openings
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Frontend Developer",
              location: "Melbourne, Australia",
              description:
                "Seeking a skilled React developer to build intuitive user interfaces.",
            },
            {
              title: "Backend Developer",
              location: "Battaramulla, Sri Lanka",
              description:
                "Looking for an experienced Node.js developer to manage server-side logic.",
            },
            {
              title: "UI/UX Designer",
              location: "Remote",
              description:
                "Creative designer needed to craft engaging user experiences.",
            },
            {
              title: "Digital Marketing Specialist",
              location: "Melbourne, Australia",
              description:
                "Expert in SEO and SEM strategies to enhance our online presence.",
            },
          ].map((job, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }}>
              <Card className="bg-[#003566] text-white">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{job.title}</h4>
                  <p className="text-blue-200 text-sm mb-2">{job.location}</p>
                  <p className="text-blue-100 text-sm mb-4">
                    {job.description}
                  </p>
                  <a
                    href="/job-apply"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition"
                  >
                    Apply Now
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-20 px-6">
        <h3 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h3>
        <p className="text-blue-200 mb-6">
          If you&apos;re passionate about technology and innovation, we&apos;d
          love to hear from you.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
        >
          Join Our Team
        </a>
      </section>
    </div>
  );
}
