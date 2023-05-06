import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useResponsivity } from '../../helper/useWidth'

export interface Link {
    to: string,
    title: string
}

interface NavBarProps {
    links: Array<Link>,
    userFontFamily?: string,
    userFontWeight?: number,
    userBackgroundColor?: string,
    userColor?: string,
    userFontSize?: string
}


const NavBar: FC<NavBarProps> = ({ links,
    userFontFamily = "Segoe UI",
    userFontWeight = 600,
    userBackgroundColor = "rgb(86, 178, 249)",
    userColor = "white",
    userFontSize = "clamp(16px, 1vw, 24px)"
}) => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const isMobile: boolean = useResponsivity()

    useEffect(() => {
        isMobile === false && setToggleMenu(false)
    }, [isMobile])

    return (
        <nav style={{
            fontFamily: userFontFamily,
            backgroundColor: userBackgroundColor
        }}>
            <button
                className='navbar__btnMenu'
                style={{
                    fontWeight: userFontWeight,
                    color: userColor,
                    fontSize: userFontSize
                }}
                onClick={() => setToggleMenu(!toggleMenu)}>
                {toggleMenu ? "X" : "Menu"}
            </button>

            {(toggleMenu || !isMobile) && (
                <div
                    className='navbar__navigation'
                    style={{
                        backgroundColor: userBackgroundColor
                    }}
                >
                    {links.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.to}
                            onClick={() => setToggleMenu(false)}
                            style={{
                                fontWeight: userFontWeight,
                                color: userColor,
                                fontSize: userFontSize
                            }}
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default NavBar
