/// <reference types="react" />
export declare type animationComponentProps = {
    children: React.ReactNode;
    spring: boolean;
    duration: number | null;
    delay: number | null;
    /** This is only applicable when using the flipIn animation */
    animateEachChild: boolean;
    className?: string;
};
export interface AnimateOnScrollProps {
    children: React.ReactNode;
    animation: animationType;
    spring?: boolean;
    animateEachChild?: boolean;
    duration?: number | null;
    delay?: number | null;
    className?: string;
}
export declare type animationType = "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "slideInRight" | "slideInLeft" | "slideInUp" | "scaleIn" | "flipIn" | "scaleInX" | "scaleInY";
export declare type animaitonsListType = {
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
//# sourceMappingURL=types.d.ts.map