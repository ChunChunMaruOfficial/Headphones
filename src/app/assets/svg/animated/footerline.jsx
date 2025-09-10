import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Animatedfooterline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <svg 
      ref={ref}
      viewBox="0 0 2121 5" 
      width="100%" 
      height="5" 
      fill="none"
      style={{ display: 'block' }}
    >
      <motion.path
        id="Vector 13"
        d="M2.5 2L2118.5 2L2118.5 3L2.5 3L2.5 2ZM5 2.5C5 4.16667 4.16667 5 2.5 5C0.833333 5 0 4.16667 0 2.5C0 0.833333 0.833333 0 2.5 0C4.16667 0 5 0.833333 5 2.5ZM2121 2.5C2121 4.16667 2120.17 5 2118.5 5C2116.83 5 2116 4.16667 2116 2.5C2116 0.833333 2116.83 0 2118.5 0C2120.17 0 2121 0.833333 2121 2.5Z"
        fill="rgb(255,255,255)"
        fillRule="nonzero"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default Animatedfooterline;