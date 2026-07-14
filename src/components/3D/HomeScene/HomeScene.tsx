"use client";

import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import Loader from "@/components/3D/Loader/Loader";
import Island from "@/components/3D/models/Island";
import Sky from "@/components/3D/models/Sky";
import Bird from "@/components/3D/models/Bird";
import Plane from "@/components/3D/models/Plane";
import {
  adjustIslandForScreenSize,
  adjustPlaneForScreenSize,
} from "@/lib/3D/screenUtils";
import Popup from "../Popup/Popup";

export default function HomeScene() {
  const [isRotating, setIsRotating] = useState(false);
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  const [currentStage, setCurrentStage] = useState<number | null>(1);

  return (
    <section className="w-full h-screen relative">
      <Popup currentStage={currentStage} />
      <Canvas
        className={clsx(
          "w-full h-screen bg-transparent",
          isRotating ? "cursor-grabbing" : "cursor-grab",
        )}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            scale={planeScale}
            position={planePosition}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}
