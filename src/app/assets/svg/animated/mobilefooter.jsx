import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Animatedmobilefooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <svg 
      ref={ref}
      viewBox="0 0 498 5" 
      width="100%" 
      height="5" 
      fill="none"
      style={{ display: 'block' }}
    >
      <motion.path
        id="Vector 13"
        d="M2.5 2L495.5 2L495.5 3L2.5 3L2.5 2ZM5 2.5C5 4.16667 4.16667 5 2.5 5C0.833333 5 0 4.16667 0 2.5C0 0.833333 0.833333 0 2.5 0C4.16667 0 5 0.833333 5 2.5ZM498 2.5C498 4.16667 497.167 5 495.5 5C493.833 5 493 4.16667 493 2.5C493 0.833333 493.833 0 495.5 0C497.167 0 498 0.833333 498 2.5Z"
        fill="rgb(255,255,255)"
        fillRule="nonzero"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default Animatedmobilefooter;