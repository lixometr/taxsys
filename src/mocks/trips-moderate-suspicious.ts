import { rest } from "msw";

export default [
  rest.post("/api/trips/:id/moderate_suspicious", (req, res, { json }) =>
    res(json({ ok: true }))
  ),
];
