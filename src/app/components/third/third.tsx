"use client";

import { motion } from 'framer-motion';
import Image from "next/image";
import styles from './style.module.scss'

import Animatedthirdvector10 from '../../assets/svg/animated/thirdvector10.jsx'
import Animatedthirdvector9 from '../../assets/svg/animated/thirdvector9.jsx'

import Animatedmobilevector0 from '../../assets/svg/animated/mobilevector0.jsx'
import Animatedmobilevector1 from '../../assets/svg/animated/mobilevector1.jsx'

import headphones from '../../assets/img/headphones.png'
import arrow from '../../assets/svg/arrow.svg'

const TextAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: (custom: number) => ({
        opacity: 1,
        transition: { delay: (custom * 0.4) + .4 }
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
        transition: { delay: (custom * 0.4) + .2 }
    }),
}

export default function Third({ismobile}:{ismobile: boolean}) {
    return (
        <motion.div id='show' viewport={{ amount: 0.2, once: true }} initial="hidden" whileInView="visible" className={styles.parent}>
            <span className={styles.top}>
                <motion.h1 custom={1} variants={HightAnimation}>SOUND THAT YOU CAN SEE</motion.h1>
                <motion.h2 custom={2} variants={HightAnimation}>Rotate to explore every detail</motion.h2>
            </span>
            <div className={styles.vectors}>
                <motion.p custom={1} variants={TextAnimation}>This shape is not a design whim, but the result of hundreds of hours of acoustic modeling to create the perfect soundstage around you.</motion.p>
                {ismobile ? (<>
                    <span>
                        <Animatedmobilevector0/>
                        <Animatedmobilevector0 />
                    </span>
                    <span>
                        <Animatedmobilevector1 />
                        <Animatedmobilevector1 />
                    </span>
                </>) : (<>
                    <Animatedthirdvector10 />
                    <Animatedthirdvector9 />
                </>)}
                <motion.p custom={2} variants={TextAnimation}>This shape is not a design whim, but the result of hundreds of hours of acoustic modeling to create the perfect soundstage around you.</motion.p>

            </div>

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
                ><Image src={headphones} width={ismobile ? 550 : 1119} height={ismobile ? 550 : 1119} alt="" /></motion.span>
                <Image className={styles.arrow} style={{ transform: 'scaleX(-1)' }} src={arrow} alt="" />
                <motion.button custom={1} variants={HightAnimation}>Feel the sound</motion.button>
            </div>
        </motion.div>
    );
}
