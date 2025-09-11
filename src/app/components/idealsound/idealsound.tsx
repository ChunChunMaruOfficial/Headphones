"use client";

import { useEffect, useState } from 'react';
import styles from './style.module.scss'

import { motion } from 'framer-motion';

import Animatedmobilevector2 from '../../assets/svg/animated/mobilevector2'
import Animatedidealsound from '../../assets/svg/animated/idealsound'


export default function Idealsound({ ismobile }: { ismobile: boolean }) {

    const scales = [
        [1, 0.4, 1.5, 0.6, 1.2, 0.8, 1],
        [1, 0.5, 1.6, 0.7, 1.4, 0.9, 1],
        [1, 0.3, 1.4, 0.5, 1.1, 0.7, 1],
        [1, 0.6, 1.5, 0.8, 1.3, 0.9, 1],
        [1, 0.4, 1.4, 0.6, 1.5, 0.8, 1]
    ];

    const TextAnimation = {
        hidden: {
            opacity: 0,
            x: 60
        },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: { duration: .4, delay: (custom * 0.4) + .6 }
        }),
    }


    const soundhight: number[] = [102, 474, 623, 448, 226, 375]
    const bigsoundhight: number[] = [102, 398, 251, 102, 375, 225, 448, 623, 474, 102]
    const sound = (array: number[]) => (<div className={styles.sound}>{array.map((v, i) => (<motion.span
        animate={{
            scaleY: scales[Math.floor(Math.random() * scales.length)],
        }}
        transition={{
            duration: 1.2 + Math.random() * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 0.5,
        }} key={i} style={{ height: v }}></motion.span>))}</div>)

    const cards: { title: string, text: string }[] = [{ title: 'For creativity', text: 'Studio precision for music production' }, { title: 'For gaming', text: 'Full immersion in virtual worlds' }, { title: 'For life', text: 'Your sound oasis in the heart of the city' }]

    return (
        <motion.div viewport={{ amount: 0.2, once: true }} initial="hidden" whileInView="visible" className={styles.parent}>
            <h1>Your ideal sound for</h1>
            <div className={styles.stair}>{
                cards.map((v, i) => (
                    <motion.div custom={i + 1} variants={TextAnimation} key={i} className={styles.card}>
                        <p>{v.title}</p>
                        <span>{v.text}</span>
                    </motion.div>
                ))}
                {ismobile ? (<Animatedmobilevector2 />) : (<Animatedidealsound />)}
                {ismobile ? (<Animatedmobilevector2 />) : (<Animatedidealsound />)}
                <div className={styles.background}>
                    {sound(soundhight)}
                    {sound(bigsoundhight)}
                    {sound(soundhight)}
                    {!ismobile && (sound(bigsoundhight))}
                </div>
            </div>
        </motion.div>
    )
}