/* eslint-disable @typescript-eslint/no-unused-vars */
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { useEffect, useState } from "react";
import "./Navbar.scss";
import { useContext } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { MobileNavContext } from "../../../../context/ContextProvider";
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
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
          {
            label: "Option 3",
            key: "setting:3",
          },
        ],
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
  const [collapsed, setCollapsed] = useState(false);
  const { mobile, setMobile } = useContext(MobileNavContext);
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const handleResize = () => {
    if (window.innerWidth < 820) {
      setCollapsed(true);
      setMobile(true);
    } else {
      setCollapsed(false);
      setMobile(false);
    }
  };
  useEffect(() => {
    if (window.innerWidth < 820) {
      setCollapsed(true);
      setMobile(true);
    } else {
      setCollapsed(false);
      setMobile(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar-menu-container">
      {mobile && (
        <Button
          onClick={toggleCollapsed}
          style={{ marginBottom: 16 }}
          id="collapse-btn"
        >
          {collapsed ? <MenuOutlined /> : <CloseOutlined />}
        </Button>
      )}

      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode={mobile ? "inline" : "horizontal"}
        items={items}
        className={`navbar-menu ${mobile && "navbar-menu-mobile"} ${
          collapsed && "navbar-menu-hidden"
        }`}
      />
    </div>
  );
};

export default Navbar;
