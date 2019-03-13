import _ from "lodash";

const Units = [
  {
    id: "1",
    name: "Alimentación Saludable",
    trainingId: "1",
    description: "",
    image: "nu1.png",
    numberOfLessons: 4,
    lessonsFinished: 4,
    order: 1
  },
  {
    id: "2",
    name: "Combinaciones Saludables",
    trainingId: "1",
    description: "",
    image: "nu2.png",
    numberOfLessons: 5,
    lessonsFinished: 2,
    order: 2
  },
  {
    id: "3",
    name: "Mujeres Embarazadas, Lactantes y sus Bebés",
    trainingId: "1",
    description: "",
    image: "nu3.png",
    numberOfLessons: 4,
    lessonsFinished: 0,
    order: 3
  },
  {
    id: "4",
    name: "Manejo adecuado de los alimentos",
    trainingId: "1",
    description: "",
    image: "nu4.png",
    numberOfLessons: 5,
    lessonsFinished: 0,
    order: 4
  },
  {
    id: "5",
    name: "Hábitos Saludables",
    trainingId: "1",
    description: "",
    image: "nu5.png",
    numberOfLessons: 4,
    lessonsFinished: 0,
    order: 4
  },
  {
    id: "6",
    name: "Airplane",
    trainingId: 2,
    description: "",
    image: "nu1.png",
    numberOfLessons: 5,
    lessonsFinished: 0,
    order: 4
  },
  {
    id: "7",
    name: "Wedding Crashers",
    trainingId: 2,
    description: "",
    image: "nu1.png",
    numberOfLessons: 5,
    lessonsFinished: 2,
    order: 4
  },
  {
    id: "8",
    name: "Gone Girl",
    trainingId: 3,
    description: "",
    image: "nu1.png",
    numberOfLessons: 5,
    lessonsFinished: 2,
    order: 4
  },
  {
    id: "9",
    name: "The Sixth Sense",
    trainingId: 3,
    description: "",
    image: "nu1.png",
    numberOfLessons: 5,
    lessonsFinished: 2,
    order: 4
  }
];

export function getUnits() {
  return Units;
}

export function getUnit(id) {
  return Units.find(m => m.id === id);
}

export function getUnitsByTrainingId(id) {
  const filtered = Units.filter(u => u.trainingId === id);
  const sorted = _.orderBy(filtered, "order", "asc");
  return sorted;
  /* filtered = Units.filter(u =>
    u.id.startsWith(searchQuery.toLowerCase())
  ); */
}
