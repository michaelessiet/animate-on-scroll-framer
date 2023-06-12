import { motion } from "framer-motion";
import FadeIn from "./components/fadeIn";
import FadeInDown from "./components/fadeInDown";
import FadeInLeft from "./components/fadeInLeft";
import FadeInRight from "./components/fadeInRight";
import FadeInUp from "./components/fadeInUp";
import FlipIn from "./components/flipIn";
import ScaleIn from "./components/scaleIn";
import ScaleInX from "./components/scaleInX";
import ScaleInY from "./components/scaleInY";
import SlideInLeft from "./components/slideInLeft";
import SlideInRight from "./components/slideInRight";
import SlideInUp from "./components/slideInUp";
import { AnimateOnScrollProps, animaitonsListType } from "./types/types";

const AnimateOnScroll = ({
  children,
  animation,
  duration = null,
  delay = null,
  spring = true,
  animateEachChild=false,
}: AnimateOnScrollProps) => {
  const animations: animaitonsListType = {
    fadeIn: (
      <FadeIn duration={duration} delay={delay} spring={spring} animateEachChild={animateEachChild}>
        {children}
      </FadeIn>
    ),
    fadeInUp: (
      <FadeInUp duration={duration} delay={delay} spring={spring} animateEachChild={animateEachChild}>
        {children}
      </FadeInUp>
    ),
    fadeInDown: (
      <FadeInDown duration={duration} delay={delay} spring={spring} animateEachChild={animateEachChild}>
        {children}
      </FadeInDown>
    ),
    fadeInLeft: (
      <FadeInLeft duration={duration} delay={delay} spring={spring} animateEachChild={animateEachChild}>
        {children}
      </FadeInLeft>
    ),
    fadeInRight: (
      <FadeInRight duration={duration} delay={delay} spring={spring} animateEachChild={animateEachChild}>
        {children}
      </FadeInRight>
    ),
    slideInRight: (
      <SlideInRight duration={duration} delay={delay} spring={spring} animateEachChild={animateEachChild}>
        {children}
      </SlideInRight>
    ),
    slideInLeft: (
      <SlideInLeft duration={duration} delay={delay} spring={spring} animateEachChild={animateEachChild}>
        {children}
      </SlideInLeft>
    ),
    slideInUp: (
      <SlideInUp duration={duration} delay={delay} spring={spring} animateEachChild={animateEachChild}>
        {children}
      </SlideInUp>
    ),
    scaleIn: (
      <ScaleIn duration={duration} delay={delay} spring={spring} animateEachChild={animateEachChild}>
        {children}
      </ScaleIn>
    ),
    flipIn: (
      <FlipIn duration={duration} delay={delay} spring={spring} animateEachChild={animateEachChild}>
        {children}
      </FlipIn>
    ),
    scaleInX: (
      <ScaleInX duration={duration} delay={delay} spring={spring} animateEachChild={animateEachChild}>
        {children}
      </ScaleInX>
    ),
    scaleInY: (
      <ScaleInY duration={duration} delay={delay} spring={spring} animateEachChild={animateEachChild}>
        {children}
      </ScaleInY>
    ),
  };

  const animationHandler = () => {
    switch (animation) {
      case animation:
        return animations[animation];
      default:
        return animations.fadeIn
    }
  };

  return (
    <motion.div style={{ width: "100%" }}>{animationHandler()}</motion.div>
  );
};

export default AnimateOnScroll;
