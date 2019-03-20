import http from "./httpService";
import _ from "lodash";

const trainingKey = "trainings";
const unitsKey = "units";
const lessonsKey = "lessons";
const stepsKey = "steps";
const stepsOfLessonKey = "stepsOfLesson";
const isLessonInProgressKey = "lessonInProgress";

export async function getTrainingsData() {
  if (false) {
    const { data: trainings } = await http.get("/trainings");
    const trainingsFiltrered = _.filter(trainings, t => t.status === "Public");
    localStorage.setItem(trainingKey, JSON.stringify(trainingsFiltrered));

    const { data: units } = await http.get("/units");
    localStorage.setItem(unitsKey, JSON.stringify(units));

    const { data: lessons } = await http.get("/lessons");
    localStorage.setItem(lessonsKey, JSON.stringify(lessons));

    const { data: steps } = await http.get("/steps");
    localStorage.setItem(stepsKey, JSON.stringify(steps));
  }
}

export function getTrainings() {
  const trainings = JSON.parse(localStorage.getItem(trainingKey));
  return _.orderBy(trainings, "created", "desc");
}

export function getTraining(id) {
  const trainings = JSON.parse(localStorage.getItem(trainingKey));
  return _.filter(trainings, t => t.id === parseInt(id))[0];
}

export function getUnitsByTraining(id) {
  const trainings = JSON.parse(localStorage.getItem(unitsKey));
  return _.filter(trainings, t => t.trainingId === parseInt(id));
}

export function getUnit(id) {
  const units = JSON.parse(localStorage.getItem(unitsKey));
  return _.filter(units, u => u.id === parseInt(id))[0];
}

export function getLessonsByUnit(id) {
  const lessons = JSON.parse(localStorage.getItem(lessonsKey));
  return _.filter(lessons, l => l.unitId === parseInt(id));
}

export function getNumberOfLessonsByUnit(id) {
  return getLessonsByUnit(id).length;
}

export function getStepsByLesson(id) {
  const steps = JSON.parse(localStorage.getItem(stepsKey));
  const stepsFiltered = _.filter(steps, s => s.lessonId === parseInt(id));
  const stepsOrdered = _.orderBy(stepsFiltered, "order", "asc");
  localStorage.setItem(stepsOfLessonKey, JSON.stringify(stepsOrdered));
  return stepsOrdered;
}

export function getCurrentSteps(orderId) {
  const steps = JSON.parse(localStorage.getItem(stepsOfLessonKey));
  const currentStep = _.filter(steps, s => s.order === parseInt(orderId))[0];
  const nextStep = _.filter(steps, s => s.order === parseInt(orderId) + 1)[0];
  return { currentStep, nextStep };
}

export function startLesson() {
  localStorage.setItem(isLessonInProgressKey, true);
}

export function finishLesson() {
  localStorage.removeItem(isLessonInProgressKey);
  localStorage.removeItem(stepsOfLessonKey);
}

export function isLessonInProgress() {
  return localStorage.getItem(isLessonInProgressKey);
}

export default {
  getTrainingsData,
  getTrainings,
  getTraining,
  getUnitsByTraining,
  getUnit,
  getLessonsByUnit,
  getNumberOfLessonsByUnit,
  getStepsByLesson,
  getCurrentSteps,
  startLesson,
  finishLesson,
  isLessonInProgress
};
