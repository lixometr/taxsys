interface IMenuItems {
    name: string
    link?: string
    routeName?: string
    img?: string
    children?: IMenuItems[]
}
const menuItems: IMenuItems[] = [
    {
        name: 'Финансы',
        img: require('@/assets/icons/cd_finances.svg'),
        routeName: 'CDFinances',
        children: []
    },
  
    {
        name: 'Штрафы',
        img: require('@/assets/icons/fines.svg'),
        routeName: 'CDFines',
        children: []
    },
    {
        name: 'Аренда',
        img: require('@/assets/icons/car.svg'),
        routeName: 'CDRent',
        children: []
    },
    {
        name: 'Профиль',
        img: require('@/assets/icons/share.svg'),
        routeName: 'CDProfile',
        children: []
    },
  

   
   
]

export default menuItems