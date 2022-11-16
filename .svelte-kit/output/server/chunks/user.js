import { q as get_store_value } from "./index.js";
import { a as teacherItemsStore, b as teacherTotalStore, t as teacherSearchParamsStore } from "./userStore.js";
async function getUsers(params = []) {
  var _a, _b, _c, _d, _e, _f;
  const searchParams = params.length > 0 ? params : get_store_value(teacherSearchParamsStore);
  const result = await fetch(
    "http://api.nd.io/user/teachers",
    {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        "page": searchParams == null ? void 0 : searchParams.page,
        "pageSize": searchParams == null ? void 0 : searchParams.pageSize,
        "keyword": searchParams == null ? void 0 : searchParams.keyword,
        "budget": searchParams == null ? void 0 : searchParams.budget,
        "cityId": (_a = searchParams == null ? void 0 : searchParams.cityObject) == null ? void 0 : _a.id,
        "countyId": (_b = searchParams == null ? void 0 : searchParams.countyObject) == null ? void 0 : _b.id,
        "subjectId": (_c = searchParams == null ? void 0 : searchParams.subjectObject) == null ? void 0 : _c.id,
        "levelId": (_d = searchParams == null ? void 0 : searchParams.levelObject) == null ? void 0 : _d.id,
        "lessonTypeId": (_e = searchParams == null ? void 0 : searchParams.lessonTypeObject) == null ? void 0 : _e.id,
        "genderId": (_f = searchParams == null ? void 0 : searchParams.genderObject) == null ? void 0 : _f.id
      })
    }
  );
  const body = await result.json();
  teacherItemsStore.set(body.result.items);
  teacherTotalStore.set(body.result.total);
  return body.result;
}
export {
  getUsers as g
};
