import { OrbitControls } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'


const Cube = ({position, size, color}) => {
  return(
    <mesh position={position}>
      <boxGeometry ards={size}/>
      <meshStandardMaterial color={color}/>
    </mesh>
  )
}
function App() {
  return (
    <Canvas fallback={<div>Sorry no WebGL supported!</div>}>
      <directionalLight position={[0, 0, 2]}/>
      <ambientLight/>

      <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color={'green'} size={[1, 1, 1]}/>
        <Cube position={[-1, 0, 0]} color={'hotpink'} size={[1, 1, 1]}/>
        <Cube position={[-1, 2, 0]} color={'blue'} size={[1, 1, 1]}/>
        <Cube position={[1, 2, 0]} color={'yellow'} size={[1, 1, 1]}/>
      </group>
    </Canvas>
  )
}

export default App
