// Dependency Imports
import React from 'react'
import PropTypes from "prop-types";

// Custom Imports
import Wrapper from '../../hoc/Wrapper';
import "../../static/css/inner-page.css";

class NavbarMobile extends React.Component {
    render() {
        return (
            <Wrapper>
                <div className="mobile_sidebar col-12">
                    <div className="pt-3 row">
                        <div className="col-12 text-right">
                            <a className="icone-croix" onClick={this.props.offSetSidebarOpen} style={{ fontSize: "23px" }} />
                        </div>
                    </div>
                    <div className="pt-3">
                        <ul className="mobile_menu">
                            <li><a href="#" className="active">Top Départ</a></li>
                            <li><a href="#">Notre émission</a></li>
                            <li><a href="#">A propos de nous</a></li>
                            <li><a href="#">Ils parlent de nous</a></li>
                            <li><a href="#">Nous contacter</a></li>                          
                        </ul>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

// Create validations for Props, required or type etc.
NavbarMobile.propTypes = {
    dispatch: PropTypes.any.isRequired,
    lang: PropTypes.any.isRequired
};

export default NavbarMobile;
