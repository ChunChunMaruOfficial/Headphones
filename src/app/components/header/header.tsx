"use client";

import { useCallback, useState, useEffect } from 'react';
import styles from './style.module.scss'
import { animate } from 'framer-motion';

export default function Header() {
    const [selected, setselected] = useState<number>(0)
    const pages = ['product', 'show', 'contacts']

    const scrollTo = useCallback((sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        // Получаем позицию элемента относительно документа
        const rect = element.getBoundingClientRect();
        const targetY = window.scrollY + rect.top - 100; // -100px отступ сверху

        const currentY = window.scrollY;

        animate(currentY, targetY, {
            duration: 0.8,
            ease: "easeInOut",
            onUpdate: (latest) => window.scrollTo(0, latest)
        });
    }, []);

    return (
        <div className={styles.parent}>
            <div className={styles.pages}>{pages.map((v, i) => (
                <p key={i} onClick={() => { setselected(i); scrollTo(v) }} 
                   className={i == selected ? styles.selected : ''}>
                   {v}
                </p>
            ))}</div>
            <span></span>
        </div>
    )
}