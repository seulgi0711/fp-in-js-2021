import R from 'ramda';

const startCase = (str) => {
  return R.replace(/(\b\w(?!\s))/g, R.toUpper, str);
}

R.pipe(
  R.map(R.replace(/(_|-)/, ' ')),
  R.map(startCase),
  R.sortBy(R.identity)
)(names);