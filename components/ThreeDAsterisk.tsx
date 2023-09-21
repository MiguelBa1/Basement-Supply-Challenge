import {Canvas} from "@react-three/fiber";

import AsteriskModel from "./AsteriskModel"; // Asegúrate de importar AsteriskModel correctamente

const ThreeDAsterisk = () => {
  return (
    <div
      className="absolute top-0 left-0 hidden w-full h-full md:block"
      style={{pointerEvents: "none"}}
    >
      <Canvas style={{pointerEvents: "none"}}>
        <directionalLight position={[-10, -10, -10]} />
        <directionalLight position={[10, 10, 10]} />
        <AsteriskModel initialPosition={[2, 2, 0]} />
        <AsteriskModel initialPosition={[-2, -2, 0]} />
      </Canvas>
    </div>
  );
};

export default ThreeDAsterisk;
