import { motion } from "framer-motion"
import FadeIn from "./components/fadeIn"
import FadeInDown from "./components/fadeInDown"
import FadeInLeft from "./components/fadeInLeft"
import FadeInRight from "./components/fadeInRight"
import FadeInUp from "./components/fadeInUp"
import FlipIn from "./components/flipIn"
import ScaleIn from "./components/scaleIn"
import ScaleInX from "./components/scaleInX"
import ScaleInY from "./components/scaleInY"
import SlideInLeft from "./components/slideInLeft"
import SlideInRight from "./components/slideInRight"
import SlideInUp from "./components/slideInUp"
import { AnimateOnScrollProps, animaitonsListType } from "./types/types"

const AnimateOnScroll = ({
	children,
	animation,
	duration = null,
	delay = null,
	spring = true,
	animateEachChild = false,
	className,
}: AnimateOnScrollProps) => {
	const animations: animaitonsListType = {
		fadeIn: (
			<FadeIn
				className={className}
				duration={duration}
				delay={delay}
				spring={spring}
				animateEachChild={animateEachChild}
			>
				{children}
			</FadeIn>
		),
		fadeInUp: (
			<FadeInUp
				className={className}
				duration={duration}
				delay={delay}
				spring={spring}
				animateEachChild={animateEachChild}
			>
				{children}
			</FadeInUp>
		),
		fadeInDown: (
			<FadeInDown
				className={className}
				duration={duration}
				delay={delay}
				spring={spring}
				animateEachChild={animateEachChild}
			>
				{children}
			</FadeInDown>
		),
		fadeInLeft: (
			<FadeInLeft
				className={className}
				duration={duration}
				delay={delay}
				spring={spring}
				animateEachChild={animateEachChild}
			>
				{children}
			</FadeInLeft>
		),
		fadeInRight: (
			<FadeInRight
				className={className}
				duration={duration}
				delay={delay}
				spring={spring}
				animateEachChild={animateEachChild}
			>
				{children}
			</FadeInRight>
		),
		slideInRight: (
			<SlideInRight
				className={className}
				duration={duration}
				delay={delay}
				spring={spring}
				animateEachChild={animateEachChild}
			>
				{children}
			</SlideInRight>
		),
		slideInLeft: (
			<SlideInLeft
				className={className}
				duration={duration}
				delay={delay}
				spring={spring}
				animateEachChild={animateEachChild}
			>
				{children}
			</SlideInLeft>
		),
		slideInUp: (
			<SlideInUp
				className={className}
				duration={duration}
				delay={delay}
				spring={spring}
				animateEachChild={animateEachChild}
			>
				{children}
			</SlideInUp>
		),
		scaleIn: (
			<ScaleIn
				className={className}
				duration={duration}
				delay={delay}
				spring={spring}
				animateEachChild={animateEachChild}
			>
				{children}
			</ScaleIn>
		),
		flipIn: (
			<FlipIn
				className={className}
				duration={duration}
				delay={delay}
				spring={spring}
				animateEachChild={animateEachChild}
			>
				{children}
			</FlipIn>
		),
		scaleInX: (
			<ScaleInX
				className={className}
				duration={duration}
				delay={delay}
				spring={spring}
				animateEachChild={animateEachChild}
			>
				{children}
			</ScaleInX>
		),
		scaleInY: (
			<ScaleInY
				className={className}
				duration={duration}
				delay={delay}
				spring={spring}
				animateEachChild={animateEachChild}
			>
				{children}
			</ScaleInY>
		),
	}

	const AnimationHandler = () => {
		switch (animation) {
			case animation:
				return animations[animation]
			default:
				return animations.fadeIn
		}
	}

	return (
		<motion.div style={{ width: "100%" }}>
			<AnimationHandler />
		</motion.div>
	)
}

export default AnimateOnScroll
