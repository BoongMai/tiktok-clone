import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

console.log(images.logo);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>

        <div className={cx("search")}>
          <input placeholder={"Search user or videos"} />

          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>

          {/* loading */}
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

          <buton className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </buton>
        </div>

        <div className={cx("action")}>Action</div>
      </div>
    </header>
  );
}

export default Header;
