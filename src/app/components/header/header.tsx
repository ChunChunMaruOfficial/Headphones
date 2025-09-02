"use client";

import { useState } from 'react';
import styles from './style.module.scss'

export default function Header() {
    const [selected, setselected] = useState<number>(0)
    const pages = ['product', 'show', 'contacts']
    return (
        <div className={styles.parent}>
            <div className={styles.pages}>{pages.map((v, i) => (<p onClick={() => setselected(i)} className={ i == selected ? styles.selected : ''}>{v}</p>))}</div>
            <span></span>
        </div>
    )
}