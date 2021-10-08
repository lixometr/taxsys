import { rest } from "msw";
const items = [
  {
    id: 12,
    partner_id: 3,
    name: "qiwi",
    login_api: "sd",
    balance: 20,
    balance_response: null,
    is_invalid: 0,
    created_at: "2021-02-27T11:43:36.000000Z",
    updated_at: "2021-02-27T11:43:36.000000Z",
  },
];
export default [
  rest.get("/api/partner/paysystem", (req, res, { json }) => res(json(items))),
  rest.post("/api/partner/paysystem", (req, res, { json }) =>
    res(json({ ok: true }))
  ),
  rest.delete("/api/partner/paysystem/:id", (req, res, { json }) =>
    res(json({ ok: true }))
  ),
];
