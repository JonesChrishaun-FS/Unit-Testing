const cardValidate = (num) => {
  //Check if the input is a string and contains only digits
  //Check if the length of the credit card number is within valid range
  if (num == null || num.length < 12 || num.length > 16) {
    return "Invalid Credit Card";
  }

  const maskedCard = "*".repeat(num.length - 4);
  return maskedCard;
};

module.exports = cardValidate;
