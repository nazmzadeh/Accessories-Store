/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FacebookFilled,
  InstagramOutlined,
  SearchOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons/lib/icons";
import Menu from "../../DropdownMenu/Menu";
import "./Header.scss";
import Navbar from "./components/Navbar";
import { useContext, useEffect } from "react";
import { MobileNavContext } from "../../../context/HeaderProvider";
import SelectOption from "../../Select/Select";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISearchValues } from "../../../types";
import { Button, Drawer } from "antd";
import {
  categories,
  currencies,
  languages,
  searchCategories,
} from "../../../data/data";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setCurrenciesList } from "../../../features/currenciesSlice";
import { setLanguagesList } from "../../../features/languagesSlice";

const Header = () => {
  const { mobile, openSearch, toggleSearchDrawer } =
    useContext(MobileNavContext);

  const { register, handleSubmit } = useForm<ISearchValues>({
    defaultValues: {
      productName: "",
      category: { value: searchCategories[0].value },
    },
  });

  const onSubmit: SubmitHandler<ISearchValues> = (data) => console.log(data);
  const dispatch = useAppDispatch();
  const currenciesList = useAppSelector((state) => state.currencies.items);
  const languagesList = useAppSelector((state) => state.languages.items);
  useEffect(() => {
    dispatch(setCurrenciesList(currencies));
    dispatch(setLanguagesList(languages));
  }, [dispatch]);

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
                <Menu
                  items={currenciesList}
                  className="dropdown-menu currencies"
                />
                <Menu items={languagesList} className="dropdown-menu" />
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
                  placeholder="Search for items"
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
