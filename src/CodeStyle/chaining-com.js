const rename = curry((keysMap, obj) => {
  // 구현부 생략
})

const omittedAge = _.chain(person)
  .omit(['age'])
  .value()

const result = rename({work: 'job'}, omittedAge)