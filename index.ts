import * as dayjs from "dayjs";

type Op2 = (a: number, b: number) => number;
export const add: Op2 = (a, b) => a + b;
export const substract: Op2 = (a, b) => a - b;
export const divide: Op2 = (a, b) => a / b;
