import _ from "lodash";

const Lessons = [
  {
    id: "1",
    name: "La Alimentación",
    trainingId: "1",
    description: "",
    image: "ico_gray_1.png",
    order: 1
  },
  {
    id: "2",
    name: "Los Alimentos",
    trainingId: "1",
    description: "",
    image: "ico_gray_2.png",
    order: 2
  },
  {
    id: "3",
    name: "El Plato Saludable",
    trainingId: "1",
    description: "",
    image: "ico_gray_3.png",
    order: 3
  },
  {
    id: "3",
    name: "Los Colores de los Alimentos",
    trainingId: "1",
    description: "",
    image: "ico_gray_3.png",
    order: 4
  }
];

export function getLessons() {
  return Lessons;
}

export function getLesson(id) {
  return Lessons.find(u => u.id === id);
}

export function getLessonsByUnitId(id) {
  const filtered = Lessons.filter(u => u.trainingId === id);
  const sorted = _.orderBy(filtered, "order", "asc");
  return sorted;
}
