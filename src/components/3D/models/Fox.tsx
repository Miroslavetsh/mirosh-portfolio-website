import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationClip, Bone, Group, Material, SkinnedMesh } from "three";

import foxScene from "@/assets/3D/fox.glb";

interface FoxNodes {
  GLTF_created_0_rootJoint: Bone;
  Object_7: SkinnedMesh;
  Object_8: SkinnedMesh;
  Object_9: SkinnedMesh;
  Object_10: SkinnedMesh;
  Object_11: SkinnedMesh;
}

interface FoxMaterials {
  PaletteMaterial001: Material;
}

type FoxGLTF = {
  nodes: FoxNodes;
  materials: FoxMaterials;
  animations: AnimationClip[];
};

export type FoxAnimationT = "walk" | "idle" | "hit";

type FoxProps = React.JSX.IntrinsicElements["group"] & {
  currentAnimation: FoxAnimationT;
};

const Fox: React.FC<FoxProps> = ({ currentAnimation, ...props }) => {
  const group = useRef<Group>(null);
  const { nodes, materials, animations } = useGLTF(
    foxScene,
  ) as unknown as FoxGLTF;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action?.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
};

useGLTF.preload(foxScene);

export default Fox;
