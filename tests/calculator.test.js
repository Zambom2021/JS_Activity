const { add, subtract, multiply, divide } = require("../src/calculator");

describe("Calculadora", () => {

  test("deve somar dois números", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("deve subtrair números", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("deve multiplicar números", () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test("deve dividir números", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("deve lançar erro ao dividir por zero", () => {
    expect(() => divide(10, 0)).toThrow("Divisão por zero não é permitida");
  });

});
