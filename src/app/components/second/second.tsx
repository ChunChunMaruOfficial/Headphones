"use client";

import { motion } from 'framer-motion';
import Image from "next/image";
import styles from './style.module.scss'
import secondvectorcolor from '../../assets/svg/secondvectorcolor.svg'
import secondvectorwrapper from '../../assets/svg/secondvectorwrapper.svg'
import secondvector6 from '../../assets/svg/secondvector6.svg'

const ShowAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: (custom: number) => ({
        opacity: 1,
        transition: {delay: (custom * 0.4) + .3}
    }),
}

export default function Second() {
    return (
        <div className={styles.parent}>
            <div className={styles.background}>
                <Image src={secondvectorcolor} alt="" />
                <Image src={secondvectorwrapper} alt="" />
            </div>
            <motion.div viewport={{amount: 0.2, once: true}} initial="hidden" whileInView="visible" className={styles.container}>
                {[...Array(3)].map((_, i) => (
                    <motion.div custom={i+1} variants={ShowAnimation} key={i}>
                        <h2>Adaptive Noise Cancellation</h2>
                        <p>Smart silence</p>
                        <p>Microphones analyze ambient noise 1,000 times per second. The world around you quiets down when you need to concentrate, and returns gently for safety outdoors.</p>
                    </motion.div>
                ))}
            </motion.div>
            <div className={styles.rodmap}>
                <Image src={secondvector6} alt="" />

                {[...Array(2)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
        </div>
    );
}
