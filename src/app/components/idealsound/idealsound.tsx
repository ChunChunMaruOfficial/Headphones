"use client";

import { useEffect, useState } from 'react';
import styles from './style.module.scss'
import idealsoundsvg from '../../assets/svg/idealsound.svg'
import Image from "next/image";
import mobilevector2 from '../../assets/svg/headvector3.svg'

export default function Idealsound() {

   
        const [ismobile, setismobile] = useState(false)


        useEffect(() => {
            if (window.innerWidth <= 768) {
                setismobile(true)

            } else {
                setismobile(false)

            }
        }, [])
        const soundhight: number[] = [102, 474, 623, 448, 226, 375]
        const bigsoundhight: number[] = [102, 398, 251, 102, 375, 225, 448, 623, 474, 102]
        const sound = (array: number[]) => (<div className={styles.sound}>{array.map((v, i) => (<span key={i} style={{ height: v }}></span>))}</div>)

        const cards: { title: string, text: string }[] = [{ title: 'For creativity', text: 'Studio precision for music production' }, { title: 'For gaming', text: 'Full immersion in virtual worlds' }, { title: 'For life', text: 'Your sound oasis in the heart of the city' }]

        return (
            <div className={styles.parent}>
                <h1>Your ideal sound for</h1>
                <div className={styles.stair}>{
                    cards.map((v, i) => (
                        <div key={i} className={styles.card}>
                            <p>{v.title}</p>
                            <span>{v.text}</span>
                        </div>
                    ))}
                    <Image src={ismobile ? mobilevector2 : idealsoundsvg} alt='' />
                    <Image src={ismobile ? mobilevector2 : idealsoundsvg} alt='' />
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