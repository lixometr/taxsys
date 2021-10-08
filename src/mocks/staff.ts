import { rest } from "msw";

export default [
  rest.get("/api/staff", (req, res, { json }) =>
    res(
      json({
        current_page: 1,
        data: [],
        from: null,
        last_page: 1,

        next_page_url: null,
        per_page: 10,
        prev_page_url: null,
        to: null,
        total: 0,
      })
    )
  ),
  rest.post("/api/staff", (req, res, { json }) => res(json({ ok: true }))),
];
