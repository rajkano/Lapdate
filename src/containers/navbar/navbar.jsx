// Dependency Imports
import React from 'react'
import PropTypes from "prop-types";

// Custom Imports
import Wrapper from '../../hoc/Wrapper';
import LOGO from "../../static/images/Logo.png"
import FLAG from "../../static/images/app_images/flag.png"

class Navbar extends React.Component {
    render() {
        return (
            <Wrapper>           
                <nav className="navbar sticky-top navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={LOGO} width="125px" height="auto" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse Navbar_Menu" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto justify-content-start">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Top Départ</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Notre émission</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">A propos de nous</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Ils parlent de nous</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Nous contacter</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link icone-social nav_icon" href="#"></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><img src={FLAG} width="30px" height="30px" /></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link icone-aide nav_icon" href="#"></a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link icone-compte nav_icon" href="#"></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link icone-panier nav_icon" href="#"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </Wrapper>
        )
    }
}

// Create validations for Props, required or type etc.
Navbar.propTypes = {
    dispatch: PropTypes.any.isRequired,
    lang: PropTypes.any.isRequired
};

export default Navbar;
