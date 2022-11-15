import { d as dev } from "../../../../chunks/environment.js";
import { t as get_store_value } from "../../../../chunks/index.js";
import { b as teacherItemsStore, a as teacherTotalStore, t as teacherSearchParamsStore } from "../../../../chunks/userStore.js";
async function getUsers() {
  var _a, _b, _c, _d, _e, _f;
  const searchParams = get_store_value(teacherSearchParamsStore);
  const result = await fetch(
    "http://api.nd.io/user/teachers",
    {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        "page": searchParams.page,
        "pageSize": searchParams.pageSize,
        "keyword": searchParams.keyword,
        "budget": searchParams.budget,
        "cityId": (_a = searchParams.cityObject) == null ? void 0 : _a.id,
        "countyId": (_b = searchParams.countyObject) == null ? void 0 : _b.id,
        "subjectId": (_c = searchParams.subjectObject) == null ? void 0 : _c.id,
        "levelId": (_d = searchParams.levelObject) == null ? void 0 : _d.id,
        "lessonTypeId": (_e = searchParams.lessonTypeObject) == null ? void 0 : _e.id,
        "genderId": (_f = searchParams.genderObject) == null ? void 0 : _f.id
      })
    }
  );
  const body = await result.json();
  teacherItemsStore.set(body.result.items);
  teacherTotalStore.set(body.result.total);
  return body.result;
}
const csr = dev;
const prerender = true;
async function load({ params }) {
  if (params && params.catchall) {
    const urlParams = params.catchall.split("/");
    if (urlParams.length > 0) {
      urlParams[0];
      urlParams[1];
    }
  }
  await getUsers();
}
export {
  csr,
  load,
  prerender
};
