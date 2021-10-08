import { rest } from "msw";

export default [
  rest.get("/api/geoip", (req, res, { json }) => res(json(""))),
];
