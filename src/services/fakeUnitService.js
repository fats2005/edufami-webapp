const Units = [
  {
    id: "1",
    title: "Terminator",
    genre: { id: "8", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    id: "2",
    title: "Die Hard",
    genre: { id: "8", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5
  },
  {
    id: "7",
    title: "Get Out",
    genre: { id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5
  },
  {
    id: "9",
    title: "Trip to Italy",
    genre: { id: "4", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    id: "a",
    title: "Airplane",
    genre: { id: "4", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    id: "b",
    title: "Wedding Crashers",
    genre: { id: "4", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    id: "e",
    title: "Gone Girl",
    genre: { id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5
  },
  {
    id: "f",
    title: "The Sixth Sense",
    genre: { id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5
  },
  {
    id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { id: "8", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  }
];

export function getUnits() {
  return Units;
}

export function getUnit(id) {
  return Units.find(m => m.id === id);
}
