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
        img: '/assets/img/stat.svg',
        routeName: 'Statistics',
        children: []
    },
    {
        name: 'Финансы',
        img: '/assets/img/finance.svg',
        // routeName: "Finances",
        children: [
            {
                name: "Поездки",
                // routeName: 'FinancesTravels'
            },
            {
                name: "Подозрительные поездки",
                // routeName: 'FinancesSuspiciousTravels'
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
        img: '/assets/img/user.svg',
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
        img: '/assets/img/car.svg'
    },
    {
        name: "Штрафы",
        img: '/assets/img/alert-circle.svg'
    },
    {
        name: "Приложение",
        img: '/assets/img/smartphone.svg'
    },
    {
        name: 'Партнеры',
        img: '/assets/img/user.svg'
    },
    {
        name: "Настройки",
        img: '/assets/img/settings.svg'
    }
]

export default menuItems