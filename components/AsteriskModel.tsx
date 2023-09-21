import {useRef, useEffect} from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

function toScreenPosition(
  obj: THREE.Group<THREE.Object3DEventMap>,
  camera: THREE.Camera,
  canvas: HTMLCanvasElement,
) {
  const vector = new THREE.Vector3();
  const widthHalf = 0.5 * canvas.clientWidth;
  const heightHalf = 0.5 * canvas.clientHeight;

  obj.updateMatrixWorld();
  vector.setFromMatrixPosition(obj.matrixWorld);
  vector.project(camera);

  vector.x = vector.x * widthHalf + widthHalf;
  vector.y = -(vector.y * heightHalf) + heightHalf;

  return {
    x: vector.x,
    y: vector.y,
  };
}
type AsteriskModelProps = {
  initialPosition: [number, number, number];
};

const AsteriskModel: React.FC<AsteriskModelProps> = ({initialPosition}) => {
  const gltf = useLoader(GLTFLoader, "/asterisk.glb");
  const ref = useRef(new THREE.Group());
  const velocity = useRef({
    x: 0.008,
    y: 0.008,
  });

  useEffect(() => {
    ref.current.position.set(...initialPosition);
  }, [initialPosition]);

  useFrame(({camera, gl}) => {
    if (ref.current) {
      ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.005;
      ref.current.position.x += velocity.current.x;
      ref.current.position.y += velocity.current.y;

      const screenPos = toScreenPosition(ref.current, camera, gl.domElement);

      if (screenPos.x < 0 || screenPos.x > gl.domElement.clientWidth) {
        velocity.current.x = -velocity.current.x;
      }

      if (screenPos.y < 0 || screenPos.y > gl.domElement.clientHeight) {
        velocity.current.y = -velocity.current.y;
      }
    }
  });

  return <primitive ref={ref} object={gltf.scene.clone()} />;
};

export default AsteriskModel;
