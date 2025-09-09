import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Animatedsecondvector6 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <svg 
      ref={ref}
      viewBox="0 0 2349 360" 
      width="100%" 
      height="100%" 
      fill="none"
      style={{ display: 'block' }}
    >
      <motion.path
        id="Vector 6"
        d="M0 69.5L578.5 69.5C595.069 69.5 608.5 82.9315 608.5 99.5L608.5 329.5C608.5 346.069 621.931 359.5 638.5 359.5L1976.5 359.5C1993.07 359.5 2006.5 346.069 2006.5 329.5L2006.5 30.5C2006.5 13.9315 2019.93 0.5 2036.5 0.5L2349 0.5"
        stroke="rgb(255,255,255)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default Animatedsecondvector6;