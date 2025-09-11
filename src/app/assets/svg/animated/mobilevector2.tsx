import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Animatedmobilevector2 = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  return (
    <svg
      ref={ref}
      viewBox="0 0 634.5 481"
      xmlns="http://www.w3.org/2000/svg"
      width="634.500000"
      height="481.000000"
      fill="none"
    >
      <motion.path
        id="Vector 26"
        d="M0 0.5L63.5 0.5C69.0229 0.5 73.5 4.97715 73.5 10.5L73.5 182C73.5 187.523 77.9771 192 83.5 192L112 192C117.523 192 122 196.477 122 202L122 470.5C122 476.023 126.477 480.5 132 480.5L634.5 480.5"
        stroke="rgb(255,255,255)"
        strokeOpacity="0.5"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{
          duration: 3,
          ease: "easeInOut"
        }}
      />
    </svg>
  );
};

export default Animatedmobilevector2;