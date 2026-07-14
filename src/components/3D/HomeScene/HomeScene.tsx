"use client";

import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";
import Image from "next/image";

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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    const audio = new Audio("/assets/sakura.mp3");
    audio.volume = 0.4;
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlayingMusic]);

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
          "w-full h-screen bg-transparent touch-none",
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

      <div className="absolute bottom-2 left-2">
        <Image
          src={`/assets/icons/${isPlayingMusic ? "soundoff" : "soundon"}.png`}
          width={32}
          height={32}
          alt="sound-icon"
          className="cursor-pointer"
          onClick={() => setIsPlayingMusic((prev) => !prev)}
        />
      </div>
    </section>
  );
}
