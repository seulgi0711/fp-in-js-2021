import { omit, pipe } from 'lodash/fp';

pipe(
  omit(['age']),
)(person)