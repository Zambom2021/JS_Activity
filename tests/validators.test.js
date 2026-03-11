const { validateEmail, validateCPF } = require("../src/validators");

describe("Validação de Email", () => {

  test("deve validar email correto", () => {
    expect(validateEmail("teste@email.com")).toBe(true);
  });

  test("deve rejeitar email inválido", () => {
    expect(validateEmail("teste@email")).toBe(false);
  });

});

describe("Validação de CPF", () => {

  test("deve validar CPF no formato correto", () => {
    expect(validateCPF("123.456.789-10")).toBe(true);
  });

  test("deve rejeitar CPF inválido", () => {
    expect(validateCPF("12345678910")).toBe(false);
  });

});
