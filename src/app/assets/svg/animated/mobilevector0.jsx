import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Animatedmobilevector0 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <svg 
      ref={ref}
      viewBox="0 0 295.5 95" 
      width="100%" 
      height="100%" 
      fill="none"
      style={{ display: 'block' }}
    >
      <motion.path
        id="Vector 22"
        d="M295.5 0.5L10.5 0.5C4.97715 0.5 0.5 4.97715 0.5 10.5L0.5 84.5C0.5 90.0229 4.97715 94.5 10.5 94.5L148 94.5L295.5 94.5"
        stroke="rgb(255,255,255)"
        strokeOpacity="0.5"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default Animatedmobilevector0;