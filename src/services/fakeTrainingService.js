export const trainings = [
  {
    id: "4",
    name: "Equfami para todos",
    image: "image4.png",
    app: "equfami",
    progress: 0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis lobortis velit at finibus. Donec euismod maximus eleifend."
  },
  {
    id: "5",
    name: "Climafami para todos",
    image: "image5.png",
    app: "climafami",
    progress: 0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis lobortis velit at finibus. Donec euismod maximus eleifend."
  },
  {
    id: "1",
    name: "Nutrifami para Todos",
    image: "image1.png",
    app: "nutrifami",
    progress: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis lobortis velit at finibus. Donec euismod maximus eleifend."
  },
  {
    id: "2",
    name: "Nutrifami Pácifico",
    image: "image2.png",
    app: "nutrifami",
    progress: 76,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis lobortis velit at finibus. Donec euismod maximus eleifend."
  },
  {
    id: "3",
    name: "Nutrifami Senegal",
    image: "image3.png",
    app: "nutrifami",
    progress: 32,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis lobortis velit at finibus. Donec euismod maximus eleifend."
  }
];

export function getTrainings() {
  return trainings;
}

export function getTraining(id) {
  return trainings.find(m => m.id === id);
}
