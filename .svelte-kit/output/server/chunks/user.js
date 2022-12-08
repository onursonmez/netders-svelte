import { q as get_store_value } from "./index.js";
import { t as teacherSearchParamsStore, v as viewedTeacherStore } from "./userStore.js";
async function getUsers(params = {}) {
  var _a, _b, _c, _d, _e, _f;
  const searchParams = Object.entries(params).length > 0 ? params : get_store_value(teacherSearchParamsStore);
  const result = await fetch(
    "http://api.nd.io/user/teachers",
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
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
  return body.result;
}
async function getUserByToken(token) {
  if (!token) {
    return {};
  }
  const response = await fetch(
    "http://api.nd.io/user/get_user_by_token",
    {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        "token": token
      })
    }
  );
  let result = await response.json();
  return result.result;
}
async function photo(username) {
  const response = await fetch(
    "http://api.nd.io/user/photo/" + username,
    {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    }
  );
  const body = await response.json();
  return body.result;
}
async function getTeacherSearchStoreParamsBySearchParams(params = []) {
  const response = await fetch(
    "http://api.nd.io/user/gtsspbsp",
    {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        query: params == null ? void 0 : params.query
      })
    }
  );
  const body = await response.json();
  teacherSearchParamsStore.set(body.result);
  return body.result;
}
async function getTeacher(username) {
  const response = await fetch(
    "http://api.nd.io/user/one_teacher/" + username,
    {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    }
  );
  const body = await response.json();
  viewedTeacherStore.set(body.result);
  return body;
}
export {
  getTeacher as a,
  getTeacherSearchStoreParamsBySearchParams as b,
  getUserByToken as c,
  getUsers as g,
  photo as p
};
