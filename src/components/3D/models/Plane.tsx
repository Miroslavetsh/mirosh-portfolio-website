import React, { useEffect, useRef } from "react";

import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "@/assets/3D/plane.glb";
import { Axis } from "@/lib/3D/types";
import { Mesh } from "three";

type PlaneProps = React.JSX.IntrinsicElements["mesh"] & {
  scale?: Axis | null;
  position?: Axis | null;
  isRotating?: boolean;
};

const Plane: React.FC<PlaneProps> = ({ isRotating, ...props }) => {
  const ref = useRef<Mesh | null>(null);
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) actions?.["Take 001"]?.play();
    else actions?.["Take 001"]?.stop();
  }, [isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
