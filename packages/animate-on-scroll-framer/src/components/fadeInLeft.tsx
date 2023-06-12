import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { animationComponentProps } from "../types/types";
import { variants } from "../variants/variants";

const FadeInLeft = ({
  children,
  duration,
  delay,
  spring,
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
        variants={variants.fadeInLeft}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default FadeInLeft;
