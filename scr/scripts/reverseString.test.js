import reverseString from './reverseString'

test('flying becomes gniyly', () => {
    expect(reverseString("flying")).toBe("gniylf")
});

test('flying becomes gniyly', () => {
    expect(reverseString("flying is cool")).toBe("looc si gniylf")
})

test('flying becomes gniyly', () => {
    expect(reverseString("flying_bad")).toBe("dab_gniylf")
})