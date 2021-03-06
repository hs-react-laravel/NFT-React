import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import './defaultpage.css'
import logo from '../../assets/Crypto-Hermits-Logo-2-Small.png';
import HeaderLink from '../HeaderLink/HeaderLink';
import Footer from '../Footer/Footer';
import MobileMenu from '../MobileMenu';

export default function DefaultPage(props) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log('Default Page open menu')
  }, [props.openMenu])
  return (
    <div className="default-layout">
      <div className="default-background-wrapper">
        <div className="header-gradient" />
        <div className='center-image' alt='CryptoHermits Logo' />
        <div className="footer-gradient" />
      </div>
      <div className="content-wrapper">
        <img src={logo} className="top-left-logo" alt="logo" onClick={() => navigate('/')} />
        <HeaderLink />
        <MobileMenu openStatus={props.openMenu} />
        <div className="child-wrapper">
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  )
}