import { r as redirect, e as error, i as invalid } from "../../../../chunks/index2.js";
import { g as get, p as post, d as del, a as put } from "../../../../chunks/api.js";
async function load({ locals }) {
  if (!locals.auth)
    throw redirect(302, "/auth/login");
  const subjects = await get("lesson/subjects", locals.auth.token);
  const prices = await get("price/" + locals.auth.uuid, locals.auth.token);
  return {
    prices: prices.result,
    subjects: subjects.result
  };
}
const actions = {
  new: async ({ cookies, locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      subjectId: data.get("subjectId"),
      levelIds: data.get("levelIds"),
      pricePrivate: parseFloat(data.get("pricePrivate")),
      priceLive: parseFloat(data.get("priceLive"))
    };
    if (data.get("subjectId") === "undefined") {
      return invalid(400, { "errors": { "badRequest": "Ders konusu alan\u0131 bo\u015F b\u0131rak\u0131lamaz!" } });
    }
    if (!data.get("levelIds")) {
      return invalid(400, { "errors": { "badRequest": "Ders ad\u0131 alan\u0131 bo\u015F b\u0131rak\u0131lamaz!" } });
    }
    if (!data.get("pricePrivate") && !data.get("priceLive")) {
      return invalid(400, { "errors": { "badRequest": "Ders \xFCcreti bo\u015F b\u0131rak\u0131lamaz!" } });
    }
    const body = await post("member/price/new", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return invalid(body.code, body);
    const user = await get("member/user/verify", locals.auth.token);
    locals.auth = user.result;
    return body.result;
  },
  update_multi: async ({ cookies, locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    if (data.get("delete")) {
      let id = parseInt(data.get("delete"));
      let body2 = await del("member/price/delete/" + id, locals.auth.token);
      if (Object.entries(body2.errors).length)
        return invalid(body2.code, body2);
      return body2.result;
    }
    let priceData = [];
    data.forEach((price, priceObject) => {
      let priceArray = priceObject.split("_");
      let name = priceArray[0];
      let id = priceArray[1];
      let isExist = priceData.find((obj) => {
        return obj.id === id;
      });
      if (isExist) {
        isExist[name] = price;
      } else {
        priceData.push({ "id": id, [name]: price });
      }
    });
    let body = await put("member/price/update", priceData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return invalid(body.code, body);
    return body.result;
  },
  update: async ({ cookies, locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      id: data.get("id"),
      title: data.get("title"),
      content: data.get("content"),
      pricePrivate: data.get("pricePrivate"),
      priceLive: data.get("priceLive")
    };
    let body = await put("member/price/update", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return invalid(body.code, body);
    return body.result;
  }
};
export {
  actions,
  load
};
