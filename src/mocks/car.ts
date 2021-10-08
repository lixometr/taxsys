import { rest } from "msw";

export default [
  rest.post("/api/car", (req, res, { json }) => {
    return res(
      json({
        ok: true,
      })
    );
  }),
];
