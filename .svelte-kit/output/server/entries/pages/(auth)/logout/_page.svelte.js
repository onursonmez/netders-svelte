import { c as create_ssr_component, b as subscribe, y as set_store_value } from "../../../../chunks/index.js";
import { u as userStore } from "../../../../chunks/userStore.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let { data } = $$props;
  set_store_value(
    userStore,
    $userStore = {
      email: "",
      username: "",
      firstName: "",
      lastName: "",
      phone: "",
      token: "",
      roles: []
    },
    $userStore
  );
  data.to;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_userStore();
  return `${$$result.head += `<!-- HEAD_svelte-1fn5ieq_START -->${$$result.title = `<title>G\xFCvenli \xC7\u0131k\u0131\u015F</title>`, ""}<!-- HEAD_svelte-1fn5ieq_END -->`, ""}`;
});
export {
  Page as default
};
