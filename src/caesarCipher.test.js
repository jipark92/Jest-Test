const caesar = require('./caesarCipher')

test('works with single letters', () => {
    expect(caesar('A', 1)).toBe('B');
});
