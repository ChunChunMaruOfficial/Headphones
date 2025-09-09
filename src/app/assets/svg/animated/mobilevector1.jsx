import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Animatedmobilevector1 = () => {
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
        id="Vector 24"
        d="M295 0L10 0C4.47715 0 0 4.47715 0 10L0 84C0 89.5229 4.47715 94 10 94L147.5 94L295 94"
        stroke="rgb(255,255,255)"
        strokeOpacity="0.5"
        strokeWidth="1"
        transform="matrix(-1,0,0,1,295,0.5)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default Animatedmobilevector1;