import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MeshBase } from "./components/MeshBase";
import { useState } from "react";

function App() {
  const [hour, setHour] = useState(0);

  return (
    <>
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <MeshBase hour={hour} />
        <OrbitControls />
      </Canvas>
      <div className="card">
        <p>{hour}</p>
        <button onClick={() => setHour((hour) => hour - 1)}>-</button>
        <button onClick={() => setHour((hour) => hour + 1)}>+</button>
      </div>
    </>
  );
}

export default App;
