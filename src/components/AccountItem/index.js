import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from '~/components/Images'

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <Image
        className={cx("acc-avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9cd1832005df1b7a9e7b4e7d557e1dd7~c5_100x100.jpeg?x-expires=1654826400&x-signature=8o6%2BEqM9n7hnWKJFuAYdkatIr3M%3D"
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
