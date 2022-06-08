// import { useState } from "react";
import images from "~/assets/images";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEllipsisVertical,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faGear,
  faCoins,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import Button from "~/components/Core-component/Button";
import Menu from "~/components/Popper/Menu";
import MessegeIcon from "~/components/Icons";
import Image from "~/components/Images";
import { SearchHeader } from "../Search";

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
  // const [textvalue, setTextValue] = useState("");
  // const [visible, setVisible] = useState(false);

  // const handleInput = (e) => {
  //   setTextValue(e.target.value);
  //   if (e.target.value === "") {
  //     setVisible(false);
  //   } else if (e.target.value !== "") {
  //     setTimeout(() => {
  //       setVisible(!visible);
  //     }, 1000);
  //   }
  // };

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
      separate: true,
    },
  ];

  // console.log("userMenu: ", userMenu);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>

        <SearchHeader />

        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  Upload
                </Button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Messege" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessegeIcon />
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
              <Image
                className={cx("avatar-user")}
                src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
                alt="Mèo Simmy"
                fallback='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1654826400&x-signature=wGsEJopXhWR7AopfLcUC0ugE7O0%3D'
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
