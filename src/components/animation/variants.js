/* eslint-disable no-unused-vars */
export const fadeInUp = {
    initial: {
      opacity: 0,
      y: 20,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    viewport: { once: true, margin: "-100px" },
  };

   export const fadeIn = {
    initial: {
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
    viewport: { once: true },
  };

  export const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    viewport: { once: true, margin: "-100px" },
  };

  export const scaleIn = {
    initial: {
      scale: 0.9,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    viewport: { once: true, margin: "-100px" },
  };

