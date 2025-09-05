"use client";

import { motion } from 'framer-motion';
import Image from "next/image";
import styles from './style.module.scss'
import thirdvector10 from '../../assets/svg/thirdvector10.svg'
import thirdvector9 from '../../assets/svg/thirdvector9.svg'
import headphones from '../../assets/img/headphones.png'
import arrow from '../../assets/svg/arrow.svg'

const TextAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: (custom: number) => ({
        opacity: 1,
        transition: {delay: (custom * 0.4) + .4}
    }),
}

const HightAnimation = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {delay: (custom * 0.4) + .2}
    }),
}

export default function Third() {
    return (
        <motion.div id='show' viewport={{amount: 0.2, once: true}} initial="hidden" whileInView="visible" className={styles.parent}>
            <span className={styles.top}>
                <motion.h1 custom={1} variants={HightAnimation}>SOUND THAT YOU CAN SEE</motion.h1>
                <motion.h2 custom={2} variants={HightAnimation}>Rotate to explore every detail</motion.h2>
            </span>
            <div className={styles.vectors}>
                <Image src={thirdvector10} alt="" />
                <Image src={thirdvector9} alt="" />
            </div>
            <motion.p custom={1} variants={TextAnimation}>This shape is not a design whim, but the result of hundreds of hours of acoustic modeling to create the perfect soundstage around you.</motion.p>

            <div className={styles.mainpng}>
                <Image className={styles.arrow} src={arrow} alt="" />
                <motion.span
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, -10, 0],
                    }}
                    transition={{
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                        rotate: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                ><Image src={headphones} width={1119} height={1119} alt="" /></motion.span>
                <Image className={styles.arrow} style={{ transform: 'scaleX(-1)' }} src={arrow} alt="" />
                <motion.button custom={1} variants={HightAnimation}>Feel the sound</motion.button>
            </div>
            <motion.p custom={2} variants={TextAnimation}>This shape is not a design whim, but the result of hundreds of hours of acoustic modeling to create the perfect soundstage around you.</motion.p>
        </motion.div>
    );
}
