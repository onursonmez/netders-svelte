import "./index.js";
import { s as searchParamsModel } from "./searchModel.js";
import { t as toast } from "./toast.js";
function responseService(body) {
  if (Object.entries(body).length > 0) {
    if (Object.values(body.errors).length > 0) {
      Object.values(body.errors).forEach((i) => {
        toast(i, "danger");
      });
    } else {
      return body.result.items ? body.result.items : body.result;
    }
  }
}
async function getUsers(params = {}) {
  var _a, _b, _c, _d, _e, _f;
  let searchParams = { ...searchParamsModel, ...params };
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
async function getUserPhoto(username) {
  const response = await fetch(
    "http://api.nd.io/user/photo/" + username,
    {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    }
  );
  const result = await response.json();
  return responseService(result);
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
  const result = await response.json();
  return responseService(result);
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
  const result = await response.json();
  return responseService(result);
}
export {
  getUserPhoto as a,
  getTeacher as b,
  getTeacherSearchStoreParamsBySearchParams as c,
  getUsers as g
};
