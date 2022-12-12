import { b as getTeacher } from "../../../../chunks/user.js";
import { u as userStore } from "../../../../chunks/userStore.js";
const prerender = false;
async function load({ params, parent }) {
  const { user } = await parent();
  if (Object.entries(user).length > 0) {
    userStore.set(user);
  }
  if (params && params.catchall) {
    const teacher = await getTeacher(params.catchall);
    return {
      teacher
    };
  }
}
export {
  load,
  prerender
};
