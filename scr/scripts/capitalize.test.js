const capitalize = require('./capitalize');

test('capitalize the string', () => {
    expect(capitalize("reimari")).toBe("Reimari");
});