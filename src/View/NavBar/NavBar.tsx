import { Link } from 'react-router-dom'
import { useResponsivity } from '../../helper/useWidth'
import { useState } from 'react';

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const isMobile = useResponsivity()

    return (
        <nav>
            <button className='navbar__btnMenu' onClick={() => setToggleMenu(!toggleMenu)}>{toggleMenu ? "Close" : "Menu"}</button>

            {(toggleMenu || !isMobile) && (
                <div className='navbar__navigation'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/more">More</Link>
                </div>
            )}
        </nav>
    )
}

export default NavBar
