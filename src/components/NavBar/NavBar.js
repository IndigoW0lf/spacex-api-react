import React, {useRef} from 'react';
import useNavigation from './../../hooks/useNavigation';

const NavBar = () => {
    const navRef = useRef(null);
    const { isMobileView, isMenuOpen, setIsMenuOpen } = useNavigation(navRef);

    return <div className="container-fluid" ref={navRef}></div>;
};

export default NavBar;
