// Dependency Imports
import React from 'react'
import PropTypes from "prop-types";

// Custom Imports
import '../../static/css/inner-page.css'
import Wrapper from '../../hoc/Wrapper';
import { withStyles } from "@material-ui/core/styles"
import "../../static/css/icones.css"
import Footer1 from "../../static/images/FooterIcon-1.png"
import Footer2 from "../../static/images/FooterIcon-2.png"
import Footer3 from "../../static/images/FooterIcon-3.png"
import Footer4 from "../../static/images/FooterIcon-4.png"
import FooterLogo from "../../static/images/Footer-Logo.png"

// material-ui styles
const styles = () => ({
});

class FooterMobile extends React.Component {
    render() {
        return (
            <Wrapper>
                <div className="Mobile_footer">
                    <img src={FooterLogo} className="mb-3" />
                    <p>Top depat</p>
                    <p>Notre emission</p>
                    <p>A propos de naus</p>
                    <p>lis parlent de naus</p>
                    <p>Naus contacter</p>
                    <p>Mentions legales</p>
                    <p>Politique de confidentialite</p>
                    <p>CGV/CGU</p>
                    <p>Remboursement et litiges</p>
                    <p>Nos partenaire</p>
                    <div className="pl-0 btn footer_btn">
                        <button>Espace partenaire</button>
                    </div>
                    <div className="py-3 social">
                        <a class="icone-facebook"></a>
                        <a class="icone-instagram mx-3"></a>
                        <a class="icone-twitter"></a>
                    </div>
                    <div className="payment_mobile">
                        <img src={Footer3} />
                        <img src={Footer4} />
                        <img src={Footer2} />
                        <img src={Footer1} />
                    </div>
                </div>

            </Wrapper>
        )
    }
}

// Create validations for Props, required or type etc.
FooterMobile.propTypes = {
    dispatch: PropTypes.any.isRequired,
    lang: PropTypes.any.isRequired
};

export default withStyles(styles)(FooterMobile);
