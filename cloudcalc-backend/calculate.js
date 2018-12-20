module.exports = {
  operate(first, op, second) {
    first = JSON.parse(first);
    second = JSON.parse(second);
    switch(op) {
      case '+':
        return (first + second);

      case '-':
        return (first - second);

      case '/':
        return (first / second);

      case 'x':
      case '*':
        return (first * second);

      default:
        return 0
    }
  }
}