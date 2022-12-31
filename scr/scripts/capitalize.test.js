import capitalize from "./capitalize";

test('capitalize the string', () => {
    expect(capitalize("reimari")).toBe("Reimari");
});

test('capitalize the string', () => {
    expect(capitalize(12332)).toBe("Not a string");
});

test('capitalize the string', () => {
    expect(capitalize("reimari is the truth")).toBe("Reimari Is The Truth");
});