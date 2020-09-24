//callbakc
function uppercase(str, callback) {
  callback(str.toUpperCase());
}
test(` uppercase 'test' to equal 'TEST' `, (done) => {
    uppercase('test', (str) => {
        expect(str).toBe('TEST')
        done()
    })
})
