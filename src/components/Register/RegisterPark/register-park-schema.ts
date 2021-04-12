import { fields } from "./register-park-fields";

export const schema = [
  {
    type: "app-input",
    field: fields.lastName,
    props: {
      label: "Фамилия*",
    },
    class: "col-lg-4",
  },
  {
    type: "app-input",
    field: fields.name,
    props: {
      label: "Имя*",
    },
    class: "col-lg-4",
  },
  {
    type: "app-input",
    field: fields.middleName,
    props: {
      label: "Отчество",
    },
    class: "col-lg-4",
  },
  {
    name: "birthday",
    type: "app-select",
    field: fields.birthday,
    props: {
      label: "Дата рождения",
    },
    class: "col-lg-6",
  },
  {
    type: "app-input",
    field: fields.passport,
    props: {
      maskPlaceholder: '',
      mask: '**********',
      label: "Серия и номер паспорта",
    },
    class: "col-lg-6",
  },
  {
    name: 'phone',
    type: "phone-input",
    field: fields.phone,
    props: {
      label: "+7 999 999 99 99*",
    },
    class: "col-lg-6",
  },
  {
    name: 'city',
    type: "app-select",
    field: fields.city,
    props: {
      label: "Город",
      options: require('@/assets/cities.json')
    },
    class: "col-lg-6",
  },
];