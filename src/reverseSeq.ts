export const reverseSeq = (n: number): number[] => [...Array(n)].map((el, i) => n - i);

console.log(reverseSeq(5));
