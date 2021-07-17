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

const myComposedFunc = compose(
  (num) => inc(num),
  (num /* 16 */) => negate(num), // -16
  (num1 /* 2 */, num2 /* 4 */) => pow(num1, num2) // 16
)

myComposedFunc(2, 4);