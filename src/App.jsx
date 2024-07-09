import { CameraControls, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MeshBase } from "./components/MeshBase";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <directionalLight color="white" position={[0, 0, 5]} />
      {/* <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh> */}
      <MeshBase />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
