import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { forwardRef } from "react";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

const Button = forwardRef(
  (
    {
      to,
      href,
      onClick,
      primary = false,
      outline = false,
      upload = false,
      rounded = false,
      disabled = false,
      small = false,
      large = false,
      leftIcon = false,
      rightIcon = false,
      className,
      children,
      ...passProps
    },
    ref
  ) => {
    let Comp = "button";

    const props = {
      onClick,
      ...passProps,
    };

    if (disabled) {
      Object.keys(props).forEach((key) => {
        if (key.startsWith("on") && typeof props[key] === "function") {
          delete props[key];
        }
      });
    }

    if (to) {
      props.to = to;
      Comp = Link;
    } else if (href) {
      props.href = href;
      Comp = "a";
    }

    const classes = cx("wrapper", {
      [className]: className,
      primary: primary,
      outline: outline,
      upload: upload,
      disabled: disabled,
      small: small,
      large: large,
      rounded: rounded,
      leftIcon: leftIcon,
      rightIcon: rightIcon,
    });

    return (
      <Comp ref={ref} className={classes} {...props}>
        {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
        <span className={cx("title")}>{children}</span>
        {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
      </Comp>
    );
  }
);

export default Button;
