export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const revealLine = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const cardHover = {
  rest: { y: 0 },
  hover: { y: -4 },
};

export const defaultTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
