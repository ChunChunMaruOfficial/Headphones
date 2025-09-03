import React, { useCallback, useState, useEffect, useRef } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine, Container } from 'tsparticles-engine';
import styles from './style.module.scss';

export default function Comments() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);
    const [isalive, setisalive] = useState(true)

    return (
        <div className={styles.parent}>
            <div className={ isalive ? styles.content : styles.content + ' ' + styles.isalive}>sdfsdf</div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "rgb(0, 0, 26)",
                        },
                    },
                    fullScreen: false,
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        move: {
                            enable: true,
                            speed: isalive ? 2 : 4,
                            direction: isalive ? "none" : 'inside',
                            outModes: {
                                default: isalive ? "bounce" : 'destroy'
                            },
                            attract: {
                                enable: true,
                                rotateX: 2000,
                                rotateY: 2000,
                                distance: 100,
                            }
                        },
                        number: {
                            value: 100,
                            density: {
                                enable: false, // Отключаем плотность для рандомного спавна
                            }
                        },
                        opacity: {
                            value: { min: 0.3, max: 0.8 },
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: { min: 1, max: 4 },
                        },
                        position: {
                            random: true // Спаун в рандомных местах
                        }
                    },
                    emitters: {
                        direction: "none",
                        life: {
                            count: 1,
                            duration: 0.1,
                            delay: 0.1
                        },
                        rate: {
                            delay: 0.1,
                            quantity: 100 // Сразу все 100 частиц
                        },
                        size: {
                            mode: "precise",
                            width: 100, // Широкая область спауна
                            height: 100 // Высокая область спауна
                        },
                        position: {
                            x: 50,
                            y: 50
                        }
                    },
                    detectRetina: true
                }}
                className={styles.particles}
            />
            <button onClick={() => setisalive(ia => { return !ia })}>click</button>
        </div>
    );
};