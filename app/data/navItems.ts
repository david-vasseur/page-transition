
export interface INavItems {
    label: string,
    path:string
}

export const navItems: INavItems[] = [
    { label: 'Accueil', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Pourquoi nous', path: '/pourquoi-nous' },
    { label: 'FAQ', path: '/FAQ' },
    { label: 'Contact', path: '/#contact' },
  ];

export const serviceItems: INavItems[] = [
    { label: 'Dératisation', path: '/services/deratisation' },
    { label: 'Désinsectisation', path: '/services/desinsectisation' },
    { label: 'Désinfection', path: '/services/desinfection' },
    { label: 'Autres', path: '/services/autre' },
]