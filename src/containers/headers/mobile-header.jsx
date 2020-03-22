// Dependency Imports
import React from 'react'
import PropTypes from "prop-types";

// Custom Imports
import '../../static/css/inner-page.css'
import Wrapper from '../../hoc/Wrapper';
import FooterLogo from "../../static/images/Footer-Logo.png"
import NavbarMobile from '../mobile-menu/mobile-menu';
import Sidebar from "react-sidebar";


class MobileHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    offSetSidebarOpen = () => {
        this.setState({ sidebarOpen: false });
    }

    render() {
        return (
            <Wrapper>
                {/* Navbar Module */}
                <div className="col-12">
                    <div className="m-0 row align-items-center py-2">
                        <div className="col-4">
                        </div>
                        <div className="col-4 text-center">
                            <img src={FooterLogo} width="55px" />
                        </div>
                        <div className="col-4 text-right mobile_header">
                            <a className="icone-compte" />
                            <a className="ml-3 icone-panier" />
                        </div>
                    </div>
                </div>

                {/* Side Menu Module */}
                <Sidebar
                    sidebar={<NavbarMobile offSetSidebarOpen={this.offSetSidebarOpen} />}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                >
                    <a className="icone-menu-burger burgermenu" onClick={() => this.onSetSidebarOpen(true)}>
                    </a>
                </Sidebar>

            </Wrapper>
        )
    }
}

// Create validations for Props, required or type etc.
MobileHeader.propTypes = {
    dispatch: PropTypes.any.isRequired,
    lang: PropTypes.any.isRequired
};

export default MobileHeader;
