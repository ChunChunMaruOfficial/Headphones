import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Animatedheadvector3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <svg 
      ref={ref}
      viewBox="0 0 2311 1052" 
      fill="none"
    >
      <motion.path
        d="M0 0.5L1071 0.5C1087.57 0.5 1101 13.9315 1101 30.5L1101 408.192C1101 424.76 1087.57 438.192 1071 438.192L995.921 438.192C979.353 438.192 965.921 451.623 965.921 468.192L965.921 697.824C965.921 714.393 952.49 727.824 935.921 727.824L868.883 727.824C852.314 727.824 838.883 741.256 838.883 757.824L838.883 1021.5C838.883 1038.07 852.314 1051.5 868.883 1051.5L2311 1051.5"
        stroke="rgb(255,255,255)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default Animatedheadvector3;