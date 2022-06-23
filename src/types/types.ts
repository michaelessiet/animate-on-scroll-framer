export type animationComponentProps = {
  children: React.ReactNode;
  duration: number | null;
  delay: number | null;
};

export interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation: animationType;
  duration?: number | null;
  delay?: number | null;
};

export type animationType =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "slideInRight"
  | "slideInLeft"
  | "slideInUp"
  | "scaleIn"
  | "flipIn"
  | "scaleInX"
  | "scaleInY";

export type animaitonsListType = {
  fadeIn: JSX.Element;
  fadeInUp: JSX.Element;
  fadeInDown: JSX.Element;
  fadeInLeft: JSX.Element;
  fadeInRight: JSX.Element;
  slideInRight: JSX.Element;
  slideInLeft: JSX.Element;
  slideInUp: JSX.Element;
  scaleIn: JSX.Element;
  flipIn: JSX.Element;
  scaleInX: JSX.Element;
  scaleInY: JSX.Element;
};
