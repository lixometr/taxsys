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
        name: "Gett",
        icon: require('@/assets/img/gett_logo.jpg')
    },
    [AgregName.citymobil]: {
        name: "Ситимоби",
        icon: require('@/assets/img/city_logo.jpg')

    }
}