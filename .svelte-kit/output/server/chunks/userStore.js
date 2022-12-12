import { w as writable } from "./index3.js";
import { g as gendersModel } from "./userModel.js";
import { s as searchParamsModel } from "./searchModel.js";
const userStore = writable(null);
const teacherSearchParamsStore = writable(searchParamsModel);
const gendersStore = writable(gendersModel);
export {
  gendersStore as g,
  teacherSearchParamsStore as t,
  userStore as u
};
