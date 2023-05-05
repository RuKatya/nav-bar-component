import { useEffect, useState } from "react"

export const useResponsivity = (): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth > 768 ? false : true)

    useEffect(() => {
        const changeWidth = () => {
            window.innerWidth > 768 ? setIsMobile(false) : setIsMobile(true)
        };

        window.addEventListener("resize", changeWidth);
    })

    return isMobile;
}