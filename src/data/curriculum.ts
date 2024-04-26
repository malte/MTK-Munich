export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type MtkSystem = {
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;

};

const mtkSystem: MtkSystem = {
    title: 'Ma Tsun Kuen Tai Chi Chuan — München',
    subtitle: 'Learn Tai Chi Chuan in the Style of Ma Tsun Kuen in Munich',
    description: 'Ma Tsun Kuen Tai Chi Chuan provides a system for learning Tai Chi, including Base exercises, various forms, a Qigong set as well as fixed-step and mobile partner exercises.',
    image: {
        src: '',
        alt: 'MTK TCC m'
    },

};

export default mtkSystem;