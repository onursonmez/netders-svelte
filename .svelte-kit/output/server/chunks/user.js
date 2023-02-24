import "./index3.js";
import { s as searchParamsModel } from "./searchModel.js";
import "toastify-js";
import { e as error } from "./index.js";
function responseService(body) {
  if (Object.entries(body).length > 0) {
    if (Object.entries(body.errors).length > 0) {
      {
        throw error(body.code, body.errors);
      }
    } else {
      return body.result?.items ? body.result.items : body.result;
    }
  }
}
async function getUsers(params = {}) {
  let searchParams = { ...searchParamsModel, ...params };
  const result = await fetch(
    "http://api.nd.io/user/search",
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      method: "POST",
      body: JSON.stringify({
        "page": searchParams?.page,
        "pageSize": searchParams?.pageSize,
        "field": searchParams?.field,
        "order": searchParams?.order,
        "keyword": searchParams?.keyword,
        "budget": parseInt(searchParams?.budget),
        "cityId": searchParams?.city?.id,
        "countyId": searchParams?.county?.id,
        "subjectId": searchParams?.subject?.id,
        "levelId": searchParams?.level?.id,
        "categoryId": searchParams?.category?.id,
        "lessonTypeId": searchParams?.lessonType?.id,
        "genderId": searchParams?.gender?.id
      })
    }
  );
  const body = await result.json();
  return body.result;
}
async function getUserIsExists(param) {
  const q = new URLSearchParams(param).toString();
  const response = await fetch(
    "http://api.nd.io/user/is_exists?" + q,
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
  getUserIsExists as a,
  getUsers as g
};
