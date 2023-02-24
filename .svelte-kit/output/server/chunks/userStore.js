import { w as writable } from "./index2.js";
import { g as gendersModel, l as lastNamePrivacyModel } from "./userModel.js";
const gendersStore = writable(gendersModel);
const lastNamePrivacyStore = writable(lastNamePrivacyModel);
export {
  gendersStore as g,
  lastNamePrivacyStore as l
};
