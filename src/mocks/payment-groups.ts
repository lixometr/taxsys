import { rest } from "msw";

export default [
  rest.delete("/api/partner/payment_groups/:id", (req, res, { json }) =>
    res(json({ ok: true }))
  ),
  rest.get("/api/partner/payment_groups", (req, res, { json }) =>
    res(
      json([
        {
          id: 1,
          partner_id: 3,
          paymentOption: "momental",
          name:
            "\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",
          startTime: null,
          endTime: null,
          AcceptApplications: "OnceADay",
          autoPayment: null,
          minOrder: null,
          maxOrder: 14500,
          maxPerTime: 20000,
          maxPerDay: null,
          taxFee: 20,
          applicationFee: null,
          applicationFeePeriod: "Day",
          created_at: "2020-11-08T09:19:34.000000Z",
          updated_at: "2020-11-08T09:19:34.000000Z",
        },
        {
          id: 4,
          partner_id: 3,
          paymentOption: "approval",
          name:
            "\u041e\u0431\u0449\u0430\u044f \u043f\u043e \u0443\u043e\u043b\u0447\u0430\u043d\u0438\u044e",
          startTime: null,
          endTime: null,
          AcceptApplications: "AllTime",
          autoPayment: null,
          minOrder: 100,
          maxOrder: 14500,
          maxPerTime: null,
          maxPerDay: 30000,
          taxFee: 20,
          applicationFee: 5,
          applicationFeePeriod: "Day",
          created_at: "2020-12-07T15:17:10.000000Z",
          updated_at: "2020-12-07T15:17:10.000000Z",
        },
        {
          id: 9,
          partner_id: 3,
          paymentOption: "momental",
          name:
            "\u0422\u0435\u0441\u0442 \u0430\u0432\u0442\u043e\u0432\u044b\u043f\u043b\u0430\u0442\u044b",
          startTime: null,
          endTime: null,
          AcceptApplications: "OnceADay",
          autoPayment: null,
          minOrder: null,
          maxOrder: null,
          maxPerTime: null,
          maxPerDay: null,
          taxFee: null,
          applicationFee: null,
          applicationFeePeriod: "Day",
          created_at: "2020-12-26T18:03:50.000000Z",
          updated_at: "2020-12-26T18:03:50.000000Z",
        },
      ])
    )
  ),
];
