import {identity, map, pipe, replace, startCase} from 'lodash/fp';

pipe(
  map(replace(/(_|-)/, ' ')),
  map(startCase),
  sortBy(identity)
)(names);