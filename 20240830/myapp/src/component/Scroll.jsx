import React, { useEffect } from 'react'

// hooks 폴더에 useScrollEnd.jsx 내용
const useScrollEnd = (onScrollToEnd) => {
    useEffect(() => {
        const handlerScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                onScrollToEnd()
            }
        }
        window.addEventListener("scroll", handlerScroll);
        return () => {
            window.removeEventListener("scroll", handlerScroll);
        }
    }, [onScrollToEnd])
}

const Scroll = () => {
    useScrollEnd(() => { console.log("끝남") })
    return (
        <div className='scroll-content'>

        </div>
    )
}
export default Scroll
