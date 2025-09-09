import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Animatedheadvector1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <svg 
      ref={ref}
      viewBox="0 0 911 5" 
      width="100%" 
      height="5" 
      fill="none"
      style={{ display: 'block' }}
    >
      <motion.path
        id="Vector 1"
        d="M2.5 2L908.5 2L908.5 3L2.5 3L2.5 2ZM5 2.5C5 4.16667 4.16667 5 2.5 5C0.833333 5 0 4.16667 0 2.5C0 0.833333 0.833333 0 2.5 0C4.16667 0 5 0.833333 5 2.5ZM911 2.5C911 4.16667 910.167 5 908.5 5C906.833 5 906 4.16667 906 2.5C906 0.833333 906.833 0 908.5 0C910.167 0 911 0.833333 911 2.5Z"
        fill="rgb(255,255,255)"
        fillRule="nonzero"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default Animatedheadvector1;