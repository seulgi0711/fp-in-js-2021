const rename = curry((keysMap, obj) => {
  // 구현부 생략
})

R.pipe(
  R.omit(['age']),
  rename({work: 'job'}),
)(person)