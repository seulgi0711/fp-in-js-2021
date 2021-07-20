import { curry, omit, pipe } from 'lodash/fp';

const rename = curry((keysMap, obj) => {
  // 구현부 생략
})

pipe(
  omit(['age']),
  rename({work: 'job'}),
)(person)