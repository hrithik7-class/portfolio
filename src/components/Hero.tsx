'use client';

import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, PerspectiveCamera, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { useTheme } from '@/app/contexts/ThemeContext';
import {
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiRedux,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiJavascript
} from 'react-icons/si';

// Starfield component that changes color based on theme
function StarField() {
  const { isDark } = useTheme();
  const ref = useRef<any>(null!);

  // Create random points for stars
  const [positions] = useMemo(() => {
    const pos = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return [pos];
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;

    // Slight sway with mouse
    const targetX = state.mouse.x * 0.2;
    const targetY = state.mouse.y * 0.2;
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, targetX, 0.1);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, 0.1);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={isDark ? "#ffffff" : "#09090b"}
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

// Individual Floating Icon Component
interface FloatingIconProps {
  icon: React.ReactNode;
  position: [number, number, number];
  color: string;
  label: string;
}

function FloatingTechIcon({ icon, position, color, label }: FloatingIconProps) {
  return (
    <Float
      position={position}
      speed={2}
      rotationIntensity={1.5}
      floatIntensity={2}
    >
      <Html distanceFactor={8} center transform occlude="blending">
        <div
          className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/10 dark:bg-zinc-900/30 backdrop-blur-md border border-white/20 dark:border-zinc-800/50 shadow-xl transition-all duration-500"
          style={{ color: color }}
        >
          <div className="text-4xl mb-1">{icon}</div>
          <span className="text-[8px] font-black uppercase tracking-widest opacity-50 text-zinc-900 dark:text-zinc-100">
            {label}
          </span>
        </div>
      </Html>
    </Float>
  );
}

const TechIcons = () => {
  const groupRef = useRef<THREE.Group>(null!);

  const icons = [
    { icon: <FaReact />, label: 'React', color: '#61DAFB', pos: [2, 1.5, -1] as [number, number, number] },
    { icon: <FaNodeJs />, label: 'NodeJS', color: '#339933', pos: [-2, 1, 0] as [number, number, number] },
    { icon: <SiMongodb />, label: 'MongoDB', color: '#47A248', pos: [3.5, -1, 1] as [number, number, number] },
    { icon: <SiPostgresql />, label: 'Postgres', color: '#336791', pos: [-3, -2, -0.5] as [number, number, number] },
    { icon: <SiPrisma />, label: 'Prisma', color: '#2D3748', pos: [1.5, -2.5, 2] as [number, number, number] },
    { icon: <SiRedux />, label: 'Redux', color: '#764ABC', pos: [-2.5, 2.5, 0.5] as [number, number, number] },
    { icon: <SiExpress />, label: 'Express', color: '#828282', pos: [-4, 0.5, -1.5] as [number, number, number] },
    { icon: <SiNextdotjs />, label: 'Next.js', color: '#000000', pos: [4, 2, -2] as [number, number, number] },
    { icon: <SiJavascript />, label: 'JS', color: '#F7DF1E', pos: [0, 2.5, -3] as [number, number, number] },
    { icon: <SiTypescript />, label: 'TS', color: '#3178C6', pos: [-0.5, -3, 0] as [number, number, number] },
  ];

  useFrame((state) => {
    // Parallax effect based on mouse movement
    const targetX = state.mouse.x * 1.5;
    const targetY = state.mouse.y * 1.0;

    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);

    // Gentle rotation of the whole cloud
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.mouse.x * 0.2, 0.05);
  });

  return (
    <group ref={groupRef}>
      {icons.map((item, i) => (
        <FloatingTechIcon
          key={i}
          icon={item.icon}
          position={item.pos}
          color={item.color}
          label={item.label}
        />
      ))}
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <StarField />
      <TechIcons />
    </>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-zinc-950 transition-colors duration-700">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 w-full text-center md:text-left pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-500 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Building High-Performance Systems
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight leading-[0.95] text-zinc-900 dark:text-white">
              Full-Stack <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-amber-700">Developer.</span>
            </h1>

            <p className="text-base montserrat-regular md:text-2xl text-black dark:text-zinc-400
             mb-10 max-w-xl leading-relaxed font-light ">
              Hi, I&apos;m Hrithik, a Full Stack Web Developer with 
              <span className='text-[#cc6100]' > 7  </span> 
              months of hands-on experience. I&apos;ve built and deployed more than  
              <span className='text-[#cc6100]' > 2 </span> 
              full-stack products for companies, focusing on 
              responsive, scalable, and user-driven applications. 
              You can see my skills shining 
              through in my work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl transition-all shadow-xl shadow-amber-500/25 text-center"
              >
                View Showcase
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500 dark:hover:border-amber-500 font-bold rounded-2xl transition-all text-center"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Aesthetic Blurs */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Hero;
