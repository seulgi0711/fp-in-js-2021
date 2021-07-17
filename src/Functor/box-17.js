class Box {
  constructor(value) {
    this.$value = value;
  }

  static of(value) {
    return new Box(value);
  }

  map(fn) {
    return new Box(fn(this.$value));
  }
}

const books = [
  { id: 'book1', title: 'coding with javascript' },
  { id: 'book2', title: 'speaking javaScript' },
];

const startCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const prop = curry((propName, obj) => {
  return obj[propName];
});

const findBookById = curry((id, books) => {
  return books.find((book) => book.id === id);
});

const map = curry((fn, functor) => {
  return functor.map(fn);
});

const getUpperBookTitleById = (id, books) => {
  return pipe(
    Box.of, // Box(books)
    map(findBookById(id)), // Box(book)
    map(prop('title')), // Box('book title')
  )(books);
};