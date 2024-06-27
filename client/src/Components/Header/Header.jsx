import { useEffect, useReducer, useState, useRef } from "react";

// Styles
import styles from "./Header.module.css";

// Icons from "react-icons.github.io/"
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

// Components
import Logo from "../Widgets/Logo/Logo";

const menuLSt = [
  {
    name: "Home",
  },
  {
    name: "Skills",
  },
  {
    name: "Certificates",
  },
  {
    name: "Projects",
  },
  {
    name: "Contact",
  },
];

const initialSection = menuLSt[0].name.toLowerCase();

const reducer = (state, action) => {
  const menuItem = menuLSt.find(
    (item) => item.name.toLowerCase() === action.type
  );
  return menuItem ? menuItem.name.toLowerCase() : state;
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [curSection, dispatch] = useReducer(reducer, initialSection);
  const menuRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 995) {
        setShowMenu(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleIcon = () => {
    setShowMenu((prev) => !prev);
  };

  const menu = menuLSt.map((item) => item.name);

  return (
    <>
      <header className={styles.header}>
        <Logo />

        {showMenu ? (
          <RxCross2 className={styles.menu_bar_icon} onClick={toggleIcon} />
        ) : (
          <FaBars className={styles.menu_bar_icon} onClick={toggleIcon} />
        )}

        <nav
          ref={menuRef}
          className={`${styles.navbar} ${showMenu ? styles.active : ""}`}
        >
          {menu.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              id={item === "Contact" ? `${styles.contactMenu}` : ""}
              className={curSection === item.toLowerCase() ? styles.active : ""}
              onClick={() => dispatch({ type: `${item.toLowerCase()}` })}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;
