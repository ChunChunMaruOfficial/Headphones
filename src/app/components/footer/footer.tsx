"use client";

import styles from './style.module.scss'
import Image from 'next/image'
import telegramimg from '../../assets/svg/telegram.svg'

import footerline from '../../assets/svg/footerline.svg'
import mobilefooter from '../../assets/svg/mobilefooter.svg'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


export default function Footer() {

    const [ismobile, setismobile] = useState(false)


    useEffect(() => {
        if (window.innerWidth <= 768) {
            setismobile(true)

        } else {
            setismobile(false)

        }
    }, [])

    const array: string[] = ['pdf', 'txt', 'web']
    return (
        <motion.div id='contacts' className={styles.parent}>
            <Image src={ismobile ? mobilefooter : footerline} alt='' />
            <div>
                <h1>contact</h1>
                <a href="#">POCHTA@GMAIL.com</a>
            </div>
            <div>
                <h1>news</h1>
                <Image src={telegramimg} alt='' />
            </div>
            <div>
                <h1>catalog</h1>
                <span>{array.map((v,i)=> (<a key={i} href='#'>{v}</a>))}</span>
            </div>
        </motion.div>
    )
}