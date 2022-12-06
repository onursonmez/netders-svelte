const prerender = false;
async function load({ url }) {
  return {
    to: url.searchParams.get("to") ? url.searchParams.get("to") : "/"
  };
}
export {
  load,
  prerender
};
