import React from 'react';
import { Navbar, Nav, Collapse } from 'bootstrap-4-react';
import logo from '../../assets/logo.png'
import perfil from '../../assets/perfil.png'
import sair from '../../assets/sair.png'
import settings from '../../assets/configuraes.png'
import './header.css'

const Header = () => {
  return (
    <Navbar expand="lg" light className="custom-navbar">
      <Navbar.Brand href="#">
        <img src={logo} alt='Logo da Algar' />
      </Navbar.Brand>
      <Navbar.Toggler target="#navbarNav" />
      <Collapse navbar id="navbarNav">
        <Navbar.Nav className="ml-auto">
          <Nav.ItemLink href="#" active className="nav-item">
            <div>
              <img src={perfil} alt='' className="nav-icon" />
              <span className="nav-text">Profile</span>
            </div>
          </Nav.ItemLink>
          <Nav.ItemLink href="#" className="nav-item">
            <div>
              <img src={settings} alt='' className="nav-icon" />
              <span className="nav-text">Settings</span>
            </div>
          </Nav.ItemLink>
          <Nav.ItemLink href="#" className="nav-item">
            <div>
              <img src={sair} alt='' className="nav-icon" />
              <span className="nav-text">Logout</span>
            </div>
          </Nav.ItemLink>
        </Navbar.Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header;
