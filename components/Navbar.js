import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

import '../App.css'
import { SidebarData } from './SidebarData';



const Navbar =()=> {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar =()=>setSidebar(!sidebar);

    return (
    <div>
        <div className='navbar'>
            <Link to='#' className='menu-bars'>
                <FontAwesomeIcon className='icon' icon={faBars} onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar? 'nav-menu active': 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <FontAwesomeIcon className='icon' icon={faX} onClick={showSidebar}/>
                    </Link>
                </li>
                {SidebarData.map((item, index)=>{
                    return(
                        <li className={item.cName} onClick={showSidebar}>
                            <Link className='link' to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>

                    )
                })

                }
            </ul>


        </nav>
    </div>
    )

}


export default Navbar