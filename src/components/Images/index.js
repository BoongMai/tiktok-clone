import classNames from "classnames";
import { forwardRef } from "react";
import images from "~/assets/images";
import { useState } from "react";
import styles from "./Image.module.scss";

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customFallBack = images.noImage,
      ...props
    },
    ref
  ) => {
    const [fallBack, setFallBack] = useState("");

    const handleError = () => {
      setFallBack(customFallBack);
    };

    return (
      <img
        customfallback={customFallBack}
        className={classNames(styles.wrapper, className)}
        src={fallBack || src}
        alt={alt}
        ref={ref}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
