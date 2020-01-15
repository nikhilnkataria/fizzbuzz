const Utils = {
  isMultiple: (num, mod) => num % mod === 0,
  getFizzBuzz: num => {
    switch (true) {
      case Utils.isMultiple(num, 3) && Utils.isMultiple(num, 5):
        return "FizzBuzz";
      case Utils.isMultiple(num, 3):
        return "Fizz";
      case Utils.isMultiple(num, 5):
        return "Buzz";
      default:
        return num;
    }
  },
  generateHttpResponse: (data, status) => ({
    data,
    status
  })
};

module.exports = Utils;
