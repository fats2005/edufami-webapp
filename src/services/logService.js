// import Raven from "raven-js";

function init() {
  // Raven.config("https://a4a10951afb04814a0e5218d0fc91f4f@sentry.io/1411854", {
  //   release: "1-0-0",
  //   environment: "development-test"
  // }).install();
}

function log(error) {
  // Raven.captureException(error);
  console.error(error);
}

export default {
  init,
  log
};
