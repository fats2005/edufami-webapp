import http from "./httpService";

export function getTrainings() {
  return http.get("/trainings");
}

export function getTraining(id) {
  return http.get(`/trainings/${id}`);
}

export function getUnitsbyTraining(id) {
  return http.get(`/trainings/${id}/units`);
}

export default {
  getTrainings,
  getTraining,
  getUnitsbyTraining
};
