import { useState } from "react";

function useCount(addItem) {
    const [count, setCount] = useState(0)
    const increase = (() => {
        setCount((previous) => previous + addItem)
    });
    return [count, increase];
}

export default useCount;