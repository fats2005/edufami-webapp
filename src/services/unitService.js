import http from "./httpService";

export function getUnits() {
  return http.get("/units");
}

export function getUnit(id) {
  return http.get(`/units/${id}`);
}

export function getLessonsbyUnit(id) {
  return http.get(`/units/${id}/lessons`);
}

export default {
  getUnits,
  getUnit,
  getLessonsbyUnit
};
