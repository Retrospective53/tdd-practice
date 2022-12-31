import calculator from "./calculator";

test('2 + 2 = 4', () => {
    expect(calculator.add(2, 2)).toBe(4)
});

test('30 - 2 = 28', () => {
    expect(calculator.substract(30, 2)).toBe(28)
});

test('8 * 2 = 16', () => {
    expect(calculator.multiply(8, 2)).toBe(16)
});

test('16 / 2 = 8', () => {
    expect(calculator.divide(16, 2)).toBe(8)
});