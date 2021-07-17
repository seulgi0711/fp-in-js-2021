compose(
  (num) => inc(num),
  (num) => negate(num),
  (num1, num2) => pow(num1, num2)
)