const cardValidate = require("./cardValidate");

describe("obscure credit card numbers", () => {
  test("Obscures all but last 4 digits for a valid 16-digit credit card", () => {
    expect(cardValidate("1234567812345678")).toBe("************5678");
  });

  test("Returns Invalid Credit Card for a 8-digit input", () => {
    expect(cardValidate("89003829")).toBe("Invalid Credit Card");
  });

  test("Obscures all but last 4 digits for a valid 13-digit credit card", () => {
    expect(cardValidate("4688276781258")).toBe("*********1258");
  });

  test("Returns 'Invalid Credit Card' for a 19-digit input", () => {
    expect(cardValidate("2453782938471879273")).toBe("Invalid Credit Card");
  });
});
