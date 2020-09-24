const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
  
beforeEach(()=>{
    console.log(`Begin`)
})

afterEach(()=>{
    console.log(`End`)
})
test(`Teardow test 1`, () => {
  expect(sum(1, 1)).toBe(2);
});
test(`Teardow test 2`, () => {
  expect(mul(1, 1)).toBe(1);
});
