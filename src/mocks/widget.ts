import { rest } from "msw";
const widget = {
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
    "<code><Код для вставки> - widget_id: 3</code>",
  images: [
    {
      id: 95,
      filename: "video.jpg",
      citimobil_id: null,
      desc: "background",
      owner_id: 3,
      owner_type: "App\\Models\\PartnerWidget",
      created_at: "2021-04-08T14:57:18.000000Z",
      updated_at: "2021-04-08T14:57:18.000000Z",
      url: "/application_mock.jpg",
    },
  ],
};
export default [
  rest.get("/api/widgets/:id", (req, res, { json }) => res(json(widget))),
  rest.post("/api/widgets/:id", (req, res, { json }) =>
    res(json({ ok: true }))
  ),
  rest.post("/api/widgets", (req, res, { json }) =>
    res(json({ ok: true }))
  ),
];
