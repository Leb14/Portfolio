export const NavBarAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { opacity:0 },
  show: {
    opacity: 1,
    transition: { duration: 2 },
  },
};

export const item1 = {
  hidden: {opacity:0, y: "100%"},
  show: {
    opacity: 1,
    y:0,
    transition: { duration: 1.75 },
  },
};

export const about_img_1 = {
  hidden: {opacity:0, y: "100%", rotate:0},
  show: {
    opacity: 1,
    y:0,
    rotate: -8,
    transition: { duration: 1.75 },
  },
};

export const about_img_2 = {
  hidden: {opacity:0, y: "100%", rotate:0},
  show: {
    opacity: 1,
    y:0,
    rotate: 6,
    transition: { duration: 1.75 },
  },
};

export const AboutAnimation = {
  hidden: { opacity: 0},
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
      duration: 1.5
    },
  },
};

export const IconAnimation = {
  hidden: { opacity: 0, y: "100%"},
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
      duration: 2
    },
  },
};