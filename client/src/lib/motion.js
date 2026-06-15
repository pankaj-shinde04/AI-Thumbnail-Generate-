export const spring = { type: 'spring', stiffness: 80, damping: 20 };

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...spring, delay },
  }),
};

export const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...spring, delay },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay },
  }),
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { ...spring, delay },
  }),
};

export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { ...spring, delay },
  }),
};

export const scaleUp = {
  hidden: { opacity: 0, y: 80, scale: 0.96 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...spring, delay },
  }),
};

export const viewport = { once: true, margin: '-80px' };
