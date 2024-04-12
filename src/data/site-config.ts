export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
};

const siteConfig: SiteConfig = {
    title: 'Ma Tsun Kuen Tai Chi Chuan — München',
    subtitle: 'Learn Tai Chi Chuan in the Style of Ma Tsun Kuen in Munich',
    description: 'Ma Tsun Kuen Tai Chi Chuan provides a system for learning Tai Chi, including Base exercises, various forms, a Qigong set as well as fixed-step and mobile partner exercises.',
    image: {
        src: '',
        alt: 'MTK TCC m'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Curriculum',
            href: '/curriculum'
        },
        {
            text: 'About',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ]
};

export default siteConfig;