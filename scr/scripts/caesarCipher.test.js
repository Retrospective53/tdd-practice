import caesarCipher from "./caesarCipher"

test('key of 1, abcde becomes bcdef', () => {
    expect(caesarCipher("abcde", 1)).toBe("bcdef")
})