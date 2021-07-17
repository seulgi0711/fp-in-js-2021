import _ from 'lodash';

_.chain(names)
  .map(name => name.replace(/()_|-/, " "))
  .map(_.startCase)
  .sort()
  .value();