const dissoc = curry((dissocKey, obj) => {
  // object에서 property를 삭제하는 함수
});

const rename = curry((keysMap, obj) => {
  // object에서 property명을 바꿔주는 함수
});

const person = {
  name: 'Nakta',
  age: 15,
  work: 'developer'
};

pipe(
  dissoc('age'),
  rename({work: 'job'}),
)(person);