import { rest } from "msw";

export default [
  rest.put("/api/user", (req, res, { json }) => res(json({ ok: true }))),
  rest.get("/api/user", (req, rest, { json }) =>
    rest(
      json({
        Phone: "+79660108888",
        active_status: 0,
        avatar: "avatar.png",
        birthday: null,
        blacklist_reasons: [
          "Не состоит",
          "Не платит аренду",
          "Мошенничество",
          "Разбил машину",
          "Разобрал авто",
          "Самозаказ",
        ],
        city: "",
        created_at: "2020-11-06T10:02:12.000000Z",
        dark_mode: 0,
        driver: {
          id: 10113,
          partner_id: 3,
          user_id: 3,
          owner_user_id: 3,
          DriverIdYandex: null,
        },
        fio: "Тест",
        id: 3,
        last_name: "Тест",
        messenger_color: "#2180f3",
        middle_name: "Тест",
        name: "Тест",
        notifications: {
          blocked_trip: { telegram: false, email: false },
          driver_pay_request: { telegram: true, email: false },
          low_balance: { telegram: false, email: false },
          new_driver: { telegram: true, email: false },
        },
        passport: null,
        roles: [{ id: 1, name: "admin", guard_name: "api" }],
        tg_blocked: false,
        tg_id: 361204362,
        tg_link: "",
        updated_at: "2021-07-15T12:11:15.000000Z",
        user_type: "partner",
        username: "Тест",
      })
    )
  ),
];
