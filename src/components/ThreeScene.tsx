import { MathUtils, Object3D } from 'three'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Instances, Instance, Environment } from '@react-three/drei'
// 定义粒子属性的类型
type Particle = {
  factor: number;
  speed: number;
  xFactor: number;
  yFactor: number;
  zFactor: number;
};

// 创建粒子数组
const particles: Particle[] = Array.from({ length: 100 }, () => ({
  factor: MathUtils.randInt(20, 80),
  speed: MathUtils.randFloat(0.01, 0.45),
  xFactor: MathUtils.randFloatSpread(40),
  yFactor: MathUtils.randFloatSpread(10),
  zFactor: MathUtils.randFloatSpread(10)
}))
  
  function Bubbles() {
    const ref = useRef<Object3D>(null!)
    useFrame((state, delta) => {
      if (ref.current) {
        ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 2.75, delta)
      }
    })
    return (
      <Instances limit={particles.length} castShadow receiveShadow position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.45, 20, 20]} />
        <meshStandardMaterial roughness={1} color="#f0f0f0" />
        {particles.map((data, i) => (
          <Bubble key={i} {...data} />
        ))}
      </Instances>
    )
  }
  
  function Bubble({ factor, speed, xFactor, yFactor, zFactor }: Particle) {
    const ref = useRef<Object3D>(null!)
    useFrame((state) => {
      const t = factor + state.clock.elapsedTime * (speed / 2)
      if (ref.current) {
        ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 5))
        ref.current.position.set(
          Math.cos(t) + Math.sin(t * 1) / 10 + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
          Math.sin(t) + Math.cos(t * 2) / 10 + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
          Math.sin(t) + Math.cos(t * 2) / 10 + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 4
        )
      }
    })
    return <Instance ref={ref} />
  }

const ThreeScene = () => {
  return (
    <Canvas shadows dpr={[1, 2]} gl={{ antialias: false }} camera={{ fov: 50, position: [0, 0, 20] }}>
    <color attach="background" args={['#87ceeb']} />
    <fog attach="fog" args={['red', 20, -5]} />
    <ambientLight intensity={1.5} />
    <pointLight position={[10, 10, 10]} intensity={1} castShadow />
    <Bubbles />
    <Environment files="./potsdamer_platz_1k.hdr" />
  </Canvas>
  );
};

  
export default ThreeScene;
