import http from "./httpService";

export function getTrainings() {
  return http.get("/trainings");
}

export default {
  getTrainings
};
