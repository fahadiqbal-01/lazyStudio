"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with a focused call to understand your goals, audience, and vision.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes first, then visual designs. We iterate fast until every pixel feels right.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Clean code, mobile-first, scalable. We use modern stacks to deliver top performance.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We handle go-live, squash bugs, and provide ongoing support post-launch.",
  },
];

export default function HowWeWork() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white px-6 md:px-16 py-28 overflow-hidden"
    >
      {/* Background Images */}
      <img
        src="/images/abstract-top-right.png"
        alt=""
        className="absolute top-0 right-0 w-1/3 opacity-20 pointer-events-none select-none"
      />
      <img
        src="/images/abstract-bottom-left.png"
        alt=""
        className="absolute bottom-0 left-0 w-1/4 opacity-20 pointer-events-none select-none"
      />

      {/* Header */}
      <div className={`text-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="font-exconReg text-5xl md:text-6xl uppercase leading-tight tracking-tight text-black">
          How We Work
        </h2>
        <p className="mt-4 max-w-lg text-gray-500 font-satoshiRegular text-base mx-auto">
          From first call to final launch, here’s how we collaborate with clients to deliver exceptional results.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`relative rounded-2xl p-8 bg-white border border-gray-200 shadow-lg transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: visible ? `${i * 0.1}s` : "0s" }}
          >
            {/* Step Number Circle */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white font-bold text-lg mb-4">
              {step.number}
            </div>
            {/* Step Title */}
            <h3 className="text-xl font-semibold text-black mb-2">{step.title}</h3>
            {/* Step Description */}
            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}