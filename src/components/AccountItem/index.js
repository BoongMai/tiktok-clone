import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("acc-avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/e50cb5d0067961bbd8e4b22585d5b3ba~c5_300x300.webp?x-expires=1653321600&x-signature=MtZyWY942NkxSobMHEbXEZ8SQo4%3D"
        alt="avatar"
      />

      <div className={cx("acc-info")}>
        <span className={cx("acc-name")}>
          <span>Độc cô quằn quại</span>
          <FontAwesomeIcon className={cx("acc-check")} icon={faCircleCheck} />
        </span>
        <span className={cx("acc-username")}>doccoquanquai3</span>
      </div>
    </div>
  );
}

export default AccountItem;
