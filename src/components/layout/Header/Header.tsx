/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FacebookFilled,
  InstagramOutlined,
  SearchOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons/lib/icons";
import Menu, { IMenuItemProps } from "../../DropdownMenu/Menu";
import "./Header.scss";
import Navbar from "./components/Navbar";
import { useContext, useState } from "react";
import { MobileNavContext } from "../../../context/ContextProvider";
import SelectOption from "../../Select/Select";
import { SubmitHandler, useForm } from "react-hook-form";
import { Category, ISearchValues } from "../../../types";
import { Button, Drawer } from "antd";

const currencies: IMenuItemProps[] = [
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
const languages: IMenuItemProps[] = [
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
const categories: IMenuItemProps[] = [
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        Audio & Speakers
      </a>
    ),
    icon: (
      <svg viewBox="0 0 32 32">
        <path d="M29.6 24.045c-0.442 0-0.8-0.358-0.8-0.8v-5.645c0-8.134-4.666-12.8-12.8-12.8s-12.8 4.666-12.8 12.8v5.645c0 0.442-0.358 0.8-0.8 0.8s-0.8-0.358-0.8-0.8v-5.645c0-2.422 0.379-4.598 1.126-6.472 0.712-1.786 1.763-3.309 3.125-4.525 2.491-2.227 6-3.403 10.15-3.403s7.659 1.178 10.15 3.403c1.36 1.216 2.411 2.739 3.125 4.525 0.747 1.872 1.126 4.050 1.126 6.472v5.645c0 0.442-0.358 0.8-0.8 0.8zM10.4 16c-1.051 0-1.946 0.678-2.269 1.621-1.765 0.109-3.030 0.662-3.854 1.683-0.734 0.912-1.077 2.15-1.077 3.896s0.342 2.984 1.077 3.896c0.824 1.022 2.088 1.574 3.854 1.683 0.325 0.942 1.219 1.621 2.269 1.621 1.323 0 2.4-1.077 2.4-2.4v-9.6c0-1.323-1.077-2.4-2.4-2.4zM4.8 23.2c0-2.258 0.56-3.73 3.2-3.966v7.933c-2.64-0.237-3.2-1.709-3.2-3.966zM11.2 28c0 0.442-0.358 0.8-0.8 0.8s-0.8-0.358-0.8-0.8v-9.6c0-0.442 0.358-0.8 0.8-0.8s0.8 0.358 0.8 0.8v9.6zM27.723 19.304c-0.824-1.022-2.088-1.574-3.853-1.683-0.325-0.942-1.219-1.621-2.269-1.621-1.323 0-2.4 1.077-2.4 2.4v9.6c0 1.323 1.077 2.4 2.4 2.4 1.051 0 1.946-0.678 2.269-1.621 1.765-0.109 3.030-0.662 3.853-1.683 0.734-0.912 1.077-2.15 1.077-3.896s-0.342-2.984-1.077-3.896zM21.6 28.8c-0.442 0-0.8-0.358-0.8-0.8v-9.6c0-0.442 0.358-0.8 0.8-0.8s0.8 0.358 0.8 0.8v9.6c0 0.442-0.358 0.8-0.8 0.8zM24 27.166v-7.933c2.64 0.237 3.2 1.709 3.2 3.966s-0.56 3.73-3.2 3.966z"></path>
      </svg>
    ),
    key: "0",
  },
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        Cameras & Camcorders
      </a>
    ),
    icon: (
      <svg viewBox="0 0 32 32">
        <path d="M15.2 24c-3.97 0-7.2-3.23-7.2-7.2s3.23-7.2 7.2-7.2c3.97 0 7.2 3.23 7.2 7.2s-3.23 7.2-7.2 7.2zM15.2 11.2c-3.088 0-5.6 2.512-5.6 5.6s2.512 5.6 5.6 5.6 5.6-2.512 5.6-5.6-2.512-5.6-5.6-5.6zM28 28.8h-25.6c-1.323 0-2.4-1.077-2.4-2.4v-16c0-1.323 1.077-2.4 2.4-2.4h2.4c0.664 0 1.696-0.427 2.166-0.898l0.938-0.938c0.779-0.779 2.197-1.366 3.298-1.366h8c1.101 0 2.518 0.587 3.298 1.366l0.938 0.938c0.469 0.469 1.502 0.898 2.166 0.898h2.4c1.323 0 2.4 1.077 2.4 2.4v16c0 1.323-1.077 2.4-2.4 2.4zM2.4 9.6c-0.442 0-0.8 0.358-0.8 0.8v16c0 0.442 0.358 0.8 0.8 0.8h25.6c0.442 0 0.8-0.358 0.8-0.8v-16c0-0.442-0.358-0.8-0.8-0.8h-2.4c-1.101 0-2.518-0.587-3.298-1.366l-0.938-0.938c-0.469-0.469-1.502-0.898-2.166-0.898h-8c-0.664 0-1.696 0.427-2.166 0.898l-0.938 0.938c-0.779 0.779-2.195 1.366-3.298 1.366h-2.4z"></path>
      </svg>
    ),
    key: "1",
  },
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        iPad & Tablets
      </a>
    ),
    icon: (
      <svg viewBox="0 0 32 32">
        <path d="M26.4 32h-20.8c-1.323 0-2.4-1.077-2.4-2.4v-27.2c0-1.323 1.077-2.4 2.4-2.4h20.8c1.323 0 2.4 1.077 2.4 2.4v27.2c0 1.323-1.077 2.4-2.4 2.4zM5.6 1.6c-0.442 0-0.8 0.358-0.8 0.8v27.2c0 0.442 0.358 0.8 0.8 0.8h20.8c0.442 0 0.8-0.358 0.8-0.8v-27.2c0-0.442-0.358-0.8-0.8-0.8h-20.8zM16.8 28.8h-1.6c-0.442 0-0.8-0.358-0.8-0.8s0.358-0.8 0.8-0.8h1.6c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8zM24.8 25.6h-17.6c-0.442 0-0.8-0.358-0.8-0.8v-20.8c0-0.442 0.358-0.8 0.8-0.8h17.6c0.442 0 0.8 0.358 0.8 0.8v20.8c0 0.442-0.358 0.8-0.8 0.8zM8 24h16v-19.2h-16v19.2z"></path>
      </svg>
    ),
    key: "2",
  },
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        Laptops & MacBooks
      </a>
    ),
    icon: (
      <svg viewBox="0 0 32 32">
        <path d="M5.6 22.4h20.8c1.323 0 2.4-1.077 2.4-2.4v-12.8c0-1.323-1.077-2.4-2.4-2.4h-20.8c-1.323 0-2.4 1.077-2.4 2.4v12.8c0 1.323 1.077 2.4 2.4 2.4zM4.8 7.2c0-0.442 0.358-0.8 0.8-0.8h20.8c0.442 0 0.8 0.358 0.8 0.8v12.8c0 0.442-0.358 0.8-0.8 0.8h-20.8c-0.442 0-0.8-0.358-0.8-0.8v-12.8zM31.2 24h-30.4c-0.442 0-0.8 0.358-0.8 0.8v1.6c0 1.323 1.077 2.4 2.4 2.4h27.2c1.323 0 2.4-1.077 2.4-2.4v-1.6c0-0.442-0.358-0.8-0.8-0.8zM29.6 27.2h-27.2c-0.442 0-0.8-0.358-0.8-0.8v-0.8h28.8v0.8c0 0.442-0.358 0.8-0.8 0.8z"></path>
      </svg>
    ),
    key: "3",
  },
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        Mobile Phones
      </a>
    ),
    icon: (
      <svg viewBox="0 0 32 32">
        <path d="M16.8 28.8h-1.6c-0.442 0-0.8-0.358-0.8-0.8s0.358-0.8 0.8-0.8h1.6c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8zM23.2 32h-14.4c-1.323 0-2.4-1.077-2.4-2.4v-27.2c0-1.323 1.077-2.4 2.4-2.4h14.4c1.323 0 2.4 1.077 2.4 2.4v27.2c0 1.323-1.077 2.4-2.4 2.4zM8.8 1.6c-0.442 0-0.8 0.358-0.8 0.8v27.2c0 0.442 0.358 0.8 0.8 0.8h14.4c0.442 0 0.8-0.358 0.8-0.8v-27.2c0-0.442-0.358-0.8-0.8-0.8h-14.4zM21.6 25.6h-11.2c-0.442 0-0.8-0.358-0.8-0.8v-20.8c0-0.442 0.358-0.8 0.8-0.8h11.2c0.442 0 0.8 0.358 0.8 0.8v20.8c0 0.442-0.358 0.8-0.8 0.8zM11.2 24h9.6v-19.2h-9.6v19.2z"></path>
      </svg>
    ),
    key: "4",
  },
  {
    label: (
      <a rel="noopener noreferrer" href="#">
        TVs & Appliances
      </a>
    ),
    icon: (
      <svg viewBox="0 0 32 32">
        <path d="M28 3.2h-25.6c-1.323 0-2.4 1.077-2.4 2.4v16c0 1.323 1.077 2.4 2.4 2.4h12v3.2h-5.6c-0.442 0-0.8 0.358-0.8 0.8s0.358 0.8 0.8 0.8h12.8c0.442 0 0.8-0.358 0.8-0.8s-0.358-0.8-0.8-0.8h-5.6v-3.2h12c1.323 0 2.4-1.077 2.4-2.4v-16c0-1.323-1.077-2.4-2.4-2.4zM28.8 21.6c0 0.442-0.358 0.8-0.8 0.8h-25.6c-0.442 0-0.8-0.358-0.8-0.8v-16c0-0.442 0.358-0.8 0.8-0.8h25.6c0.442 0 0.8 0.358 0.8 0.8v16z"></path>
      </svg>
    ),
    key: "5",
  },
];
const searchCategories: Category[] = [
  {
    id: 1,
    label: "All categories",
    value: "all categories",
  },
  {
    id: 2,
    label: "Audio & Speakers",
    value: "audio & speakers",
  },
  {
    id: 3,
    label: "Beats",
    value: "beats",
  },
  {
    id: 4,
    label: "Cameras & Camcorders",
    value: "cameras & camcorders",
  },
  {
    id: 5,
    label: "IPad & Tablets",
    value: "iPad & tablets",
  },
  {
    id: 6,
    label: "Laptops & Macbooks",
    value: "laptops & macbooks",
  },
  {
    id: 5,
    label: "Mobile phones",
    value: "mobile phones",
  },
  {
    id: 6,
    label: "TVs & Appliances",
    value: "tvs & appliances",
  },
  {
    id: 7,
    label: "Air purifiers",
    value: "air purifiers",
  },
  {
    id: 8,
    label: "Dishwashers",
    value: "dishwashers",
  },
];
const Header = () => {
  const { mobile, openSearch, toggleSearchDrawer } = useContext(MobileNavContext);

  const { register, handleSubmit } = useForm<ISearchValues>({
    defaultValues: {
      productName: "",
      category: { value: searchCategories[0].value },
    },
  });
  const onSubmit: SubmitHandler<ISearchValues> = (data) => console.log(data);
  return (
    <header>
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div>
              <span className="free-shipping">
                <span>
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.2273 9.66667V1H1V9.66667H11.2273ZM11.2273 9.66667H16V6.33333L13.9545 4.33333H11.2273V9.66667ZM5.77273 11.3333C5.77273 12.2538 5.00958 13 4.06818 13C3.12679 13 2.36364 12.2538 2.36364 11.3333C2.36364 10.4129 3.12679 9.66667 4.06818 9.66667C5.00958 9.66667 5.77273 10.4129 5.77273 11.3333ZM14.6364 11.3333C14.6364 12.2538 13.8732 13 12.9318 13C11.9904 13 11.2273 12.2538 11.2273 11.3333C11.2273 10.4129 11.9904 9.66667 12.9318 9.66667C13.8732 9.66667 14.6364 10.4129 14.6364 11.3333Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span>FREE SHIPPING OVER $100</span>
              </span>
              <div className="dropdowns">
                <Menu items={currencies} className="dropdown-menu currencies" />
                <Menu items={languages} className="dropdown-menu" />
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">
                    <FacebookFilled className="social-icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TwitterOutlined className="social-icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <InstagramOutlined className="social-icon" />
                  </a>
                </li>
                <li>
                  <a href="whatsapp://send?&phone=+994551234567&text=Hello!">
                    <WhatsAppOutlined className="social-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <div className="row nav-row">
            {mobile ? (
              <>
                <Navbar />
                <div className="logo">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="84.032"
                      height="23.52"
                      viewBox="0 0 84.032 23.52"
                    >
                      <path
                        d="M2.336-21.344V0H7.264V-8.416L13.024,0H19.04L12.48-8.736a6.716,6.716,0,0,0,2.976-1.632A5.839,5.839,0,0,0,17.12-14.72a6.435,6.435,0,0,0-1.856-4.768,7.635,7.635,0,0,0-5.44-1.856ZM7.264-17.5H8.416a4.815,4.815,0,0,1,2.72.672,2.59,2.59,0,0,1,.992,2.176,2.873,2.873,0,0,1-.8,2.08,4.053,4.053,0,0,1-2.944.928H7.264ZM31.84-12.672a5.354,5.354,0,0,0-4.48-2.08A6.881,6.881,0,0,0,22.4-12.8a8.127,8.127,0,0,0-2.208,5.76A7.552,7.552,0,0,0,22.272-1.7,6.764,6.764,0,0,0,27.616.48,4.756,4.756,0,0,0,31.84-1.728V0h4.608V-14.272H31.84Zm-3.328,1.888a3.856,3.856,0,0,1,2.56.992,3.619,3.619,0,0,1,1.056,2.624,3.625,3.625,0,0,1-1.12,2.688,3.413,3.413,0,0,1-2.4.992,3.785,3.785,0,0,1-2.72-1.12,3.681,3.681,0,0,1-.96-2.56A3.566,3.566,0,0,1,25.984-9.76,3.633,3.633,0,0,1,28.512-10.784Zm25.312-3.488H39.744v3.84h6.3L38.624,0h14.56V-3.84H46.432Zm15.968,0H55.712v3.84h6.3L54.592,0h14.56V-3.84H62.4Zm2.5,0V0H76.9V-14.272Zm-.384-6.08a2.663,2.663,0,0,0,2.688,2.688,2.663,2.663,0,0,0,2.688-2.688,2.663,2.663,0,0,0-2.688-2.688A2.663,2.663,0,0,0,71.9-20.352ZM80.544-2.9A2.88,2.88,0,0,0,83.456.01,2.88,2.88,0,0,0,86.368-2.9a2.88,2.88,0,0,0-2.912-2.91A2.88,2.88,0,0,0,80.544-2.9Z"
                        transform="translate(-2.336 23.04)"
                      ></path>
                    </svg>
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="logo">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="84.032"
                      height="23.52"
                      viewBox="0 0 84.032 23.52"
                    >
                      <path
                        d="M2.336-21.344V0H7.264V-8.416L13.024,0H19.04L12.48-8.736a6.716,6.716,0,0,0,2.976-1.632A5.839,5.839,0,0,0,17.12-14.72a6.435,6.435,0,0,0-1.856-4.768,7.635,7.635,0,0,0-5.44-1.856ZM7.264-17.5H8.416a4.815,4.815,0,0,1,2.72.672,2.59,2.59,0,0,1,.992,2.176,2.873,2.873,0,0,1-.8,2.08,4.053,4.053,0,0,1-2.944.928H7.264ZM31.84-12.672a5.354,5.354,0,0,0-4.48-2.08A6.881,6.881,0,0,0,22.4-12.8a8.127,8.127,0,0,0-2.208,5.76A7.552,7.552,0,0,0,22.272-1.7,6.764,6.764,0,0,0,27.616.48,4.756,4.756,0,0,0,31.84-1.728V0h4.608V-14.272H31.84Zm-3.328,1.888a3.856,3.856,0,0,1,2.56.992,3.619,3.619,0,0,1,1.056,2.624,3.625,3.625,0,0,1-1.12,2.688,3.413,3.413,0,0,1-2.4.992,3.785,3.785,0,0,1-2.72-1.12,3.681,3.681,0,0,1-.96-2.56A3.566,3.566,0,0,1,25.984-9.76,3.633,3.633,0,0,1,28.512-10.784Zm25.312-3.488H39.744v3.84h6.3L38.624,0h14.56V-3.84H46.432Zm15.968,0H55.712v3.84h6.3L54.592,0h14.56V-3.84H62.4Zm2.5,0V0H76.9V-14.272Zm-.384-6.08a2.663,2.663,0,0,0,2.688,2.688,2.663,2.663,0,0,0,2.688-2.688,2.663,2.663,0,0,0-2.688-2.688A2.663,2.663,0,0,0,71.9-20.352ZM80.544-2.9A2.88,2.88,0,0,0,83.456.01,2.88,2.88,0,0,0,86.368-2.9a2.88,2.88,0,0,0-2.912-2.91A2.88,2.88,0,0,0,80.544-2.9Z"
                        transform="translate(-2.336 23.04)"
                      ></path>
                    </svg>
                  </a>
                </div>
                <Navbar />
              </>
            )}
            <ul className="nav-right">
              {mobile && (
                <li>
                  <Button onClick={toggleSearchDrawer} className="drawer-btn">
                    <svg
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </Button>
                </li>
              )}
              <li>
                <a href="#">
                  <svg
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      d="M21.9353 20.0337L20.7493 8.51772C20.7003 8.0402 20.2981 7.67725 19.8181 7.67725H4.21338C3.73464 7.67725 3.33264 8.03898 3.28239 8.51523L2.06458 20.0368C1.96408 21.0424 2.29928 22.0529 2.98399 22.8097C3.66874 23.566 4.63999 24.0001 5.64897 24.0001H18.3827C19.387 24.0001 20.3492 23.5747 21.0214 22.8322C21.7031 22.081 22.0361 21.0623 21.9353 20.0337ZM19.6348 21.5748C19.3115 21.9312 18.8668 22.1275 18.3827 22.1275H5.6493C5.16836 22.1275 4.70303 21.9181 4.37252 21.553C4.042 21.1878 3.88005 20.7031 3.92749 20.2284L5.056 9.55014H18.9732L20.0724 20.2216C20.1223 20.7281 19.9666 21.2087 19.6348 21.5748Z"
                      fill="currentColor"
                    ></path>{" "}
                    <path
                      d="M12.1717 0C9.21181 0 6.80365 2.40811 6.80365 5.36803V8.6138H8.67622V5.36803C8.67622 3.44053 10.2442 1.87256 12.1717 1.87256C14.0992 1.87256 15.6674 3.44053 15.6674 5.36803V8.6138H17.5397V5.36803C17.5397 2.40811 15.1316 0 12.1717 0Z"
                      fill="currentColor"
                    ></path>{" "}
                  </svg>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bottom-header">
        <div className="container">
          <div className="row">
            {!mobile && (
              <Menu
                items={categories}
                title={
                  <div className="browse">
                    <span>
                      <svg
                        aria-hidden="true"
                        role="img"
                        focusable="false"
                        width="24"
                        height="18"
                        viewBox="0 0 24 18"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 0H0V2.10674H24V0Z"></path>
                        <path d="M24 7.88215H0V9.98889H24V7.88215Z"></path>
                        <path d="M24 15.8925H0V18H24V15.8925Z"></path>
                      </svg>
                    </span>
                    <span>Browse Categories</span>
                  </div>
                }
              />
            )}
            {!mobile ? (
              <form
                method="get"
                id="search-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="text"
                  placeholder="Search for items and brands"
                  {...register("productName")}
                />
                <div className="categories-select">
                  <SelectOption
                    items={searchCategories}
                    onSelectChange={(value) =>
                      register("category.value").onChange({
                        target: { value, name: "category.value" },
                        type: "change",
                      })
                    }
                  />
                </div>
                <div className="search">
                  <button type="submit">
                    <SearchOutlined className="search_icon" />
                  </button>
                </div>
              </form>
            ) : (
              <Drawer
                title="Search product"
                placement="right"
                open={openSearch}
                onClose={toggleSearchDrawer}
              >
                <form
                  method="get"
                  id="mobile-search-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    type="text"
                    placeholder="Search for items and brands"
                    {...register("productName")}
                  />
                  <div className="categories-select">
                    <SelectOption
                      items={searchCategories}
                      onSelectChange={(value) =>
                        register("category.value").onChange({
                          target: { value, name: "category.value" },
                          type: "change",
                        })
                      }
                    />
                  </div>
                  <div className="search">
                    <button type="submit">
                      <SearchOutlined className="search_icon" />
                    </button>
                  </div>
                </form>
              </Drawer>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
