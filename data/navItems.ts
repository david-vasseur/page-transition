
export interface INavItems {
    label: string,
    path:string
}

export const navItems: INavItems[] = [
    { label: 'Accueil', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Pourquoi nous', path: '/pourquoi-nous' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/#contact' },
  ];

export const serviceItems: INavItems[] = [
    { label: 'Dératisation', path: '/deratisation' },
    { label: 'Désinsectisation', path: '/desinsectisation' },
    { label: 'Désinfection', path: '/desinfection' }
]