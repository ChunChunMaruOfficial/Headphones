import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Animatedheadvector2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <svg 
      ref={ref}
      viewBox="0 0 2315.5 973.5" 
      fill="none"
      width="100%"
      height="100%"
    >
      <motion.path
        d="M0 0.5L1044.5 0.5C1061.07 0.5 1074.5 13.9315 1074.5 30.5L1074.5 375.5C1074.5 392.069 1061.07 405.5 1044.5 405.5L978.5 405.5C961.931 405.5 948.5 418.931 948.5 435.5L948.5 643.5C948.5 660.069 935.069 673.5 918.5 673.5L860 673.5C843.431 673.5 830 686.931 830 703.5L830 943C830 959.569 843.431 973 860 973L2315.5 973"
        stroke="rgb(255,255,255)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default Animatedheadvector2;