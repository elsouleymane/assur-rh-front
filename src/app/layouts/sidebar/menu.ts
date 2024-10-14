import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARD.TEXT',
        icon: 'ti ti-brand-google-home',
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARD.LIST.ANALYTICS',
                link: '/',
                parentId: 2
            },
            
        ]
    },
    {
        id: 8,
        label: 'MENUITEMS.APPS.TEXT',
        isTitle: true
    },
    {
        id: 9,
        label: 'MENUITEMS.APPS.LIST.CALENDAR',
        icon: 'ti ti-calendar',
        link: '/',
        parentId: 8
    },
    {
        id: 11,
        label: 'MENUITEMS.APPS.LIST.NEWS',
        icon: 'ti ti-mail',
        link: '/',
        parentId: 8,
    },
    {
        id: 23,
        label: 'MENUITEMS.APPS.LIST.DEMANDE & APROBATION',
        icon: 'ti ti-list',
        link: '/',
        parentId: 8,
    },
    {
        id: 23,
        label: 'MENUITEMS.APPS.LIST.USER MANAGEMENT',
        icon: 'ti ti-address-book',
        link: '/',
        parentId: 8,
    },
    
]