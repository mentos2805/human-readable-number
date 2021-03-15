module.exports = function toReadable (number) {
  const numbers_1 = {
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
    5 : "five",
    6 : "six",
    7 : "seven",
    8 : "eight",
    9 : "nine"
};
 
const numbers_2 = {
    10 : "ten",
    11 : "eleven",
    12 : "twelve",
    13 : "thirteen",
    14 : "fourteen",
    15 : "fifteen",
    16 : "sixteen",
    17 : "seventeen",
    18 : "eighteen",
    19 : "nineteen"
};
 
const numbers_3 = {
    20 : "twenty",
    30 : "thirty",
    40 : "forty",
    50 : "fifty",
    60 : "sixty",
    70 : "seventy",
    80 : "eighty",
    90 : "ninety"
};
 
function decimals(num) {
  if(num < 10) {
      return numbers_1[num];
  }
 
  if(num >= 10 && num < 20 ) {
      return numbers_2[num];
  }
 
  if(num >= 20 && num < 100) {
    let first = Math.trunc(num / 10) * 10;
    let second = num % 10;
    var res = numbers_3[first];
    if (second != 0) {
      res += ' ' + numbers_1[second];
    }
    return res;
  }
}
 
if(number == 0) {
  return "zero";
}
if(number < 100) {
  return decimals(number);
} else {
  let countOfHundreds = Math.trunc(number / 100);
  let dec = number % 100;
  
  let res = numbers_1[countOfHundreds] + ' hundred';
  if (dec > 0)  {
    res += ' ' + decimals(number % 100);
  }
  return res;
}
}
