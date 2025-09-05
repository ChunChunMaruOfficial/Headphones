"use client";

import { useState } from 'react';
import styles from './style.module.scss'
import idealsoundsvg from '../../assets/svg/idealsound.svg'
import Image from "next/image";

export default function Idealsound() {
    const soundhight: number[] = [102, 474, 623, 448, 226, 375]
    const bigsoundhight: number[] = [102, 398, 251, 102, 375, 225, 448, 623, 474, 102]
    const sound = (array: number[]) => (<div className={styles.sound}>{array.map((v,i) => (<span key={i} style={{ height: v }}></span>))}</div>)

    const cards: { title: string, text: string }[] = [{ title: 'For creativity', text: 'Studio precision for music production' }, { title: 'For gaming', text: 'Full immersion in virtual worlds' }, { title: 'For life', text: 'Your sound oasis in the heart of the city' }]

    return (
        <div className={styles.parent}>
            <h1>Your ideal sound for</h1>
            <div className={styles.stair}>{
                cards.map((v,i) => (
                    <div key={i} className={styles.card}>
                        <p>{v.title}</p>
                        <span>{v.text}</span>
                    </div>
                ))}
                <Image src={idealsoundsvg} alt='' />
                <Image src={idealsoundsvg} alt='' />
                <div className={styles.background}>
                    {sound(soundhight)}
                    {sound(bigsoundhight)}
                    {sound(soundhight)}
                    {sound(bigsoundhight)}
                </div>
            </div>
        </div>
    )
}