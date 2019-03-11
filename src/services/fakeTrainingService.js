export const trainings = [
  {
    id: "1",
    name: "Nutrifami para todos",
    app: "Nutrifami",
    progress: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis lobortis velit at finibus. Donec euismod maximus eleifend."
  },
  {
    id: "2",
    name: "Nutrifami pácifico",
    app: "Nutrifami",
    progress: 76,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis lobortis velit at finibus. Donec euismod maximus eleifend."
  },
  {
    id: "3",
    name: "Nutrifami Senegal",
    app: "Nutrifami",
    progress: 32,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis lobortis velit at finibus. Donec euismod maximus eleifend."
  },
  {
    id: "4",
    name: "Equifami para todos",
    app: "Equifami",
    progress: 0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis lobortis velit at finibus. Donec euismod maximus eleifend."
  },
  {
    id: "5",
    name: "Climafami para todos",
    app: "Climafami",
    progress: 0,
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
