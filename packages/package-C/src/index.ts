import { add as addB } from '@pulchritude/demo-package-b';

export const add = (a: number, b: number) => {
  return a + b + addB(a, b);
};
