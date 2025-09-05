import React, { useRef, useEffect, useState, useCallback } from 'react';
import styles from './style.module.scss';
import comma from '../../assets/svg/comma.svg'
import Image from "next/image";
import aman from '../../assets/img/aman.png'
import commentline from '../../assets/svg/commentline.svg'


interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
}

export default function Comments() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isalive, setisalive] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const particlesInitializedRef = useRef(false);

  const initParticles = useCallback(() => {
    if (particlesInitializedRef.current) return particlesRef.current;

    const particles: Particle[] = [];
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

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    particlesRef.current.forEach(particle => {
      if (isalive) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.vx += (Math.random() - 0.5) * 0.1;
        particle.vy += (Math.random() - 0.5) * 0.1;

        const maxSpeed = 27;
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed;
          particle.vy = (particle.vy / speed) * maxSpeed;
        }

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      } else {

        const dx = centerX - particle.x;
        const dy = centerY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const speed = 2;
        particle.vx = (dx / distance) * speed;
        particle.vy = (dy / distance) * speed;

        particle.x += particle.vx;
        particle.y += particle.vy;


        if (distance < 20) {
          const angle = Math.random() * Math.PI * 2;
          const force = 2 + Math.random() * 3;
          particle.vx = Math.cos(angle) * force;
          particle.vy = Math.sin(angle) * force;
        }
      }
    });
  }, [isalive]);

  const animate = useCallback(() => {
    updateParticles();
    drawParticles();

    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    if (!particlesInitializedRef.current) {
      particlesRef.current = initParticles();
    }

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [initParticles, animate]);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawParticles]);

  const handleToggle = () => {
    setisalive(prev => !prev);
  };

  return (
    <div className={styles.parent}>
      <h1>Sound that was appreciated</h1>
      <div className={isalive ? styles.content + ' ' + styles.isdead : styles.content + ' ' + styles.isalive}>
        <div className={styles.comment}>
          <span>
            <Image alt='' src={comma} />
            <Image alt='' src={comma} />
          </span>
          <p>Finally, studio monitoring that doesn't tie you to your chair. Low-end detail is impeccable, and highs are crystal clear, without a single note of fatigue. This is exactly the tool I was looking for to mix my new album.</p>
        </div>
        <div className={styles.bio}>
          <div className={styles.top}>
              <Image height={350} width={350} src={aman} alt='' />
            <div>the best</div>
          </div>
          <div className={styles.down}>
            <h1>Georg Handson</h1>

            <Image src={commentline} alt='' />

            <p>Sound producer</p>
          </div>
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
      {/* <button onClick={handleToggle}>click</button> */}
    </div>
  );
};