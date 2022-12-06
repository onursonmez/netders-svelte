import { w as writable } from "./index3.js";
const userModel = {
  email: "",
  username: "",
  firstName: "",
  lastName: "",
  phone: "",
  token: "",
  roles: []
};
const gendersModel = [
  { id: 1, title: "Erkek" },
  { id: 2, title: "Kad\u0131n" }
];
const searchParamsModel = {
  "page": 1,
  "pageSize": 12,
  "keyword": "",
  "budget": "",
  "cityObject": void 0,
  "countyObject": void 0,
  "subjectObject": void 0,
  "levelObject": void 0,
  "lessonTypeObject": void 0,
  "genderObject": void 0
};
const userStore = writable(userModel);
const teacherSearchParamsStore = writable(searchParamsModel);
const teacherItemsStore = writable([]);
const teacherTotalStore = writable(0);
const viewedTeacherStore = writable([]);
const gendersStore = writable(gendersModel);
export {
  teacherTotalStore as a,
  teacherItemsStore as b,
  userModel as c,
  gendersStore as g,
  teacherSearchParamsStore as t,
  userStore as u,
  viewedTeacherStore as v
};
