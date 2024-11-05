const cardValidate = require("./cardValidate");

describe("obscure credit card numbers", () => {
  test("Obscures all but last 4 digits for a valid 16-digit credit card", () => {
    expect(cardValidate("1234567812345678")).toBe("************5678");
  });
});
