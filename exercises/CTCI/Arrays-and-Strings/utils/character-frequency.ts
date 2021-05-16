export const charFreq = (str: string): Record<string, number> => {
  const res = Object.create(null);

  for (const char of str) {
    if (char === " ") continue;

    if (res[char]) res[char] += 1;
    else res[char] = 1;
  }

  return res;
};
