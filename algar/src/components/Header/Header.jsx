import React, {  } from 'react';
import { Navbar, Nav, Collapse,  } from 'bootstrap-4-react';
import logo from '../../assets/logo.png'
import perfil from '../../assets/perfil.png'
import sair from '../../assets/sair.png'
import settings from '../../assets/configuraes.png'
import './header.css'

const Header = () => {
  return (
    <Navbar expand="lg" light >
    <Navbar.Brand href="#">
      <img src={logo} alt='Logo da ALgar' />
    </Navbar.Brand>
    <Navbar.Toggler target="#navbarNav" />
    <Collapse navbar id="navbarNav">
      <Navbar.Nav>
        <Nav.ItemLink href="#" active>
          <img src={perfil} alt='' />
        </Nav.ItemLink>
        <Nav.ItemLink href="#">
        <img src={settings} alt='' />
        </Nav.ItemLink>
        <Nav.ItemLink href="#">
        <img src={sair} alt='' />
        </Nav.ItemLink>
        
      </Navbar.Nav>
    </Collapse>
  </Navbar>
      
    
  )
}

export default Header