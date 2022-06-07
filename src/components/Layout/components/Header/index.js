import { useState } from "react";
import images from "~/assets/images";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
  faEllipsisVertical,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faCloudUpload,
  faGear,
  faCoins,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import HeadLessTippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Core-component/Button";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);

// Current user
const currentUser = true;

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vn",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const [textvalue, setTextValue] = useState("");
  const [visible, setVisible] = useState(false);

  const handleInput = (e) => {
    setTextValue(e.target.value);
    if (e.target.value === "") {
      setVisible(false);
    } else if (e.target.value !== "") {
      setTimeout(() => {
        setVisible(!visible);
      }, 1000);
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([1]);
  //   }, 0);
  // }, []);

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@hoa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coin",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: "Log out",
      to: "/login",
      separate: true
    },
  ];

  console.log("userMenu: ", userMenu);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>

        <div>
          <HeadLessTippy
            interactive
            visible={visible}
            render={(attrs) => (
              <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <h3 className={cx("search-title")}>Account</h3>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                </PopperWrapper>
              </div>
            )}
          >
            <div className={cx("search")}>
              <input
                value={textvalue}
                onChange={handleInput}
                placeholder={"Search user or videos"}
              />

              <button className={cx("clear")}>
                <FontAwesomeIcon icon={faCircleXmark} />.
              </button>

              {/* loading */}
              <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
              <div>
                <HeadLessTippy content={"Tìm kiếm"}>
                  <button className={cx("search-btn")}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </HeadLessTippy>
              </div>
            </div>
          </HeadLessTippy>
        </div>
        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Messege" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS}>
            {currentUser ? (
              <img
                className={cx("avatar-user")}
                src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
                alt="Mèo Simmy"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
