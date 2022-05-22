// import { useEffect, useState } from "react";
import images from "~/assets/images";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Core-component/Button";

const cx = classNames.bind(styles);

console.log(images.logo);
function Header() {
  // const [searchResult, setSearchResult] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([1, 2, 3]);
  //   }, 0);
  // });

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>

        <div>
          <Tippy
            interactive
            // visible={searchResult.length > 0}
            visible={false}
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
              <input placeholder={"Search user or videos"} />

              <button className={cx("clear")}>
                <FontAwesomeIcon icon={faCircleXmark} />.
              </button>

              {/* loading */}
              <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
              <div>
                <Tippy content={"Tìm kiếm"}>
                  <button className={cx("search-btn")}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </Tippy>
              </div>
            </div>
          </Tippy>
        </div>

        <div className={cx("action")}>
          <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
          <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn}/>}>
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
