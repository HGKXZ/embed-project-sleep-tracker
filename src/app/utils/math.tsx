export function roundTo(num: number, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round(num * factor) / factor;
}