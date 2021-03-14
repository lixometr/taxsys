interface IMenuItems {
    name: string
    link?: string
    routeName?: string
    img?: string
    children?: IMenuItems[]
}
const menuItems: IMenuItems[] = [
    {
        name: 'Статистика',
        img: require('@/assets/icons/statistics.svg'),
        routeName: 'Statistics',
        children: []
    },
    {
        name: 'Финансы',
        img: require('@/assets/icons/finances.svg'),
        routeName: "Finances",
        children: [
            {
                name: "Поездки",
                routeName: 'Travels'
            },
            {
                name: "Подозрительные поездки",
                routeName: 'SuspiciousTravels'
            },
            {
                name: "Ручные выплаты",
                routeName: 'ManualPayments'
            },
            {
                name: 'Автоматические выплаты',
                routeName: "AutomaticPayments"
            }
        ]
    },
    {
        name: "Водители",
        img: require('@/assets/icons/user_menu.svg'),
        routeName: 'Driver',
        children: [
            {
                name: "Заявки водителей",
                routeName: 'DriverApplys'
            },
            {
                name: 'Список водителей',
                routeName: 'DriverList'
            },
            {
                name: 'Проверить водителя',
                routeName: 'DriverCheck'
            },
            {
                name: 'Черный список',
                routeName: 'DriverBlackList'
            }
        ]
    },
    {
        name: 'Аренда',
        img: require('@/assets/icons/car.svg'),
        routeName: 'Rent'
    },
    {
        name: "Штрафы",
        img: require('@/assets/icons/fines.svg'),
        routeName: 'Fines'
    },
    {
        name: "Приложение",
        img: require('@/assets/icons/smartphone.svg'),
        routeName: 'ApplicationsItems'
    },
   
   
]

export default menuItems