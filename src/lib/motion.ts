export type MotionTier = "full" | "light" | "static";

export const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function smoothRange(progress: number, start: number, end: number) {
  if (end <= start) return progress >= end ? 1 : 0;
  const value = clamp((progress - start) / (end - start));
  return value * value * (3 - 2 * value);
}

export function calculateScrollProgress(rectTop: number, rectHeight: number, viewportHeight: number) {
  const scrollDistance = Math.max(1, rectHeight - viewportHeight);
  return clamp(-rectTop / scrollDistance);
}

export function roomIndexFromProgress(progress: number, roomCount: number) {
  if (roomCount <= 1) return 0;
  return Math.min(roomCount - 1, Math.floor(clamp(progress) * roomCount));
}
