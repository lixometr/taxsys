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
        // routeName: "Finances",
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
        children: [
            {
                name: "Заявки водителей"
            },
            {
                name: 'Список водителей'
            },
            {
                name: 'Проверить водителя',
                routeName: 'DriverCheck'
            },
            {
                name: 'Черный список'
            }
        ]
    },
    {
        name: 'Аренда',
        img: require('@/assets/icons/car.svg')
    },
    {
        name: "Штрафы",
        img: require('@/assets/icons/fines.svg')
    },
    {
        name: "Приложение",
        img: require('@/assets/icons/smartphone.svg')
    },
   
   
]

export default menuItems