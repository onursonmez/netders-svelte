import { w as writable } from "./index3.js";
import { s as searchParamsModel } from "./searchModel.js";
const gendersModel = [
  { id: 1, title: "Erkek" },
  { id: 2, title: "Kad\u0131n" }
];
const accountModel = {
  lastName: "",
  firstName: "",
  email: "",
  phone: "",
  gender: null,
  country: null,
  city: null,
  county: null,
  outsideTurkey: false
};
const aboutModel = {
  title: "",
  about: ""
};
const userStore = writable(null);
const teacherSearchParamsStore = writable(searchParamsModel);
const gendersStore = writable(gendersModel);
export {
  aboutModel as a,
  accountModel as b,
  gendersStore as g,
  teacherSearchParamsStore as t,
  userStore as u
};
