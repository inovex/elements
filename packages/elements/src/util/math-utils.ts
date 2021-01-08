// https://stackoverflow.com/a/27865285
export function getPrecision(num: number) {
  if (!isFinite(num)) {
    return 0;
  }

  let e = 1,
    p = 0;
  while (Math.round(num * e) / e !== num) {
    e *= 10;
    p++;
  }
  return p;
}
