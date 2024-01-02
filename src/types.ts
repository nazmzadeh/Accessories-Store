import { Dispatch, SetStateAction } from "react";

export type MobileNavContextState = {
    mobile: boolean;
    setMobile: Dispatch<SetStateAction<boolean>>;
}
export interface Category {
    id: number;
    value: string;
    label: string;
}
export interface ISearchValues {
    productName: string;
    category: Category;
}