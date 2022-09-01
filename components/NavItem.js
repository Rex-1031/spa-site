import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

class NavItem extends Component{
    render(){
        return (
            <li id={this.props.item}>
                <Link 
                    className='link'
                    to={this.props.tolink}
                    onClick={()=>this.activeItem(this.activec)}
                >
                    {this.props.item}
                </Link>
            </li>
      )
    }
}

export default NavItem