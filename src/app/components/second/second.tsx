"use client";

import { motion } from 'framer-motion';

import Image from "next/image";
import styles from './style.module.scss'

import secondvectorcolor from '../../assets/svg/secondvectorcolor.svg'
import secondvectorwrapper from '../../assets/svg/secondvectorwrapper.svg'

import mobilecolor from '../../assets/svg/mobilecolor.svg'
import mobilegray from '../../assets/svg/mobilegray.svg'

import Animatedmobileline from '../../assets/svg/animated/mobileline.jsx'
import Animatedsecondvector6 from '../../assets/svg/animated/secondvector6.jsx'

import { Fragment } from 'react';

const ShowAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: (custom: number) => ({
        opacity: 1,
        transition: { delay: (custom * 0.4) + .3 }
    }),
}

export default function Second({ ismobile }: { ismobile: boolean }) {
    return (
        <div className={styles.parent}>
            <motion.div id='product' className={styles.background}>
                <Image src={ismobile ? mobilecolor : secondvectorcolor} alt="" />
                <Image src={ismobile ? mobilegray : secondvectorwrapper} alt="" />
            </motion.div>
            <motion.div viewport={{ amount: 0.2, once: true }} initial="hidden" whileInView="visible" className={styles.container}>
                {[...Array(3)].map((_, i) => (
                    <Fragment key={i} >
                        <div>
                            <motion.div custom={i + 1} variants={ShowAnimation}>
                                <div>
                                    <h2>Adaptive Noise Cancellation</h2>
                                    <p>Smart silence</p>
                                    <p>Microphones analyze ambient noise 1,000 times per second. The world around you quiets down when you need to concentrate, and returns gently for safety outdoors.</p>
                                </div>
                            </motion.div>
                           { ismobile && < Animatedmobileline key={i} />}
                        </div>
                    </Fragment >
                ))}
            </motion.div>
            <div className={styles.rodmap}>
                {!ismobile && (<Animatedsecondvector6 />)}


                {[...Array(ismobile ? 3 : 2)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
        </div>
    );
}