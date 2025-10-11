import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface MetabolomeSphereProps {
  isDark: boolean;
  scrollProgress: number;
}

const MetabolomeSphere: React.FC<MetabolomeSphereProps> = ({ isDark, scrollProgress }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random points for data visualization
  const points = useMemo(() => {
    const temp = new Float32Array(1000);
    for (let i = 0; i < 1000; i++) {
      const radius = 1.2 + Math.random() * 0.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.max(-1, Math.min(1, 2 * Math.random() - 1)));
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      // Ensure no NaN values
      temp[i * 3] = isNaN(x) ? 0 : x;
      temp[i * 3 + 1] = isNaN(y) ? 0 : y;
      temp[i * 3 + 2] = isNaN(z) ? 0 : z;
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.003;
      pointsRef.current.rotation.x += 0.001;
    }
  });

  // Calculate material properties based on scroll progress
  const materialProps = useMemo(() => {
    const progress = Math.max(0, Math.min(1, scrollProgress));
    
    if (isDark) {
      return {
        color: '#1a1a2e',
        emissive: '#0f0f23',
        metalness: 0.1,
        roughness: 0.8,
        transparent: true,
        opacity: 0.6 + progress * 0.4,
        wireframe: true,
        wireframeLinewidth: 1,
      };
    } else {
      return {
        color: '#00d4ff',
        emissive: '#0088cc',
        metalness: 0.3,
        roughness: 0.2,
        transparent: true,
        opacity: 0.8 + progress * 0.2,
        wireframe: false,
      };
    }
  }, [isDark, scrollProgress]);

  return (
    <group>
      {/* Main sphere */}
      <Sphere ref={meshRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial {...materialProps} />
      </Sphere>
      
      {/* Data points overlay */}
      <Points ref={pointsRef} positions={points} stride={3}>
        <PointMaterial
          transparent
          color={isDark ? '#666' : '#00d4ff'}
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isDark ? 0.3 : 0.8}
        />
      </Points>
      
      {/* Glowing ring effect */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 1.6, 32]} />
        <meshBasicMaterial
          color={isDark ? '#333' : '#00d4ff'}
          transparent
          opacity={isDark ? 0.1 : 0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default MetabolomeSphere;
