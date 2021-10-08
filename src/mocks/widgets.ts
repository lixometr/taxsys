import { rest } from "msw";

export default [
    
  rest.get("/api/widgets", (req, res, { json }) =>
    res(
      json([
        {
          id: 1,
          partner_id: 3,
          site_url: "",
          agreg: "yandex",
          app_url: "",
          type: "multistep",
          title: "asd",
          title_color: "",
          text_color: "",
          created_at: "2021-04-08T14:35:10.000000Z",
          updated_at: "2021-04-08T14:35:10.000000Z",
          code:
            "<code>\u0425\u0443\u0439 \u0437\u043d\u0430\u0435\u0442 \u0447\u0442\u043e \u0437\u0430 \u043a\u043e\u0434 - widget_id: 1</code>",
        },
        {
          id: 2,
          partner_id: 3,
          site_url: "",
          agreg: "yandex",
          app_url: "",
          type: "multistep",
          title: "asd",
          title_color: "",
          text_color: "",
          created_at: "2021-04-08T14:36:03.000000Z",
          updated_at: "2021-04-08T14:36:03.000000Z",
          code:
            "<code>\u0425\u0443\u0439 \u0437\u043d\u0430\u0435\u0442 \u0447\u0442\u043e \u0437\u0430 \u043a\u043e\u0434 - widget_id: 2</code>",
        },
        {
          id: 3,
          partner_id: 3,
          site_url: "",
          agreg: "yandex",
          app_url: "",
          type: "multistep",
          title: "asd",
          title_color: "",
          text_color: "",
          created_at: "2021-04-08T14:57:18.000000Z",
          updated_at: "2021-04-08T14:57:18.000000Z",
          code:
            "<code>\u0425\u0443\u0439 \u0437\u043d\u0430\u0435\u0442 \u0447\u0442\u043e \u0437\u0430 \u043a\u043e\u0434 - widget_id: 3</code>",
        },
        {
          id: 4,
          partner_id: 3,
          site_url: "https://test.ru",
          agreg: "gett",
          app_url: "https://2.ru",
          type: "multistep",
          title: "asd",
          title_color: "asd",
          text_color: "asd",
          created_at: "2021-04-08T14:58:14.000000Z",
          updated_at: "2021-07-15T12:09:43.000000Z",
          code:
            "<code>\u0425\u0443\u0439 \u0437\u043d\u0430\u0435\u0442 \u0447\u0442\u043e \u0437\u0430 \u043a\u043e\u0434 - widget_id: 4</code>",
        },
        {
          id: 5,
          partner_id: 3,
          site_url: "https://asd.cr",
          agreg: "gett",
          app_url: "https://dasd.r",
          type: "open",
          title: "asd",
          title_color: "asd",
          text_color: "ad",
          created_at: "2021-04-08T15:04:49.000000Z",
          updated_at: "2021-04-17T14:38:02.000000Z",
          code:
            "<code>\u0425\u0443\u0439 \u0437\u043d\u0430\u0435\u0442 \u0447\u0442\u043e \u0437\u0430 \u043a\u043e\u0434 - widget_id: 5</code>",
        },
      ])
    )
  ),
];
