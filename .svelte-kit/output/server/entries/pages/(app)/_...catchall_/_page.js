import { a as getTeacher } from "../../../../chunks/user.js";
import { e as error } from "../../../../chunks/index2.js";
import { u as userStore } from "../../../../chunks/userStore.js";
const prerender = false;
async function load({ params, parent }) {
  const { user } = await parent();
  if (Object.entries(user).length > 0) {
    userStore.set(user);
  }
  if (params && params.catchall) {
    let response = await getTeacher(params.catchall);
    if (Object.entries(response.errors).length) {
      throw error(response.code, response.errors);
    }
  }
}
export {
  load,
  prerender
};
