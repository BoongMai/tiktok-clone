import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from "~/components/Images";

const cx = classNames.bind(styles);

function AccountItem({ data }) {

  console.log('data nè: ', data);
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <Image
        className={cx("acc-avatar")}
        src={data.avatar}
        alt={data.full_name}
      />

      <div className={cx("acc-info")}>
        <span className={cx("acc-name")}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx("acc-check")} icon={faCircleCheck} />}
        </span>
        <span className={cx("acc-username")}>{data.nick_name}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
