"use client";

import {
  Code,
  LayoutDashboard,
  Palette,
  Video,
  PenTool,
  Smartphone,
} from "lucide-react";
import Container from "./container";
import LetsTalkButton from "./letsTalkButton";

const services = [
  {
    title: "Web Services",
    icon: Code,
    services: [
      "Landing Pages",
      "E-Commerce Websites",
      "Marketplace Platforms",
      "Portfolio Website",
      "SaaS Platforms",
      "Dashboards",
      "Custom Web Apps",
      "API Integrations",
    ],
  },
  {
    title: "Development Services",
    icon: LayoutDashboard,
    services: [
      "React & Next.js Development",
      "MVP Development",
      "Saas",
      "Firebase Integration & Development",
      "Webflow Development",
      "AI Chatbot Integration",
      "Backend Development",
      "Custom Web Solutions",
      "Web App",
    ],
  },
  {
    title: "Branding & Design",
    icon: Palette,
    services: [
      "Logo Design",
      "Brand Identity",
      "Brand Strategy",
      "Brandbook & Style",
      "Investor Pitch Deck",
      "Product & Packeging Design ",
      "Social Media Assets",
      "Market Research & Positioning",
    ],
  },

  {
    title: "Video Editing",
    icon: Video,
    services: [
      "Cinematic Video Editing",
      "Short Form Video Editing",
      "YouTube Video Editing",
      "Social Media Video Editing",
      "Promotional Video Editing",
      "Product Video Editing",
      "Color Grading",
    ],
  },
];

export default function AllServices() {
  return (
    <section className="py-28 bg- -z-50 text-white ">
      <Container className=" py-20 px-15 bg-black max-w-300! rounded-4xl select-none ">
        {/* Heading */}
        <div className="text-center mb-40">
          <h2 id="clipSec" className="text-5xl font-excon font-bold mb-6">
            All Services
          </h2>
          <p className="text-gray-300 font-satoshiRegular text-lg">
            Everything your product needs — design, development and branding.
          </p>
        </div>

        <div className=" flex flex-col gap-30  ">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={index} className=" relative flex flex-row items-start">
                {/* Icon */}
                <div className="mb-6 relative z-50 ">
                  <Icon
                    size={200}
                    className="absolute -top-15 -right-15 w-full h-full text-white opacity-30"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "top",
                      WebkitMaskPosition: "top",
                    }}
                  />
                  <h3 className="text-[36px] text-white font-excon mb-6 z-50 ">
                    <span className=" text-sec ">
                      {service.title.split(" ")[0]} <br />
                    </span>

                    {service.title.split(" ").slice(1).join(" ")}
                  </h3>
                </div>

                {/* List */}
                <ul className=" text-white ml-auto w-150  ">
                  {service.services.map((item, i) => (
                    <li
                      key={i}
                      className=" font-satoshiRegular text-[16px] px-3 py-1 border-2 border-gray-300 rounded-full inline-block ml-auto mr-2 mb-2 "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-24">
          <p className="text-gray-300 font-satoshiRegular mb-6 text-lg">
            Get everything your business needs under one roof.
          </p>

          <LetsTalkButton
            id="letsTalkService"
            text="contact us"
            textSec="We're ready"
            className=" w-70! mx-auto "
          />
        </div>
      </Container>
    </section>
  );
}
