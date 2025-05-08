"use client";

import Link from "next/link";
import AnimatedBubbles from "./AnimatedBubbles";
import AbVideo from "./abvideo";

const aboutContent = [
  {
    title: "Who We Are",
    desc: "We are a team of passionate innovators delivering cutting-edge digital solutions for businesses worldwide.",
    video: "/About.mp4",
  },
];

const AboutUsSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 lg:px-24 overflow-hidden text-white bg-gradient-to-br from-[#00204a] via-[#003566] to-[#001d3d] font-poppins"
    >
      {/* Overlay Bubbles (Left & Right) */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <AnimatedBubbles count={20} direction="both" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {aboutContent.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-10 lg:h-[500px]" // fixed height for better split
          >
            {/* Left Text Section */}
            <div className="lg:w-1/2 flex flex-col justify-center h-full">
              <span className="uppercase text-blue-400 tracking-widest text-sm mb-2">
                About Our Company
              </span>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Work Together <br /> for Your Business
              </h3>
              <p className="text-blue-300 text-lg mb-6">
                At Apex, we specialize in providing IT consulting and software
                development services tailored to the unique needs of non-IT
                organizations. We understand that technology can be complex, and
                our team of experts is here to bridge the gap, helping you
                leverage its power to achieve your business goals.
              </p>
              <ul className="list-disc list-inside text-blue-400 space-y-2 mb-8 text-lg">
                <li>Solution We Provide For You</li>
                <li>Provide Finest Services</li>
                <li>Providing Information To a Client</li>
                <li>Strategic Planning</li>
              </ul>
              <Link href="/contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition w-fit">
                  CONTACT US
                </button>
              </Link>
            </div>

            {/* Right Full Video Section */}
            {/* Right Full Video Section */}
            <div className="lg:w-1/2 h-full rounded-lg overflow-hidden relative">
              <AbVideo />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;
