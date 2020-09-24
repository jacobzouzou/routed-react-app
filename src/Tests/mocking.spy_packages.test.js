// const mathjs = require("../components/maths")
import mathjs from "../../modules/maths";

test(`The mathjs log function`, () => {

  //spy is nether used
  const spy = jest.spyOn(mathjs, "sum");

  const result = mathjs.sum(10000, 10);
  expect(mathjs.sum).toHaveBeenCalled();
  expect(mathjs.sum).toHaveBeenCalledWith(10000, 10);
});
