import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useResponsivity } from '../../helper/useWidth'

interface Link {
    to: string,
    title: string
}
const links: Array<Link> = [
    { to: "/", title: "Home" },
    { to: "/about", title: "About" },
    { to: "/more", title: "More" }
]
const NavBar: FC = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const isMobile: boolean = useResponsivity()

    useEffect(() => {
        isMobile === false && setToggleMenu(false)
    }, [isMobile])

    return (
        <nav>
            <button className='navbar__btnMenu' onClick={() => setToggleMenu(!toggleMenu)}>{toggleMenu ? "X" : "Menu"}</button>

            {(toggleMenu || !isMobile) && (
                <div className='navbar__navigation'>
                    {links.map((link, index) => (
                        <NavLink key={index} to={link.to} onClick={() => setToggleMenu(false)}>{link.title}</NavLink>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default NavBar
