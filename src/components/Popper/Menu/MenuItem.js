import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Core-component/Button";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    // console.log('data: ', data);
  return (
    <Button className={cx("menu-item")} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
