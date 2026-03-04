export interface INavItem {
    title: string
    path?: string
    items?: INavItem[]
}

export const dataHeader: INavItem[] = [
    {
        title: 'Головна',
        path: '/',
    },
    {
        title: 'Про комісію',
        items: [
            { title: 'Історія ЦК', path: '/history-cc' },
            { title: 'Склад ЦК', path: '/composition-cc' },
            { title: 'Підвищення кваліфікації', path: '/certification-training' },
            { title: 'Матеріально-технічна база', path: '/material-and-technical-base-cc' },
        ],
    },
    {
        title: 'Спеціальність',
        items: [
            { title: 'Про спеціальність', path: '/specialty' },
            { title: 'Стейкхолдери', path: '/our-stakeholders' },
            { title: 'Наші випускники', path: '/our-graduates' },
        ],
    },
    {
        title: 'Студенту',
        items: [
            { title: 'Освітньо-професійні програми', path: '/educational-and-professional-programs' },
            { title: 'Дисципліни (силабуси)', path: '/subjects' },
            { title: 'Методичні рекомендації до КП', path: '/methodical-recommendations' },
            { title: 'Кваліфікаційна робота', path: '/qualification-work-dp' },
            { title: 'Практики', path: '/practices' },
        ],
    },
    {
        title: 'Наукові роботи',
        path: '/scientific-work',
    },
    {
        title: 'Досягнення',
        path: '/our-achievements',
    },
    {
        title: 'Дозвілля',
        path: '/student-leisure-time',
    },
    {
        title: 'Контакти',
        path: '/contacts',
    },
]