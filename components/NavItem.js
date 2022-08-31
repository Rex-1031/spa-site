import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const NavItem = () =>{
        return (
            <li id={this.props.item}>
                <Link 
                    className='link'
                    to={this.props.tolink}
                    onClick={()=>this.activeItem(this.item)}
                >
                    {this.props.item}
                </Link>
            </li>
      )
}

export default NavItem