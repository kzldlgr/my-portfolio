import { useEffect, useRef } from "react";

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
      },
    },
  };
};

export const qualifyData = (direction, idx) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1,
        delay: idx * 0.3,
      },
    },
  };
};

export const divider = () => {
  return {
    hidden: {
      clipPath: "inset(100% -100% -100% -100% round 10px)",
      transition: {
        type: "tween",
        duration: 1
      }
    },
    show: {
      opacity: 1,
      clipPath: "inset(5% 0% 0% 0% round 10px)",
      transition: {
        type: "tween",
        duration: 2.1,
        delay: 0,
      }
    },
  };
};


export const rocket = (direction, delay) => {
  return {
    hidden: {
      translateY: direction === 'up' ? 600 : 0,
      opacity: 0,
    },
    show: {
      translateY: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const transition1 = {
  duration: 1.4,
  ease: [0.6, 0.01, 0.2, 0.9],
  // ease: [0.43, 0.13, 0.23, 0.96],
};

export const useDimensions = ref => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return dimensions.current;
};

// for rocketship
// initial={{ opacity: 0, translateY: 1000 }}
// animate={{ opacity: 1, translateX: 0, translateY: 0 }}
// whileInView={'show'}
// viewport={{ once: false, amount: 0.7 }}
// transition={{ duration: 4 }}