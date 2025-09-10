import React, { useRef, useEffect, useState, useCallback } from 'react';
import styles from './style.module.scss';
import comma from '../../assets/svg/comma.svg'
import Image from "next/image";
import aman from '../../assets/img/aman.png'
import commentline from '../../assets/svg/commentline.svg'
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
}

export default function Comments({ ismobile }: { ismobile: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const particlesInitializedRef = useRef(false);

  const [stopped1, setStopped1] = useState(false);
  const [stopped2, setStopped2] = useState(false);
  const [stopped3, setStopped3] = useState(false);
  const [stopped4, setStopped4] = useState(false);

  const initParticles = useCallback(() => {
    if (particlesInitializedRef.current) return particlesRef.current;

    const particles: { x: number, y: number, vx: number, vy: number, radius: number, alpha: number, color: string }[] = [];
    const canvas = canvasRef.current;
    if (!canvas) return particles;

    for (let i = 0; i < 300; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 3 + 1,
        alpha: Math.random() * 0.5 + 0.3,
        color: '#ffffff'
      });
    }

    particlesInitializedRef.current = true;
    return particles;
  }, []);

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
      ctx.fill();
    });
  }, []);

  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    particlesRef.current.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
    });
  }, []);

  const animate = useCallback(() => {
    updateParticles();
    drawParticles();
    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();

    if (!particlesInitializedRef.current) {
      particlesRef.current = initParticles();
    }

    animate();

    const handleResize = () => {
      resizeCanvas();
      drawParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [initParticles, animate, drawParticles]);

  return (
    <div className={styles.parent}>
      <h1>Sound that was appreciated</h1>
      <div className={styles.content}>
        <motion.div
          className={styles.comment}
          initial={ismobile ? { x: '70%', y: '82%' } : { x: '130%', y: '-42%' }}
          animate={
            stopped4
              ? { x: 0, y: 0, rotate: 0 }
              : {
                y: ismobile ? ['82%', '72%', '82%'] : ['-42%', '-52%', '-42%'],
                rotate: [0, -6, 0, 5, 0],
                x: ismobile ? '70%' : '130%'
              }
          }
          transition={
            stopped4
              ? { duration: 0.5, ease: "easeOut" }
              : {
                y: {
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                },
                rotate: {
                  duration: 6.0,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.7
                }
              }
          }
          onClick={() => setStopped4(true)}


        >
          <span>
            <Image alt='' src={comma} />
            <Image alt='' src={comma} />
          </span>
          <p>Finally, studio monitoring that doesn&apos;t tie you to your chair. Low-end detail is impeccable, and highs are crystal clear, without a single note of fatigue. This is exactly the tool I was looking for to mix my new album.</p>
        </motion.div>
        <div className={styles.bio}>
          <div className={styles.top}>

            <motion.span
              initial={ismobile ? { x: '170%', y: '-40%' } : { x: '-75%', y: '140%' }}
              animate={
                stopped1
                  ? { x: 0, y: 0, rotate: 0 }
                  : {
                    y: ismobile ? ['-40%', '-55%', '-40%'] : ['140%', '125%', '140%'],
                    rotate: [0, -4, 0, 3, 0],
                    x: ismobile ? '170%' : '-75%'
                  }
              }
              transition={
                stopped1
                  ? { duration: 0.5, ease: "easeOut" }
                  : {
                    y: {
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: {
                      duration: 4.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  }
              }
              onClick={() => setStopped1(true)}>
              <Image height={ismobile ? 160 : 350} width={ismobile ? 160 : 350} src={aman} alt='' />
            </motion.span>

            <motion.div initial={ismobile ? { x: '-150%', y: '100%' } : { x: '-250%', y: '-50%' }}
              animate={
                stopped2
                  ? { x: 0, y: 0, rotate: 0 }
                  : {
                    y: ismobile ? ['100%', '82%', '100%'] : ['-50%', '-68%', '-50%'],
                    rotate: [0, -5, 0, 4, 0],
                    x: ismobile ? '-150%' : '-250%'
                  }
              }
              transition={
                stopped2
                  ? { duration: 0.5, ease: "easeOut" }
                  : {
                    y: {
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    },
                    rotate: {
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3
                    }
                  }
              }
              onClick={() => setStopped2(true)}>the best</motion.div>
          </div>
          <motion.div
            initial={ismobile ? { x: '-30%', y: '250%' } : { x: '-180%', y: '130%' }}
            animate={
              stopped3
                ? { x: 0, y: 0, rotate: 0 }
                : {
                  y: ismobile ? ['250%', '238%', '250%'] : ['130%', '118%', '130%'],
                  rotate: [0, -3, 0, 2, 0],
                  x: ismobile ? '-30%' : '-180%'
                }
            }
            transition={
              stopped3
                ? { duration: 0.5, ease: "easeOut" }
                : {
                  y: {
                    duration: 2.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8
                  },
                  rotate: {
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.0
                  }
                }
            }
            onClick={() => setStopped3(true)} className={styles.down}>
            <h1>Georg Handson</h1>
            <Image src={commentline} alt='' />
            <p>Sound producer</p>
          </motion.div>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        className={styles.particles}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};