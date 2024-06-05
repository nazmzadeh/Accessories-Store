/* eslint-disable @typescript-eslint/no-unused-vars */
import { Category, IHeroCarouselSlide, IProductCardProps } from "../types";
import { IMenuItemProps } from "../components/DropdownMenu/Menu";
import categoryImg1 from "../pages/HomePage/images/home-accessories-cat1.png";
import categoryImg2 from "../pages/HomePage/images/home-accessories-cat2.png";
import categoryImg3 from "../pages/HomePage/images/home-accessories-cat3.png";
import categoryImg4 from "../pages/HomePage/images/home-accessories-cat4.png";
import categoryImg5 from "../pages/HomePage/images/home-accessories-cat5.png";
import categoryImg6 from "../pages/HomePage/images/home-accessories-cat6.png";
import carouselImage1 from "../pages/HomePage/images/home-accessories-slider1-scaled-1.jpg";
import carouselImage2 from "../pages/HomePage/images/home-accessories-slider2-scaled-1.jpg";
import productImg1 from "../pages/HomePage/images/product-image1.png";
import productImg2 from "../pages/HomePage/images/product-image2.png";
import productImg3 from "../pages/HomePage/images/product-image3.png";
import productImg4 from "../pages/HomePage/images/product-image4.png";
import productImg5 from "../pages/HomePage/images/product-image5.png";
import productImg6 from "../pages/HomePage/images/product-image6.png";
import productImg7 from "../pages/HomePage/images/product-image7.png";

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
    label: "All",
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

export const productCards: IProductCardProps[] = [
  {
    id: 1,
    imageUrl: productImg1,
    productTitle: "15W Magnetic Wireless iPhone Charger",
    discount: true,
    priceOriginal: "139.00",
    price: "69.00",
    category: searchCategories[3],
  },
  {
    id: 2,
    imageUrl: productImg2,
    productTitle: "45W USB-C Super Fast Charging Wall Charger",
    discount: false,
    price: "29.00",
    category: searchCategories[3],
  },
  {
    id: 3,
    imageUrl: productImg3,
    productTitle: "Air True Wireless Signature Bluetooth Earbuds",
    discount: false,
    price: "19.00",
    category: searchCategories[4],
  },
  {
    id: 4,
    imageUrl: productImg4,
    productTitle: "Smart Watch w/ Blue Aluminum Case",
    discount: false,
    price: "559.00",
    category: searchCategories[6],
  },
  {
    id: 5,
    imageUrl: productImg5,
    productTitle: "Belkin TrueFreedom Pro Wireless Charging",
    discount: false,
    price: "169.00",
    category: searchCategories[1],
  },
  {
    id: 6,
    imageUrl: productImg6,
    productTitle: "Aluminum Phone Desk Stand for iPhone & Android",
    discount: false,
    price: "99.00",
    category: searchCategories[2],
  },
  {
    id: 7,
    imageUrl: productImg7,
    productTitle: "Amazon Echo Dot Speake",
    discount: true,
    priceOriginal: "120.00",
    price: "99.00",
    category: searchCategories[5],
  },
];
