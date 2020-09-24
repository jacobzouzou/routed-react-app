// const mathjs = require("../components/maths")
import mathjs from "../../modules/maths";

test(`The mathjs log function`, () => {

  mathjs.sum = jest.fn((a,b)=>a+b);

  const result = mathjs.sum(10000, 10);
  expect(result).toBe(10010)
  expect(mathjs.sum).toHaveBeenCalled();
  expect(mathjs.sum).toHaveBeenCalledWith(10000, 10);
});
