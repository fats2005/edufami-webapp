import http from "../services/httpService";

function fetchTrainings() {
  return http.get("Trainings").then((response) => response.data);
}

function fetchTraining({ id }) {
  return http.get(`Trainings/${id}`).then((response) => response.data);
}

function fetchTrainingUnits({ id }) {
  return http.get(`Trainings/${id}/Units`).then((response) => response.data);
}

const trainingsApi = {
  fetchTrainings,
  fetchTraining,
  fetchTrainingUnits,
};
export default trainingsApi;
