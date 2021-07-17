const pipe = (...fns) => {
  return (...args) => {
    return fns.reduce(
      (res, fn) => [fn.call(null, ...res)],
      args
    )[0];
  }
};