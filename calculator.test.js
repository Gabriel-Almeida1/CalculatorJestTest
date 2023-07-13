const calculator = require("./calculator")

test('adds 1 + 1 to equal 2', () => {
    expect(calculator.sum(1, 1)).toBe(2);
  });

test('divide 1 / 1 to equal 1', () => {
    expect(calculator.divide(1, 1)).toBe(1);
});

test('multiply 2 * 1 to equal 2', () => {
    expect(calculator.multiply(2, 1)).toBe(2);
});

test('subtract 1 - 1 to equal 0', () => {
    expect(calculator.subtract(1, 1)).toBe(0);
});