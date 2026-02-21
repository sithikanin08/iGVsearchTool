"use client";

import { useRef, useMemo } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface ParticleLayerProps {
    count: number;
    opacity: number;
    size: number;
    speed: number;
    color: string;
}

function ParticleLayer({ count, opacity, size, speed, color }: ParticleLayerProps) {
    const points = useRef<THREE.Points>(null);

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const flowX = (i / count) * 100 - 50;
            const flowY = Math.sin(angle) * 30 + (i / count) * 80 - 40;
            const flowZ = Math.cos(angle) * 20;
            pos[i * 3] = flowX + (Math.random() - 0.5) * 30;
            pos[i * 3 + 1] = flowY + (Math.random() - 0.5) * 20;
            pos[i * 3 + 2] = flowZ + (Math.random() - 0.5) * 15;
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        if (!points.current) return;
        const pos = points.current.geometry.attributes.position.array as Float32Array;
        const time = state.clock.elapsedTime;
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const waveX = Math.sin(time * 0.3 * speed + i * 0.01) * 0.5;
            const waveZ = Math.sin(time * 0.25 * speed + i * 0.02) * 0.3;
            pos[i3 + 1] -= (0.02 + Math.sin(time + i) * 0.01) * speed;
            if (pos[i3 + 1] < -60) {
                pos[i3 + 1] = 60;
                pos[i3] = (Math.random() - 0.5) * 100;
                pos[i3 + 2] = (Math.random() - 0.5) * 30;
            }
            pos[i3] += waveX * 0.1;
            pos[i3 + 2] += waveZ * 0.05;
        }
        points.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color={color}
                size={size}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={opacity}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

interface SectionParticleBackgroundProps {
    /** 0 = invisible, 1 = full intensity. Use 0.35 for Experiences, 0.2 for OPs, 0.05 for Contact */
    intensity: number;
}

export default function SectionParticleBackground({ intensity }: SectionParticleBackgroundProps) {
    if (intensity <= 0) return null;

    // Scale particle count and opacity with intensity
    const primaryCount = Math.floor(1200 * intensity);
    const secondaryCount = Math.floor(600 * intensity);
    const primaryOpacity = 0.18 * intensity;
    const secondaryOpacity = 0.12 * intensity;

    return (
        <div
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ zIndex: 1 }}
        >
            <Canvas
                camera={{ position: [0, 0, 50], fov: 75 }}
                style={{ width: "100%", height: "100%" }}
                gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
            >
                <ParticleLayer
                    count={primaryCount}
                    opacity={primaryOpacity}
                    size={0.22}
                    speed={0.8}
                    color="#037ef3"
                />
                {intensity > 0.15 && (
                    <ParticleLayer
                        count={secondaryCount}
                        opacity={secondaryOpacity}
                        size={0.18}
                        speed={0.5}
                        color="#00d4ff"
                    />
                )}
            </Canvas>
        </div>
    );
}
