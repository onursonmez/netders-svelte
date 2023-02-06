import { w as writable } from "./index3.js";
import { g as gendersModel, l as lastNamePrivacyModel } from "./userModel.js";
import { s as searchParamsModel } from "./searchModel.js";
const teacherSearchParamsStore = writable(searchParamsModel);
const gendersStore = writable(gendersModel);
const lastNamePrivacyStore = writable(lastNamePrivacyModel);
export {
  gendersStore as g,
  lastNamePrivacyStore as l,
  teacherSearchParamsStore as t
};
