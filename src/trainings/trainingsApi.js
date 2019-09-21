import http from "../services/httpService";

function fetchTrainings() {
  return http.get("trainings").then(response => response.data);
}

const trainingsApi = {
  fetchTrainings
};
export default trainingsApi;
