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
    imageUrl?: string;
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
export interface ITitleProps {
    text: string;
}

export interface ITabProps {
    id: number;
    value: string;
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
}
export interface ITabsProps {
    tabs: ITabProps[];
    handleTabChange: (x: string) => void;
    selectedTab: string;

}

export interface IProductCardProps {
    id: number;
    imageUrl: string;
    productTitle: string;
    discount: boolean;
    priceOriginal?: string
    price?: string;
    category: Category;

}

export interface IButtonProps {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export interface ICartItemState {

    id: number;
    name: string;
    quantity: number;
}
export interface ICartState {
    items: ICartItemState[]
}

