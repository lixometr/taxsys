import { rest } from "msw";

export default [
  rest.get("/api/partner/antifraud/", (req, res, { json }) => {
    const paginate = req.url.searchParams.get("paginate");
    if (paginate == "0") {
      return res(
        json([
          {
            id: 19,
            partner_id: 3,
            name:
              "\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442 \u0442\u0435\u0441\u0442",
            cost_trip_more: 1500,
            time_trip_more: 90,
            sum_bonus_more: 100,
            time_trip_less: 3,
            sum_tip_more_rub: 200,
            cost_min_more: 35,
            sum_tip_more_perc: 50,
            cost_min_less: 15,
            cost_km_more: 80,
            active: 1,
            default: 1,
            created_at: "2021-04-04T11:12:02.000000Z",
            updated_at: "2021-04-04T12:54:25.000000Z",
          },
        ])
      );
    } else {
      return res(json({ data: [] }));
    }
  }),
  rest.post("/api/partner/antifraud", (req, res, { json }) =>
    res(json({ ok: true }))
  ),
];
