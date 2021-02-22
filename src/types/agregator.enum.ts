export enum AgregName {
    yandex = 'yandex',
    gett = 'gett',
    citymobil = 'citymobil'
}
export const AgregatorType = {
    [AgregName.yandex]: {
        icon: require('@/assets/img/yandex_taxy.jpg'),
        name: 'Яндекс.Такси'
    },
    [AgregName.gett]: {
        name: "Gett"
    },
    [AgregName.citymobil]: {
        name: "Ситимоби"
    }
}