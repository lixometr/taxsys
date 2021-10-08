import { rest } from "msw";
export default [
  rest.get("/api/balance", (req, res, { json }) => {
    return res(
      json({
        balance: "2000",
        qiwi: null,
      })
    );
  }),
];
