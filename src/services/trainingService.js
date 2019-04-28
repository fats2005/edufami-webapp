import http from "./httpService";
import _ from "lodash";

const versionKey = "version";
const trainingKey = "trainings";
const unitsKey = "units";
const lessonsKey = "lessons";
const stepsKey = "steps";
const stepsOfLessonKey = "stepsOfLesson";
const isLessonInProgressKey = "lessonInProgress";
const optionsKey = "options";

export async function getData(endpoint) {
  const versions = await getVersions();
  const localVersion = JSON.parse(localStorage.getItem(versionKey)) || {};

  if (localVersion && localVersion[endpoint] === versions[endpoint]) {
    const data = JSON.parse(localStorage.getItem(endpoint));
    return _.orderBy(data, "created", "desc");
  } else {
    console.log("getData", endpoint);
    const { data } = await http.get(`/${endpoint}`);

    let dataFiltered = data;
    if (endpoint !== "options")
      dataFiltered = _.filter(data, t => t.status === "published");

    localStorage.setItem(endpoint, JSON.stringify(dataFiltered));

    localVersion[endpoint] = versions[endpoint];
    localStorage.setItem(versionKey, JSON.stringify(localVersion));
    return dataFiltered;
  }
}

async function getVersions() {
  const { data } = await http.get("/versions/1");
  return data;
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

export function getLesson(id) {
  const lesson = JSON.parse(localStorage.getItem(lessonsKey));
  return _.filter(lesson, l => l.id === parseInt(id))[0];
}

export function getLessonsByUnit(id) {
  const lessons = JSON.parse(localStorage.getItem(lessonsKey));
  return _.filter(lessons, l => l.unitId === parseInt(id));
}

export function getNumberOfLessonsByUnit(id) {
  return getLessonsByUnit(id).length;
}

export async function getStepsByLesson(id) {
  await getData("steps");
  await getData("options");
  const steps = JSON.parse(localStorage.getItem(stepsKey));
  const stepsFiltered = _.filter(steps, s => s.lessonId === parseInt(id));
  const stepsOrdered = _.orderBy(stepsFiltered, "order", "asc");
  localStorage.setItem(stepsOfLessonKey, JSON.stringify(stepsOrdered));
  localStorage.setItem("currentLesson", JSON.stringify(getLesson(id)));
  return stepsOrdered;
}

export function getNumberOfStepsofCurrentLesson() {
  return JSON.parse(localStorage.getItem(stepsOfLessonKey)).length;
}

export function getCurrentLesson() {
  return JSON.parse(localStorage.getItem("currentLesson"));
}

export function getCurrentSteps(orderId) {
  const steps = JSON.parse(localStorage.getItem(stepsOfLessonKey));
  const currentStep = _.filter(steps, s => s.order === parseInt(orderId))[0];
  const nextStep = _.filter(steps, s => s.order === parseInt(orderId) + 1)[0];
  return { currentStep, nextStep };
}

export function getOptionsByStep(stepId) {
  const options = JSON.parse(localStorage.getItem(optionsKey));
  const optionsFiltered = _.filter(options, o => o.stepId === parseInt(stepId));
  return optionsFiltered;
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
  getData,
  getTrainings,
  getTraining,
  getUnitsByTraining,
  getUnit,
  getLessonsByUnit,
  getNumberOfLessonsByUnit,
  getStepsByLesson,
  getNumberOfStepsofCurrentLesson,
  getCurrentLesson,
  getCurrentSteps,
  getOptionsByStep,
  startLesson,
  finishLesson,
  isLessonInProgress
};
