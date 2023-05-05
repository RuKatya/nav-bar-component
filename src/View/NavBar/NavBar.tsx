import { NavLink } from 'react-router-dom'
import { useResponsivity } from '../../helper/useWidth'
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const isMobile = useResponsivity()

    useEffect(() => {
        isMobile === false && setToggleMenu(false)
    }, [isMobile])

    return (
        <nav>
            <button className='navbar__btnMenu' onClick={() => setToggleMenu(!toggleMenu)}>{toggleMenu ? "X" : "Menu"}</button>

            {(toggleMenu || !isMobile) && (
                <div className='navbar__navigation'>
                    <NavLink to="/" onClick={() => setToggleMenu(false)}>Home</NavLink>
                    <NavLink to="/about" onClick={() => setToggleMenu(false)}>About</NavLink>
                    <NavLink to="/more" onClick={() => setToggleMenu(false)}>More</NavLink>
                </div>
            )}
        </nav>
    )
}

export default NavBar
