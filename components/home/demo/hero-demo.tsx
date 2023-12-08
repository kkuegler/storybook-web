import React, { FC, useEffect, useRef, useState } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { Sidebar } from "./sidebar";
import { Controls } from "./controls";
import { TimeFrame } from "./timeframe";

export const HeroDemo: FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });
  const [activeStory, setActiveStory] = useState("no-selection");
  const pointerControls = useAnimationControls();
  const startTimeControls = useAnimationControls();
  const endTimeControls = useAnimationControls();

  useEffect(() => {
    const sequence = async () => {
      // Cycle through stories
      await pointerControls.start({
        opacity: [0, 1],
        x: "-730%",
        y: "-402%",
        transition: {
          delay: 1,
          duration: 1,
          opacity: { duration: 0.4 },
        },
      });
      await pointerControls.start({
        scale: [1, 0.9, 1],
        transition: {
          duration: 0.3,
          delay: 0.4,
        },
      });
      setActiveStory("last-hour");
      await pointerControls.start({
        x: "-700%",
        y: "-368%",
        transition: {
          delay: 1,
          duration: 0.4,
        },
      });
      await pointerControls.start({
        scale: [1, 0.9, 1],
        transition: {
          duration: 0.3,
          delay: 0.4,
        },
      });
      setActiveStory("all-day");
      // Update startTime control
      await pointerControls.start({
        x: "560%",
        y: "-214%",
        transition: { delay: 1, duration: 1 },
      });
      await Promise.all([
        pointerControls.start({
          scale: 0.9,
          opacity: 0,
          transition: {
            scale: {
              type: "spring",
              stiffness: 700,
              damping: 80,
              duration: 0.4,
              delay: 0.4,
            },
            opacity: { delay: 0.4, duration: 0.1 },
          },
        }),
        startTimeControls.start("visible"),
      ]);
      setActiveStory("start-time");
      // Update endTime control
      await pointerControls.start({
        opacity: 1,
        x: "580%",
        y: "-148%",
        transition: { delay: 1, duration: 1, opacity: { duration: 0.2 } },
      });
      await Promise.all([
        pointerControls.start({
          scale: 0.9,
          opacity: 0,
          transition: {
            scale: {
              type: "spring",
              stiffness: 700,
              damping: 80,
              duration: 0.4,
              delay: 0.4,
            },
            opacity: { delay: 0.4, duration: 0.1 },
          },
        }),
        endTimeControls.start("visible"),
      ]);
      setActiveStory("end-time");

      // Show docs
      await pointerControls.start({
        opacity: 1,
        x: "-720%",
        y: "-470%",
        transition: { delay: 1, duration: 1, opacity: { duration: 0.2 } },
      });
      await pointerControls.start({
        scale: [1, 0.9, 1],
        transition: {
          duration: 0.3,
          delay: 0.4,
        },
      });
      setActiveStory("overview");

      // Reset state
      await pointerControls.start({
        x: "-730%",
        y: "-436%",
        transition: {
          delay: 2,
          duration: 1,
        },
      });
      await pointerControls.start({
        scale: [1, 0.9, 1],
        transition: {
          duration: 0.3,
          delay: 0.4,
        },
      });
      setActiveStory("no-selection");
      await Promise.all([
        pointerControls.start({
          x: "0%",
          y: "0%",
          opacity: 0,
          transition: { delay: 1, duration: 1 },
        }),
        endTimeControls.set("initial"),
        startTimeControls.set("initial"),
      ]);
    };

    const stop = async () => {
      // Reset state
      setActiveStory("no-selection");
      pointerControls.set({ x: "0%", y: "0%", opacity: 0 });
      endTimeControls.set("initial");
      startTimeControls.set("initial");
      // stop animations
      pointerControls.stop();
      startTimeControls.stop();
      endTimeControls.stop();
    };

    if (inView) {
      sequence();
    } else {
      stop();
    }
  }, [pointerControls, startTimeControls, endTimeControls, inView]);

  return (
    <motion.div
      className="relative w-full h-0 pb-[69.10907577%] sm:mt-[-12.625rem] after:content-[''] after:absolute after:top-0 after:right-0 after:left-0 after:bottom-0 after:rounded-lg after:shadow-lg"
      data-chromatic="ignore"
      ref={ref}
    >
      <motion.img
        className="block h-auto absolute top-0 left-0 w-full"
        src="/home/develop/storybook-frame.svg"
        width="1201"
        height="830"
        alt=""
      />
      <Sidebar type="timeFrame" activeStory={activeStory} />
      <Controls
        startTimeControls={startTimeControls}
        endTimeControls={endTimeControls}
      />
      <TimeFrame activeStory={activeStory} />
      <motion.img
        className="block absolute w-[5.66%] h-auto top-[100%] left-[50%]"
        data-chromatic="ignore"
        animate={pointerControls}
        src="/home/develop/pointer.svg"
        alt=""
      />
    </motion.div>
  );
};
