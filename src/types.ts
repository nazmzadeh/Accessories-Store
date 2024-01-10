import { Dispatch, SetStateAction } from "react";

export type MobileNavContextState = {
    mobile: boolean;
    setMobile: Dispatch<SetStateAction<boolean>>;
    openSearch: boolean;
    setOpenSearch: Dispatch<SetStateAction<boolean>>;
    openNav: boolean;
    setOpenNav: Dispatch<SetStateAction<boolean>>;
    toggleNavDrawer: () => void;
    toggleSearchDrawer: () => void;
}
export interface Category {
    id: number;
    value: string;
    label: string;
    imageUrl?:string;
}
export interface ISearchValues {
    productName: string;
    category: Category;
}

export interface IHeroCarouselSlide {
    id: number;
    image: string;
    heading: string;
    beforeDescription: string;
    description: string;
}