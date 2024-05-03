/* eslint-disable @typescript-eslint/no-unused-vars */
import type { MenuProps } from "antd";
import { Button, Drawer, Menu } from "antd";
import { useEffect, useState } from "react";
import "./Navbar.scss";
import { useContext } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { MobileNavContext } from "../../../../context/HeaderProvider";
import { categories } from "../../../../data/data";
const items: MenuProps["items"] = [
  {
    label: (
      <a href="#" rel="noopener noreferrer">
        Home
      </a>
    ),
    key: "home",
  },
  {
    label: "Shop",
    key: "shop",
    children: [
      {
        type: "group",
        children: categories,
      },
    ],
  },
  {
    label: (
      <a href="#blog" rel="noopener noreferrer">
        Blog
      </a>
    ),
    key: "blog",
  },
  {
    label: (
      <a href="#about" rel="noopener noreferrer">
        About
      </a>
    ),
    key: "about",
  },
  {
    label: (
      <a href="#contact" rel="noopener noreferrer">
        Contact
      </a>
    ),
    key: "contact",
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const { mobile, setMobile, toggleNavDrawer, openNav } =
    useContext(MobileNavContext);
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const handleResize = () => {
    if (window.innerWidth < 820) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  useEffect(() => {
    if (window.innerWidth < 820) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const updatedItems = items.map((item) => {
    if (!mobile && item?.key === "shop") {
      return {
        ...item,
        children: undefined,
      };
    }
    return item;
  });

  return (
    <div className="navbar-menu-container">
      {mobile ? (
        <>
          <Button
            onClick={toggleNavDrawer}
            className="drawer-btn nav-drawer-btn"
          >
            <MenuOutlined />
          </Button>
          <Drawer placement="left" open={openNav} onClose={toggleNavDrawer}>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="inline"
              items={updatedItems}
              className="navbar-menu navbar-menu-mobile"
            />
          </Drawer>
        </>
      ) : (
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={updatedItems}
          className="navbar-menu"
        />
      )}
    </div>
  );
};

export default Navbar;
