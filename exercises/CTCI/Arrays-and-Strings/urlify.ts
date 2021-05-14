/**
 * Runtime complexity:
 * O(n) Time
 * O(1) Space
 */

export const urlify = (word: string) => word.trim().replace(/\s/g, "%20");
