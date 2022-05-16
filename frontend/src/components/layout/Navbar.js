import '../../styles/components/layout/Nav.css'
import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Navbar.elements";
import {
  FaBattleNet,
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaGlasses,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          
          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
               <ul className='ulNav'>
                   <li onClick={ () => setShowMobileMenu(!showMobileMenu)} className='liNav'><NavLink activeClassName='activo' exact to="/">Home</NavLink></li>
                   <li onClick={ () => setShowMobileMenu(!showMobileMenu)} className='liNav'><NavLink activeClassName='activo' exact to="/nosotros">Nosotros</NavLink></li>
                   <li onClick={ () => setShowMobileMenu(!showMobileMenu)} className='liNav'><NavLink activeClassName='activo' exact to="/tecnologias">Tecnologias</NavLink></li>
                   <li onClick={ () => setShowMobileMenu(!showMobileMenu)} className='liNav'><NavLink activeClassName='activo' exact to="/disenios">Diseños</NavLink></li>
                   <li onClick={ () => setShowMobileMenu(!showMobileMenu)} className='liNav'><NavLink activeClassName='activo' exact to="/novedades">Novedades</NavLink></li>
                   <li onClick={ () => setShowMobileMenu(!showMobileMenu)} className='liNav'><NavLink activeClassName='activo' exact to="/contactos">Contactos</NavLink></li>
               </ul> 
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;