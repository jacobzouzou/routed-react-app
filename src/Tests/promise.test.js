const uppercase = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject("Empty string");
      return;
    }
    resolve(str.toUpperCase());
  });
};

//Promise
test(`uppercase 'test' to equal 'TEST'`, () => {
  return uppercase("test").then((str) => {
    expect(str).toBe("TEST");
  });
});

//Promise catch
test(`uppercase 'test' to equal 'TEST'`, () => {
  return uppercase("").catch((e) => {
    expect(e).toMatch("Empty string");
  });
});

//async/await
test(`uppercase 'test' to equal 'TEST'`, async () => {
  const str = await uppercase("test");
  expect(str).toBe("TEST");
});
