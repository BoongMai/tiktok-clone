import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {

    const [defaultVal, setDefaultVal] = useState(value)

    useEffect(() => {
        const debonce = setTimeout(() => setDefaultVal(value), delay)

        return () => clearTimeout(debonce)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return defaultVal
}

export default useDebounce;