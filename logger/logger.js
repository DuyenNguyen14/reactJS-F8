import { TYPE_ERROR, TYPE_LOG, TYPE_WARN } from "../constants.js";

function logger_4(log, type = TYPE_LOG) {
  console[type](log);
}

export default logger_4;
