import styles from "./SearchHeader.module.scss";
import classNames from "classnames/bind";

import { useState, useRef, useEffect } from "react";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import HeadLessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchHeader = () => {
  const cx = classNames.bind(styles);
  const inputRef = useRef();
  const [textvalue, setTextValue] = useState("");
  const [searchResult, setSearchResult] = useState(true);
  const [showResult, setShowResult] = useState(true);
  // const [visible, setVisible] = useState(false);

  console.log("search reasult: ", showResult);
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

  useEffect(() => {
    fetch("https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less")
      .then((res) => res.json())
      .then((res) => {
        // setSearchResult(res.data);
        setSearchResult(res?.data);
      });
  }, [textvalue]);

  const handleClear = () => {
    setTextValue("");
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(!showResult);
  };

  const handleShowSearchResult = () => {
    if (searchResult.length > 0) {
      setShowResult(true);
    }
  };

  const handleTextVal = (e) => {
    setTextValue(e.target.value);
    console.log("text value ne2:", e.target.value);
  };

  return (
    <div>
      <HeadLessTippy
        interactive
        onClickOutside={handleHideResult}
        // visible
        visible={showResult && searchResult.length > 0}
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
            ref={inputRef}
            value={textvalue}
            onChange={(e) =>{ handleTextVal(e)}}
            placeholder={"Search user or videos"}
            onFocus={handleShowSearchResult}
            // onChange={(e) => handleInput(e)}
          />
          {!!textvalue && (
            <button onClick={handleClear} className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}
          {/* loading */}
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
  );
};
