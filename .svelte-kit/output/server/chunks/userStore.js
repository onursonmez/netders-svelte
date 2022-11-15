import { w as writable } from "./index2.js";
const teacherSearchParamsStore = writable({
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
});
const teacherItemsStore = writable([]);
const teacherTotalStore = writable(0);
const teacherGendersStore = writable([
  { id: 1, title: "Erkek" },
  { id: 2, title: "Kad\u0131n" }
]);
export {
  teacherTotalStore as a,
  teacherItemsStore as b,
  teacherGendersStore as c,
  teacherSearchParamsStore as t
};
