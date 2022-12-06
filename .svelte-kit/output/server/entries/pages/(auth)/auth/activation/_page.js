const prerender = false;
async function load({ url }) {
  return {
    email: url.searchParams.get("email"),
    code: url.searchParams.get("code")
  };
}
export {
  load,
  prerender
};
