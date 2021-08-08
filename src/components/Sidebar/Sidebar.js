import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

  
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-menu">

                <ul>
                    <li>
                        <NavLink
                            to="/login"
                        >
                            <span>
                                Login 
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/usuarios" 
                        >
                            <span>
                                usuarios
                            </span>
                        </NavLink>
                    </li>

                   

                   
                </ul>
            </div>

        </div>
    )
}


export default Sidebar;