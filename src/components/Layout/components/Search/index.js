import styles from "./SearchHeader.module.scss";
import classNames from "classnames/bind";
import { useDebounce } from "~/components/hooks";
import * as searchService from "~/apiServices/searchService";

import { useState, useRef, useEffect } from "react";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

import HeadLessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchIcon } from "~/components/Icons";

export const SearchHeader = () => {
  const cx = classNames.bind(styles);
  const inputRef = useRef();
  const [textvalue, setTextValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  // const [visible, setVisible] = useState(false);

  const debouce = useDebounce(textvalue, 500);

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
    if (!debouce.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchAPI = async () => {
      setLoading(true);

      const result = await searchService.search(debouce);
      setSearchResult(result);
      
      setLoading(false);
    };

    fetchAPI();
  }, [debouce]);

  const handleClear = () => {
    setTextValue("");
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(!showResult);
  };

  const handleShowSearchResult = () => {
    if (searchResult?.length > 0) {
      setShowResult(true);
    }
  };

  const handleTextVal = (e) => {
    const searchValue = e.target.value
    if(!searchValue.startsWith(' ')) {
      setTextValue(searchValue);
    }
  };

  return (
    <div>
      <HeadLessTippy
        interactive
        onClickOutside={handleHideResult}
        // visible
        visible={showResult && textvalue.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h3 className={cx("search-title")}>Account</h3>
              {searchResult?.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={textvalue}
            onChange={(e) => {
              handleTextVal(e);
            }}
            placeholder={"Search user or videos"}
            onFocus={handleShowSearchResult}
            // onChange={(e) => handleInput(e)}
          />
          {loading === false && !!textvalue && (
            <button onClick={handleClear} className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}

          {/* loading */}
          <div>
            <HeadLessTippy content={"Tìm kiếm"}>
              <button onMouseDown={(e) => e.preventDefault()} className={cx("search-btn")}>
                <SearchIcon className ={textvalue ? cx("color-btn") : ""} />
              </button>
            </HeadLessTippy>
          </div>
        </div>
      </HeadLessTippy>
    </div>
  );
};
