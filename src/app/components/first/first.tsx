"use client";

import { motion } from 'framer-motion';
import Header from '../header/header';
import Image from "next/image";
import styles from './style.module.scss'

import Animatedheadvector1 from '../../assets/svg/animated/headvector1.jsx'
import Animatedheadvector2 from '../../assets/svg/animated/headvector2.jsx'
import Animatedheadvector3 from '../../assets/svg/animated/headvector3.jsx'

import headphones from '../../assets/img/headphones.png'

export default function First({ismobile}:{ismobile: boolean}) {
    return (
        <div className={styles.parent}>
            <Header />
            <motion.div
                className={styles.top}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1>head<span>phones</span></h1>
                <span><p>SILENCE</p>{ !ismobile && (<Animatedheadvector1 />)}<p>REDEFINED</p></span>
            </motion.div>
            <div className={styles.wrapper}>


                <div className={styles.vectors}>
                    <Animatedheadvector3 />
                    <Animatedheadvector2 />
                </div>
                <div className={styles.sidepart}>
                    <motion.div
                        initial={{
                            opacity: 0,
                            transform: 'translateX(-20px)'
                        }}
                        animate={{
                            opacity: 1,
                            transform: 'translateX(0)'
                        }}
                        transition={{ duration: 0.5, delay: .8 }}
                    >Full immersion in sound
                        with the impeccable
                        aesthetics of silence.</motion.div>
                    <motion.div

                        initial={{
                            opacity: 0,
                            transform: 'translateX(-20px)'
                        }}
                        animate={{
                            opacity: 1,
                            transform: 'translateX(0)'
                        }}
                        transition={{ duration: 0.5, delay: 1.2 }}

                    >Button (CTA): <br />
                        Explore the collection</motion.div>
                    <motion.button
                        initial={{
                            opacity: 0,
                            transform: 'translateX(-20px)'
                        }}
                        animate={{
                            opacity: 1,
                            transform: 'translateX(0)'
                        }}
                        transition={{ duration: 0.5, delay: 1.6 }}


                    >buy</motion.button>
                </div>
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
                >
                    <Image src={headphones} width={1000} height={1000} alt="" />
                </motion.span>
            </div>
        </div>
    );
}
