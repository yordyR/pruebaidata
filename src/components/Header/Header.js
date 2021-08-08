import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import avatar from '../../assets/images/avatar.png'
import Logo from './../../assets/images/logoidata.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <Link to="/">
                    <img 
                        className="" 
                        src={Logo} 
                        alt="IDATA"  />
                </Link>
            </div>
            <div className="header-avatar">
                
                <div className="header-avatar--logo">
                    <Link to="">
                        <img 
                        className="" 
                        src={avatar} 
                        alt="CRM - Addi"  />
                        <span>
                            Yordy Riascos G
                        </span>
                    </Link>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Header;