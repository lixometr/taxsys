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
                routeName: 'FinancesTravels'
            },
            {
                name: "Подозрительные поездки",
                routeName: 'FinancesSuspiciousTravels'
            },
            {
                name: "Ручные выплаты",
                // routeName: 'FincancesManualPayments'
            },
            {
                name: 'Автоматические выплаты',
                // routeName: "FincancesAutomatedPayments"
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
                name: 'Проверить водителя'
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