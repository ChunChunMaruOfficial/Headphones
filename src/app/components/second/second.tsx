"use client";

import { motion } from 'framer-motion';

import Image from "next/image";
import styles from './style.module.scss'

import secondvectorcolor from '../../assets/svg/secondvectorcolor.svg'
import secondvectorwrapper from '../../assets/svg/secondvectorwrapper.svg'

import mobilecolor from '../../assets/svg/mobilecolor.svg'
import mobilegray from '../../assets/svg/mobilegray.svg'

import mobileline from '../../assets/svg/mobileline.svg'

import secondvector6 from '../../assets/svg/secondvector6.svg'
import { useEffect, useState } from 'react';

const ShowAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: (custom: number) => ({
        opacity: 1,
        transition: { delay: (custom * 0.4) + .3 }
    }),
}

export default function Second() {
    const [imgformat, setimgformat] = useState({ wrapper: secondvectorwrapper, color: secondvectorcolor })
    const [lineformat, setlineformat] = useState(secondvector6)

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setlineformat(mobileline)
            setimgformat({ wrapper: mobilegray, color: mobilecolor })
        } else {
            setlineformat(secondvector6)
            setimgformat({ wrapper: secondvectorwrapper, color: secondvectorcolor })
        }
    }, [])

    return (
        <div className={styles.parent}>
            <motion.div id='product' className={styles.background}>
                <Image src={imgformat.color} alt="" />
                <Image src={imgformat.wrapper} alt="" />
            </motion.div>
            <motion.div viewport={{ amount: 0.2, once: true }} initial="hidden" whileInView="visible" className={styles.container}>
                {[...Array(3)].map((_, i) => (
                    < >
                        <motion.div custom={i + 1} variants={ShowAnimation}>
                            <div>
                                <h2>Adaptive Noise Cancellation</h2>
                                <p>Smart silence</p>
                                <p>Microphones analyze ambient noise 1,000 times per second. The world around you quiets down when you need to concentrate, and returns gently for safety outdoors.</p>
                            </div>
                        </motion.div>
                        {lineformat != secondvector6 && (<span></span>)}
                    </>
                ))}
            </motion.div>
            <div className={styles.rodmap}>
                {lineformat == secondvector6 ? (<Image src={lineformat} alt="" />) : [...Array(3)].map((_, i) => (
                    <Image src={lineformat} alt="" />
                ))}


                {[...Array(2)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
        </div>
    );
}