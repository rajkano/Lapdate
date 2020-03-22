// Dependency Imports
import React from 'react'
import PropTypes from "prop-types";

// Custom Imports
import '../../static/css/inner-page.css'
import Wrapper from '../../hoc/Wrapper';
import AppStore from "../../static/images/ios_button.png"
import PlayStore from "../../static/images/gplay_button.png"

class APPDowanload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Wrapper>
                <div className="py-5 app_dowanload">
                    <div className="col-12 text-center">
                        <h3>Telecharger I'application Lapdate</h3>
                        <h5 className="mb-4">et profiter encore plus de bons plans</h5>
                        <p>Disponible sur IOS et Android</p>
                        <div className="row">
                            <div className="col-6 text-right">
                                <img src={AppStore} width="125px" height="auto" style={{ cursor: "pointer" }}></img>
                            </div>
                            <div className="col-6 text-left">
                                <img src={PlayStore} width="125px" height="auto" style={{ cursor: "pointer" }}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

// Create validations for Props, required or type etc.
APPDowanload.propTypes = {
    dispatch: PropTypes.any.isRequired,
    lang: PropTypes.any.isRequired
};

export default APPDowanload;
