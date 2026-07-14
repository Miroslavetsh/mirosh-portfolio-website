import React, { useRef, useEffect, Dispatch, SetStateAction } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import { Group, Mesh, Material } from "three";

import islandScene from "@/assets/3D/island.glb";
import { Axis } from "@/lib/3D/types";

interface IslandNodes {
  polySurface944_tree_body_0: Mesh;
  polySurface945_tree1_0: Mesh;
  polySurface946_tree2_0: Mesh;
  polySurface947_tree1_0: Mesh;
  polySurface948_tree_body_0: Mesh;
  polySurface949_tree_body_0: Mesh;
  pCube11_rocks1_0: Mesh;
}

interface IslandMaterials {
  PaletteMaterial001: Material;
}

type IslandGLTF = {
  nodes: IslandNodes;
  materials: IslandMaterials;
};

type IslandProps = React.JSX.IntrinsicElements["group"] & {
  scale?: Axis | null;
  position?: Axis | null;
  rotation?: Axis | null;
  isRotating: boolean;
  setIsRotating: Dispatch<SetStateAction<boolean>>;
  setCurrentStage: Dispatch<SetStateAction<number | null>>;
};

const Island: React.FC<IslandProps> = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  ...props
}) => {
  const { nodes, materials } = useGLTF(islandScene) as unknown as IslandGLTF;
  const islandRef = useRef<Group>(null);
  const { gl, viewport } = useThree();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (event: TouchEvent | MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    const isTouchEvent = "touches" in event;

    const clientX = isTouchEvent ? event.touches[0]?.clientX : event.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (event: TouchEvent | MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (event: TouchEvent | MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    if (!isRotating) return;
    const isTouchEvent = "touches" in event;

    const clientX = isTouchEvent ? event.touches[0]?.clientX : event.clientX;
    const deltaX = (clientX - lastX.current) / viewport.width;

    islandRef.current!.rotation.y += deltaX * 0.01 * Math.PI;
    lastX.current = clientX;
    rotationSpeed.current = deltaX * 0.01 * Math.PI;
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      islandRef.current!.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.0125;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      islandRef.current!.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.0125;
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current!.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current!.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, viewport, handlePointerDown, handlePointerUp, handlePointerMove]);

  return (
    <a.group {...props} ref={islandRef}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
};

export default Island;
