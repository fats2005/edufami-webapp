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

export async function getTrainingsData() {
  const versions = await getVersions();
  console.log(versions);
  const localVersion = JSON.parse(localStorage.getItem(versionKey));

  const endpoints = ["trainings", "units", "lessons", "steps", "options"];

  await endpoints.forEach(async endpoint => {
    if (!(localVersion && versions[endpoint] === localVersion[endpoint])) {
      console.log("Download " + endpoint);
      const { data } = await http.get(`/${endpoint}`);
      if (endpoint === "options") {
        localStorage.setItem(endpoint, JSON.stringify(data));
      } else {
        const dataFiltered = _.filter(data, t => t.status === "published");
        localStorage.setItem(endpoint, JSON.stringify(dataFiltered));
      }
    }
  });

  localStorage.setItem(versionKey, JSON.stringify(versions));
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

export function getNumberOfStepsofCurrentLesson() {
  return JSON.parse(localStorage.getItem(stepsOfLessonKey)).length + 1;
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
  getTrainingsData,
  getTrainings,
  getTraining,
  getUnitsByTraining,
  getUnit,
  getLessonsByUnit,
  getNumberOfLessonsByUnit,
  getStepsByLesson,
  getNumberOfStepsofCurrentLesson,
  getCurrentSteps,
  getOptionsByStep,
  startLesson,
  finishLesson,
  isLessonInProgress
};
