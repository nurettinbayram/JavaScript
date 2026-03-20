const PI = 3.14;

export function sum(...nums) {
  return nums.reduce((num, total) => total + num);
}

export function mult(...nums) {
  return nums.reduce((num, total) => total + num);
}

export const greating = (name) => {
  return "Hello " + name;
};
