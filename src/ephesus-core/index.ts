export type Foo = string;

const foo: Foo = "test";

type DoMath = (a: number, b: number) => number;
export const doMath: DoMath = (a, b) => a + b;

export { foo };
export * from "./Button";
