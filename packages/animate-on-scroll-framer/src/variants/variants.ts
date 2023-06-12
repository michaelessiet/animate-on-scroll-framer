import { Target, Variants } from "framer-motion";

export const variants = {
  fadeIn: <Variants>{
    initial: <Target>{
      opacity: 0,
    },
    animate: <Target>{
      opacity: 1,
    },
  },

  fadeInUp: <Variants>{
    initial: <Target>{
      opacity: 0,
      y: 100,
    },
    animate: <Target>{
      opacity: 1,
      y: 0,
    },
  },

  fadeInDown: <Variants>{
    initial: <Target>{
      opacity: 0,
      y: -100,
    },
    animate: <Target>{
      opacity: 1,
      y: 0,
    },
  },

  fadeInLeft: <Variants>{
    initial: <Target>{
      opacity: 0,
      x: -100,
    },
    animate: <Target>{
      opacity: 1,
      x: 0,
    },
  },

  fadeInRight: <Variants>{
    initial: <Target>{
      opacity: 0,
      x: 100,
    },
    animate: <Target>{
      opacity: 1,
      x: 0,
    },
  },

  slideInRight: <Variants>{
    initial: <Target>{
      x: "50vw",
    },
    animate: <Target>{
      x: 0,
    },
  },

  slideInLeft: <Variants>{
    initial: <Target>{
      x: "-50vw",
    },
    animate: <Target>{
      x: 0,
    },
  },

  slideInUp: <Variants>{
    initial: <Target>{
      y: "50vh",
    },
    animate: <Target>{
      y: 0,
    },
  },

  scaleIn: <Variants>{
    initial: <Target>{
      scale: 0,
    },
    animate: <Target>{
      scale: 1,
    },
  },

  flipIn: <Variants>{
    initial: <Target>{
      opacity: 0,
      rotateX: -60,
      transformStyle: "preserve-3d",
      y: "100%",
    },
    animate: <Target>{
      opacity: 1,
      rotateX: 0,
      y: "0%",
    },
  },

  scaleInX: <Variants>{
    initial: <Target>{
      scaleX: 0,
    },
    animate: <Target>{
      scaleX: 1,
    },
  },

  scaleInY: <Variants>{
    initial: <Target>{
      scaleY: 0,
    },
    animate: <Target>{
      scaleY: 1,
    },
  },
};
