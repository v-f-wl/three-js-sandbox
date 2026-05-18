import { OrbitControls } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <Canvas fallback={<div>Sorry no WebGL supported!</div>}>
      <directionalLight position={[0, 0, 2]}/>
      <mesh position={[1, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={'orange'}/>
      </mesh>
    </Canvas>
  )
}

export default App
