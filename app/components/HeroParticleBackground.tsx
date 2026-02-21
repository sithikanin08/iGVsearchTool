"use client";

import { useRef, useMemo } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingParticles() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 3000;

  // Create particle positions with a flowing, wind-like distribution
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Create a flowing pattern - particles flow from top-left to bottom-right
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = Math.random() * 50 + 20;

      // Add wind-like flow direction
      const flowX = (i / particleCount) * 100 - 50;
      const flowY = Math.sin(angle) * 30 + (i / particleCount) * 80 - 40;
      const flowZ = Math.cos(angle) * 20;

      positions[i * 3] = flowX + (Math.random() - 0.5) * 30; // X
      positions[i * 3 + 1] = flowY + (Math.random() - 0.5) * 20; // Y
      positions[i * 3 + 2] = flowZ + (Math.random() - 0.5) * 15; // Z
    }

    return positions;
  }, []);

  // Animate particles with flowing motion
  useFrame((state) => {
    if (points.current) {
      const positions = points.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.elapsedTime;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Create flowing, wind-like motion
        const waveX = Math.sin(time * 0.3 + i * 0.01) * 0.5;
        const waveY = Math.cos(time * 0.2 + i * 0.015) * 0.8;
        const waveZ = Math.sin(time * 0.25 + i * 0.02) * 0.3;

        // Add downward flow (like rain/diamonds falling)
        positions[i3 + 1] -= 0.02 + Math.sin(time + i) * 0.01;

        // Reset particles that fall too low
        if (positions[i3 + 1] < -60) {
          positions[i3 + 1] = 60;
          positions[i3] = (Math.random() - 0.5) * 100;
          positions[i3 + 2] = (Math.random() - 0.5) * 30;
        }

        // Add subtle horizontal flow
        positions[i3] += waveX * 0.1;
        positions[i3 + 2] += waveZ * 0.05;
      }

      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#037ef3"
        size={0.25}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.75}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function DiamondParticles() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 2000;

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Create diamond-like distribution
      const angle = (i / particleCount) * Math.PI * 4;
      const radius = Math.random() * 60 + 15;

      positions[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (i / particleCount) * 120 - 60 + (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = Math.sin(angle) * radius * 0.5 + (Math.random() - 0.5) * 20;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      const positions = points.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.elapsedTime;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Diamond rain effect - particles fall and rotate
        positions[i3 + 1] -= 0.15 + Math.sin(time * 2 + i * 0.1) * 0.05;

        // Add rotation effect
        const angle = time * 0.5 + i * 0.01;
        const radius = Math.sqrt(positions[i3] ** 2 + positions[i3 + 2] ** 2);
        positions[i3] = Math.cos(angle) * radius;
        positions[i3 + 2] = Math.sin(angle) * radius;

        // Reset particles
        if (positions[i3 + 1] < -70) {
          positions[i3 + 1] = 70;
          positions[i3] = (Math.random() - 0.5) * 100;
          positions[i3 + 2] = (Math.random() - 0.5) * 30;
        }
      }

      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#037ef3"
        size={0.3}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function GlowingParticles() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 1500;

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Create glowing particles in the background
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      const positions = points.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.elapsedTime;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Gentle floating motion
        positions[i3 + 1] += Math.sin(time * 0.5 + i * 0.01) * 0.02;
        positions[i3] += Math.cos(time * 0.3 + i * 0.015) * 0.015;

        // Keep particles in bounds
        if (Math.abs(positions[i3]) > 60) {
          positions[i3] = (Math.random() - 0.5) * 100;
        }
        if (Math.abs(positions[i3 + 1]) > 60) {
          positions[i3 + 1] = (Math.random() - 0.5) * 100;
        }
      }

      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#e8f4f8"
        size={0.2}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function HeroParticleBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[1]">
      <div className="w-full h-full" style={{ position: "relative" }}>
        <Canvas
          camera={{ position: [0, 0, 50], fov: 75 }}
          style={{ width: "100%", height: "100%" }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={0.5} />
          <FloatingParticles />
          <DiamondParticles />
          <GlowingParticles />
        </Canvas>
      </div>
    </div>
  );
}

