import { rest } from "msw";
const suggestionMarks = [
  { id: 16, name: "Mazda" },
  { id: 113, name: "Mazda" },
  { id: 71, name: "Mazda" },
  { id: 53, name: "Mercedes" },
  { id: 17, name: "Mini" },
  { id: 114, name: "Mini" },
  { id: 72, name: "Mini" },
  { id: 18, name: "Mitsubishi" },
  { id: 115, name: "Mitsubishi" },
  { id: 73, name: "Mitsubishi" },
];
const suggestionModels = [
  { name: "A-class", years: "[2014,2012]" },
  { name: "B-class", years: "[2014,2012]" },
  { name: "C-class", years: "[2014,2012]" },
  { name: "CLA-class", years: "[2014,2012]" },
  { name: "CLS-class", years: "[2014,2012]" },
  { name: "E-class", years: "[2014,2012]" },
  { name: "G-class", years: "[2014,2012]" },
  { name: "GL-class", years: "[2014,2012]" },
  { name: "GLA-class", years: "[2014,2012]" },
  { name: "GLK-class", years: "[2014,2012]" },
  { name: "GLS-class", years: "[2014,2012]" },
  { name: "M-class", years: "[2014,2012]" },
  { name: "Maybach", years: "[2014,2012]" },
  { name: "R-class", years: "[2014,2012]" },
  { name: "S-class", years: "[2012]" },
  { name: "Sprinter", years: "[2012]" },
  { name: "V-class", years: "[2012]" },
  { name: "Viano", years: "[2012]" },
  { name: "Vito", years: "[2012]" },
];
const suggestionColors = [
  {
    id: 7,
    name: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439",
    hexcode: "brown",
  },
  { id: 8, name: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439", hexcode: "red" },
];
export default [
  rest.get("/api/suggestions/mark", (req, res, { json }) => {
    return res(json(suggestionMarks));
  }),
  rest.get("/api/suggestions/mark/model", (req, res, { json }) => {
    return res(json(suggestionModels));
  }),
  rest.get("/api/suggestions/color", (req, res, { json }) => {
    return res(json(suggestionColors));
  }),
];
