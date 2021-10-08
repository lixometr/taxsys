import { rest } from "msw";

export default [
  rest.get("/api/stats", (req, res, { json }) =>
    res(
      json({
        drivers: {
          total_drivers: 1111,
          total_active_drivers: 83,
          total_new_drivers: 0,
          total_paid: 0,
          total_pay_fee: 0,
        },
        trips: {
          total_cash: 115948,
          total_cashless: 221871,
          total_payout: 186945,
          sum: 337819,
          data: {
            "2021-10-01": {
              cash: 21701,
              cashless: 45288,
              total: 66989,
              payout: 38517,
            },
            "2021-10-02": {
              cash: 25255,
              cashless: 44270,
              total: 69525,
              payout: 37861,
            },
            "2021-10-03": {
              cash: 7128,
              cashless: 23267,
              total: 30395,
              payout: 19852,
            },
            "2021-10-04": {
              cash: 12962,
              cashless: 21682,
              total: 34644,
              payout: 18073,
            },
            "2021-10-05": {
              cash: 14070,
              cashless: 25667,
              total: 39737,
              payout: 21415,
            },
            "2021-10-06": {
              cash: 13519,
              cashless: 22496,
              total: 36015,
              payout: 18796,
            },
            "2021-10-07": {
              cash: 14670,
              cashless: 26665,
              total: 41335,
              payout: 22014,
            },
            "2021-10-08": {
              cash: 6643,
              cashless: 12536,
              total: 19179,
              payout: 10417,
            },
          },
        },
        fees: {
          total_agreg_fee: 54163,
          total_park_fee: 9903,
          data: {
            "2021-10-01": { park_fee: 1904, agreg_fee: 10315 },
            "2021-10-02": { park_fee: 1962, agreg_fee: 10601 },
            "2021-10-03": { park_fee: 844, agreg_fee: 4344 },
            "2021-10-04": { park_fee: 1062, agreg_fee: 5801 },
            "2021-10-05": { park_fee: 1180, agreg_fee: 6440 },
            "2021-10-06": { park_fee: 1072, agreg_fee: 6051 },
            "2021-10-07": { park_fee: 1311, agreg_fee: 7213 },
            "2021-10-08": { park_fee: 568, agreg_fee: 3398 },
          },
        },
      })
    )
  ),
];
