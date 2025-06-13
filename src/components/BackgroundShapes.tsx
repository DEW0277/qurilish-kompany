import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { Group } from 'three';

const AnimatedShapes = () => {
  const shapes = useRef<Group>(null);

  useFrame((state) => {
    if (shapes.current) {
      const t = state.clock.getElapsedTime();
      shapes.current.rotation.x = Math.sin(t / 2) / 4;
      shapes.current.rotation.y = Math.sin(t / 3) / 4;
    }
  });

  return (
    <group ref={shapes}>
      {/* Floating sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-2, 0, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color='#4B9CD3'
            metalness={0.8}
            roughness={0.2}
            emissive='#88CCFF'
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      {/* Floating cube */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh position={[2, 0, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial
            color='#2C5282'
            metalness={0.7}
            roughness={0.3}
            emissive='#4B9CD3'
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* Floating torus */}
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[0.6, 0.2, 16, 32]} />
          <meshStandardMaterial
            color='#FFD700'
            metalness={0.8}
            roughness={0.2}
            emissive='#FFA500'
            emissiveIntensity={0.4}
          />
        </mesh>
      </Float>
    </group>
  );
};

const BackgroundShapes = () => {
  return (
    <div className='absolute inset-0 pointer-events-none'>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Environment preset='city' />
        <AnimatedShapes />
      </Canvas>
    </div>
  );
};

export default BackgroundShapes;
