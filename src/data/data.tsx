/* eslint-disable @typescript-eslint/no-unused-vars */
import { Category, IHeroCarouselSlide } from "../types";
import { IMenuItemProps } from "../components/DropdownMenu/Menu";
import categoryImg1 from "../pages/HomePage/images/home-accessories-cat1.png";
import categoryImg2 from "../pages/HomePage/images/home-accessories-cat2.png";
import categoryImg3 from "../pages/HomePage/images/home-accessories-cat3.png";
import categoryImg4 from "../pages/HomePage/images/home-accessories-cat4.png";
import categoryImg5 from "../pages/HomePage/images/home-accessories-cat5.png";
import categoryImg6 from "../pages/HomePage/images/home-accessories-cat6.png";
import carouselImage1 from "../pages/HomePage/images/home-accessories-slider1-scaled-1.jpg";
import carouselImage2 from "../pages/HomePage/images/home-accessories-slider2-scaled-1.jpg";
export const currencies: IMenuItemProps[] = [
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        USD
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        EUR
      </a>
    ),
    key: "1",
  },
];
export const languages: IMenuItemProps[] = [
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        English
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        Azerbaijani
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        Russian
      </a>
      
    ),
    key: "2",
  },
];

export const categories: IMenuItemProps[] = [
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        Camera & Photo
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        Cases & Styluses
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        Chargers & Adapters
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        Headphones & Earbuds
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        Portable Speakers
      </a>
    ),
    key: "4",
  },
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        Smartwatches
      </a>
    ),
    key: "5",
  },
];

export const searchCategories: Category[] = [
  {
    id: 1,
    label: "All categories",
    value: "all categories",
  },
  {
    id: 2,
    label: "Camera & Photo",
    value: "camera & photo",
    imageUrl: categoryImg1,
  },
  {
    id: 3,
    label: "Cases & Styluses",
    value: "cases & styluses",
    imageUrl: categoryImg5,
  },
  {
    id: 4,
    label: "Chargers & Adapters",
    value: "chargers & adapters",
    imageUrl: categoryImg3,
  },
  {
    id: 5,
    label: "Headphones & Earbuds",
    value: "headphones & earbuds",
    imageUrl: categoryImg2,
  },
  {
    id: 6,
    label: "Portable Speakers",
    value: "portable speakers",
    imageUrl: categoryImg6,
  },
  {
    id: 7,
    label: "Smartwatches",
    value: "smartwatches",
    imageUrl: categoryImg4,
  },
];
export const heroCarousel: IHeroCarouselSlide[] = [
  {
    id: 1,
    image: carouselImage1,
    heading: "Favorite Items",
    beforeDescription: "Skullcandy Push Active True Wireless ",
    description:
      "Appear, dry there darkness they're seas, dry waters thing fly midst above. ",
  },
  {
    id: 2,
    image: carouselImage2,
    heading: "Trending",
    beforeDescription: "Charger Aluminum Pad & Watch Charger Station",
    description:
      "Appear, dry there darkness they're seas, dry waters thing fly midst above. ",
  },
];
