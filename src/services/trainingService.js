import _ from "lodash";
import http from "./httpService";

const versionKey = "version";
const trainingKey = "trainings";
const unitsKey = "units";
const lessonsKey = "lessons";
const stepsKey = "steps";
const stepsOfLessonKey = "stepsOfLesson";
const isLessonInProgressKey = "lessonInProgress";
const optionsKey = "options";

async function getVersions() {
  const { data } = await http.get("/versions/1");
  return data;
}

async function getData(endpoint) {
  const versions = await getVersions();
  const localVersion = JSON.parse(localStorage.getItem(versionKey)) || {};

  if (localVersion && localVersion[endpoint] === versions[endpoint]) {
    const data = JSON.parse(localStorage.getItem(endpoint));
    return _.orderBy(data, "created", "desc");
  }
  const { data } = await http.get(`/${endpoint}`);

  let dataFiltered = data;
  if (endpoint !== "options") dataFiltered = _.filter(data, (t) => t.status === "published");

  localStorage.setItem(endpoint, JSON.stringify(dataFiltered));

  localVersion[endpoint] = versions[endpoint];
  localStorage.setItem(versionKey, JSON.stringify(localVersion));
  return dataFiltered;
}

function getTrainings() {
  const trainings = JSON.parse(localStorage.getItem(trainingKey));
  return _.orderBy(trainings, "created", "desc");
}

function getTraining(id) {
  const trainings = JSON.parse(localStorage.getItem(trainingKey));
  return _.filter(trainings, (t) => t.id === parseInt(id, 10))[0];
}

function getUnitsByTraining(id) {
  const trainings = JSON.parse(localStorage.getItem(unitsKey));
  return _.filter(trainings, (t) => t.trainingId === parseInt(id, 10));
}

function getUnit(id) {
  const units = JSON.parse(localStorage.getItem(unitsKey));
  return _.filter(units, (u) => u.id === parseInt(id, 10))[0];
}

function getLesson(id) {
  const lesson = JSON.parse(localStorage.getItem(lessonsKey));
  return _.filter(lesson, (l) => l.id === parseInt(id, 10))[0];
}

function getLessonsByUnit(id) {
  const lessons = JSON.parse(localStorage.getItem(lessonsKey));
  return _.filter(lessons, (l) => l.unitId === parseInt(id, 10));
}

function getNumberOfLessonsByUnit(id) {
  return getLessonsByUnit(id).length;
}

async function getStepsByLesson(id) {
  await getData("steps");
  await getData("options");
  const steps = JSON.parse(localStorage.getItem(stepsKey));
  const stepsFiltered = _.filter(steps, (s) => s.lessonId === parseInt(id, 10));
  const stepsOrdered = _.orderBy(stepsFiltered, "order", "asc");
  localStorage.setItem(stepsOfLessonKey, JSON.stringify(stepsOrdered));
  localStorage.setItem("currentLesson", JSON.stringify(getLesson(id)));
  return stepsOrdered;
}

function getNumberOfStepsofCurrentLesson() {
  return JSON.parse(localStorage.getItem(stepsOfLessonKey)).length;
}

function getCurrentLesson() {
  return JSON.parse(localStorage.getItem("currentLesson"));
}

function getCurrentSteps(orderId) {
  const steps = JSON.parse(localStorage.getItem(stepsOfLessonKey));
  const currentStep = _.filter(steps, (s) => s.order === parseInt(orderId, 10))[0];
  const nextStep = _.filter(steps, (s) => s.order === parseInt(orderId, 10) + 1)[0];
  return { currentStep, nextStep };
}

function getOptionsByStep(stepId) {
  const options = JSON.parse(localStorage.getItem(optionsKey));
  const optionsFiltered = _.filter(options, (o) => o.stepId === parseInt(stepId, 10));
  return optionsFiltered;
}

function startLesson() {
  localStorage.setItem(isLessonInProgressKey, true);
}

function finishLesson() {
  localStorage.removeItem(isLessonInProgressKey);

  localStorage.removeItem(stepsOfLessonKey);
}

function isLessonInProgress() {
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
  isLessonInProgress,
};
