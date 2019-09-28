import http from "../services/httpService";

function fetchUnit({ id }) {
  return http.get(`Units/${id}`).then(response => response.data);
}

function fetchUnitLessons({ id }) {
  return http.get(`Units/${id}/Lessons`).then(response => response.data);
}

const unitApi = {
  fetchUnit,
  fetchUnitLessons
};
export default unitApi;
