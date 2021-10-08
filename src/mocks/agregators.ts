import { rest } from "msw";

export default [
  rest.get("/api/partner/aggregators", (req, res, { json }) =>
    res(json(["yandex", "gett", "citymobil1"]))
  ),
  rest.get("/api/driver/available_agreg_balance", (req, res, { json }) =>
    res(json(23))
  ),
];
