import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { variants } from "../variants/variants";
import { animationComponentProps } from "../types/types";
import React from "react";

const FlipIn = (
  { children, duration, delay, spring, animateEachChild }: animationComponentProps,
) => {
  const animate = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });
  const defaultdelay = delay === null ? 0.5 : delay;
  const defaultduration = duration === null ? 1 : duration;
  const defaultAnimaitionType = spring === true ? "spring" : "inertia";

  const startanimating = async () => {
    if (inView) {
      await animate.start("animate");
    }
  };

  useEffect(() => {
    startanimating();
  }, [inView]);

  const animateEachChildSeperately = () => {
    return (
      children &&
      React.Children.map(children, (child) => (
        <div ref={ref} style={{ perspective: "600px", overflowX:'clip',overflowY:'visible' }}>
          <motion.div
            initial={"initial"}
            transition={{
              delay: defaultdelay,
              duration: defaultduration,
              type: defaultAnimaitionType,
            }}
            animate={animate}
            variants={variants.flipIn}
          >
            {child}
          </motion.div>
        </div>
      ))
    );
  };

  return (
    <>
      {animateEachChild && animateEachChildSeperately()}
      {!animateEachChild && (
        <div style={{ perspective: "600px", overflowX: "clip", overflowY:'visible' }} ref={ref}>
          <motion.div
            initial={"initial"}
            transition={{
              delay: defaultdelay,
              duration: defaultduration,
              type: defaultAnimaitionType,
            }}
            animate={animate}
            variants={variants.flipIn}
          >
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default FlipIn;
