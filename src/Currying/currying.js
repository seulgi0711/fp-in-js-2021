const curry = (fn) => {
  const arity = fn.length;
  
  return function _curry(...args) {
    if (args.length < arity) {
      return _curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
}