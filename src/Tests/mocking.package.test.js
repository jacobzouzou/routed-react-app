// const mathjs = require("../../__mocks__/maths")
import mathjs from "../../__mocks__/maths";

test(`The mathjs sub function`, () => {
  const result = mathjs.sub(10000, 1000);
  expect(result).toBe(9000);
  expect(mathjs.sub).toHaveBeenCalled();
  expect(mathjs.sub).toHaveBeenCalledWith(10000, 1000);
});
