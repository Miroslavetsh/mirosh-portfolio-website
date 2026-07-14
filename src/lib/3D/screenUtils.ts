import type { Axis } from "./types";

export const adjustIslandForScreenSize = () => {
  if (typeof window === "undefined") return [];

  let screenScale: Axis | null = null;
  const screenPosition: Axis = [0, -4.5, -43];
  const screenRotation: Axis = [0.1, 4.7, 0];

  if (window.innerWidth < 768) {
    screenScale = [0.9, 0.9, 0.9];
  } else {
    screenScale = [1, 1, 1];
  }

  return [screenScale, screenPosition, screenRotation];
};

export const adjustPlaneForScreenSize = () => {
  if (typeof window === "undefined") return [];

  let screenScale: Axis | null = null;
  let screenPosition: Axis | null = null;

  if (window.innerWidth < 768) {
    screenScale = [1.5, 1.5, 1.5];
    screenPosition = [0, -1.5, 0];
  } else {
    screenScale = [3, 3, 3];
    screenPosition = [0, -4, -4];
  }

  return [screenScale, screenPosition];
};
