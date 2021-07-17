// 제곱 계산을 합니다.
const pow = (num1, num2) => {
  return Math.pow(num1, num2);
}

// 숫자를 음수로 만듭니다.
const negate = (num) => {
  return num * -1;
}

// 숫자에 더하기 1을 합니다.
const inc = (num) => {
  return num + 1;
}

inc(negate(pow(2, 4))); // -15