import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Animatedidealsound = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <svg
            ref={ref}
            viewBox="0 0 2444 1104.97"
            fill="none"
        >
            <motion.path
                d="M0.5 0.5L185 0.5C201.569 0.5 215 13.9315 215 30.5L215 356.5C215 373.069 228.431 386.5 245 386.5L596 386.5C612.569 386.5 626 399.931 626 416.5L626 732C626 748.569 639.431 762 656 762L984.5 762C1001.07 762 1014.5 775.431 1014.5 792L1014.5 1074.47C1014.5 1091.05 1027.95 1104.49 1044.53 1104.47L2443.5 1103"
                stroke="white"
                strokeLinecap="round"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isInView ? 1 : 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
            />
        </svg>
    );
};

export default Animatedidealsound;