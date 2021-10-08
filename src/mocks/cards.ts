import { rest } from "msw";
const cards = [
  {
    id: 93,
    driver_id: 10113,
    partner_id: 3,
    number: 4111111111111111,
    active: 1,
    def: true,
    created_at: "2021-08-08T23:52:43.000000Z",
    updated_at: "2021-09-26T16:29:44.000000Z",
  },
  {
    id: 95,
    driver_id: 10113,
    partner_id: 3,
    number: 5111112312312535,
    active: 1,
    def: false,
    created_at: "2021-09-26T07:21:19.000000Z",
    updated_at: "2021-09-26T16:29:44.000000Z",
  },
];
export default [
  rest.get("/api/partner/cards", (req, res, { json }) => res(json(cards))),
  rest.post("/api/partner/add_card", (req, res, { json }) =>
    res(json({ ok: true }))
  ),
  rest.post("/api/partner/set_default_card", (req, res, { json }) =>
    res(json({ ok: true }))
  ),
  rest.delete("/api/partner/delete_card", (req, res, { json }) =>
    res(json({ ok: true }))
  ),
];
