function calculator(a, b, op) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") return a / b;
  else return "Invalid Operator";
}

module.exports = calculator;
