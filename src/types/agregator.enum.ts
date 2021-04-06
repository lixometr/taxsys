export enum AgregName {
    yandex = 'yandex',
    gett = 'gett',
    citymobil = 'citymobil'
}
export const AgregatorType = {
    [AgregName.yandex]: {
        icon: require('@/assets/img/yandex_taxy.png'),
        name: 'Яндекс.Такси'
    },
    [AgregName.gett]: {
        name: "Gett",
        icon: require('@/assets/img/gett_logo.png')
    },
    [AgregName.citymobil]: {
        name: "Ситимобил",
        icon: require('@/assets/img/city_logo.png')

    }
}