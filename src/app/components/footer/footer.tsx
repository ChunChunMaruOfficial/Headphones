"use client";

import styles from './styles.module.scss'
import Image from 'next/image'
import telegramimg from '../../assets/svg/telegram.svg'

export default function Footer() {
    const array: string[] = ['pdf', 'txt', 'web']
    return (
        <div className={styles.parent}>
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
                <span>{array.map(v => (<a href='#'>{v}</a>))}</span>
            </div>
        </div>
    )
}