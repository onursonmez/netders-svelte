import { b as getTeacherSearchStoreParamsBySearchParams, g as getUsers } from "../../../../chunks/user.js";
async function load({ params, url }) {
  const teacherSearchParams = await getTeacherSearchStoreParamsBySearchParams({ "query": (params == null ? void 0 : params.catchall) + "?" + url.searchParams.toString() });
  const users = await getUsers(teacherSearchParams);
  return {
    teacherSearchParams,
    users
  };
}
export {
  load
};
