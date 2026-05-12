import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from 'three/addons'

function App() {
  return (
    <>
      <Canvas style={{height: '100vh', width: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <OrbitControls enableZoom enablePan enableRotate/>
      </Canvas>
    </>
  )
}

export default App
