import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { variants } from "../variants/variants";
import { animationComponentProps } from "../types/types";

const SlideInRight = ({
  children,
  duration,
  delay,
  spring,
  className
}: animationComponentProps) => {
  const animate = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });
  const defaultdelay = delay === null ? 0.5 : delay;
  const defaultduration = duration === null ? 0.4 : duration;
  const defaultAnimaitionType = spring === true ? "spring" : "inertia";

  const startanimating = async () => {
    if (inView) {
      await animate.start("animate");
    }
  };

  useEffect(() => {
    startanimating();
  }, [inView]);

  return (
    <motion.div style={{overflowX:'clip', width:'100%'}} ref={ref}>
      <motion.div
        initial={"initial"}
        transition={{
          delay: defaultdelay,
          duration: defaultduration,
          type: defaultAnimaitionType,
        }}
        animate={animate}
        variants={variants.slideInRight}
        className={className}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default SlideInRight;
