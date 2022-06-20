import './Navbar.css';
import logo from '../../img/logo.png';
import home from '../../img/home.png';
import addPost from '../../img/add-post.png';
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import {Link} from "react-router-dom";
import React from "react";
import {store} from "../../store/indexStore";


function Navbar(props) {
    function GetCurrentUser() {
        return store.getState().users.filter(user => user.isCurrentUser)[0]
    }

    const user = GetCurrentUser()

            return (
                <nav className="navbar">
                    <div className="navbar__nav nav">

                        <Link to={'/'}><img className="nav__logo" src={logo} alt="Instagram logo"/></Link>

                        <div className="nav__elems">
                            <Link to={'/'}><img className="nav__icon" src={home} alt="homepage button"/></Link>
                            <Link to={'add'}><img className="nav__icon" src={addPost} alt="add post button"/></Link>
                            <Link to={'profile'}><ProfileIcon iconSize={'small'} image={user.avatar} /></Link>
                        </div>
                    </div>
                </nav>

            );
}

export default Navbar;
