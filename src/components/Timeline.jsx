"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">My Work Experience</h2>
      <div ref={ref} className="relative pb-12">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-start pt-6 md:flex-row md:pt-16 md:gap-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative z-10 flex flex-shrink-0 flex-col items-start w-full md:w-72 lg:w-80">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] top-0 bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              <div className="flex flex-col gap-3 pl-8 md:pl-12 text-left">
                <h3 className="text-lg font-bold text-neutral-300 md:text-2xl">{item.date}</h3>
                <h3 className="text-xl font-bold text-neutral-400 md:text-3xl">{item.title}</h3>
                <h3 className="text-base font-semibold leading-snug text-neutral-500 md:text-xl md:leading-snug">{item.job}</h3>
              </div>
            </div>

            <div className="relative min-w-0 flex-1 pl-8 pr-4 md:pl-2">
              {item.contents.map((content, idx) => (
                <p className="mb-3 font-normal text-neutral-400" key={idx}>
                  {content}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
