"use client";

import { motion } from 'framer-motion';
import styles from './styles.module.scss'
import Image from 'next/image'
import headphones2 from '../../assets/img/headphones2.png'

const TextAnimation = {
    hidden: {
        opacity: 0,
        x: 75
    },
    visible: (custom: number) => ({
        opacity: 1,
        x: 0,
        transition: {delay: (custom * 0.4) + .6}
    }),
}

const HightAnimation = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {delay: .8}
    }
}

export default function Fourth() {
    return (
        <motion.div viewport={{amount: 0.2, once: true}} initial="hidden" whileInView="visible" className={styles.parent}>
            <motion.h1 variants={HightAnimation}>READY TO REDEFINITION YOUR BOUNDARIES?</motion.h1>
            <div className={styles.content}>
                <Image width={1249} src={headphones2} alt='' />
                <div className={styles.sidepart}>
                    <motion.h2 custom={1} variants={TextAnimation}>Contact our audio consultant for a personal demonstration of the capabilities</motion.h2>
                    <motion.button custom={2} variants={TextAnimation}>Sign up for a demonstration</motion.button>
                    <motion.button custom={3} variants={TextAnimation}>Download catalog (PDF)</motion.button>
                </div>
            </div>
        </motion.div>
    )
}