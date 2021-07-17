const myComposedFunc = compose(
  inc,
  negate,
  pow
)

myComposedFunc(2, 4); // -15