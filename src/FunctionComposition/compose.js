const compose = (...fns) => {
  return (...args) => {
    return fns.reduceRight(
      (res, fn) => [fn.call(null, ...res)],
      args
    )[0];
  }
};