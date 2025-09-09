import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Animatedmobileline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 655 321.5"
      width="100%" // займет всю ширину контейнера
      height="auto" // высота автоматически подстроится
      fill="none"
      style={{ display: 'block' }}
    >
      <motion.path
        id="Vector 19"
        d="M0 0.5L53.5 0.5C70.0685 0.5 83.5 13.9315 83.5 30.5L83.5 291C83.5 307.569 96.9315 321 113.5 321L525.5 321C542.069 321 555.5 307.569 555.5 291L555.5 30.5C555.5 13.9315 568.931 0.5 585.5 0.5L655 0.5"
        stroke="rgb(255,255,255)"
        strokeOpacity="0.5"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default Animatedmobileline;