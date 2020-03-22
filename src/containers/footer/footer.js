// Dependency Imports
import React from 'react'
import PropTypes from "prop-types";

// Custom Imports
import '../../static/css/inner-page.css'
import Wrapper from '../../hoc/Wrapper';
import FooterLogo from "../../static/images/Footer-Logo.png"
import Footer1 from "../../static/images/FooterIcon-1.png"
import Footer2 from "../../static/images/FooterIcon-2.png"
import Footer3 from "../../static/images/FooterIcon-3.png"
import Footer4 from "../../static/images/FooterIcon-4.png"
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({})

class FooterWeb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedB: false
        };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        return (
            <Wrapper>
                <div className="py-4 col-12">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
                            <div className="m-0 pt-3 pb-4 row">
                                <img src={FooterLogo} width="80px" height="80px"></img>
                            </div>
                            <div className="m-0 row">
                                <div className="pl-0 col-12 col-sm-12 col-md-4 col-lg-2 col-xl-2">
                                    <ul className="footer_menu">
                                        <li>Top depat</li>
                                        <li>Notre emission</li>
                                        <li>A propos de nous</li>
                                        <li>lis parient de naus</li>
                                        <li>Naus contacter</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                                    <ul className="footer_menu">
                                        <li>Mentions legales</li>
                                        <li>Politique de confidentialite</li>
                                        <li>CGV/CGU</li>
                                        <li>Remboursement et litiges</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                                    <ul className="footer_menu">
                                        <li>Nos partenaires</li>
                                        <li>Devenir partenaire</li>
                                        <div className="pl-0 btn footer_btn">
                                            <button>Espace partenaire</button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <h5>Retrovez toutes les offers Lapdate dans notre newsletter</h5>
                            <div className="form d-flex">
                                <input type="email" placeholder="vatre e-mail" />
                                <div className="btn">
                                    <button>S'abonner</button>
                                </div>
                            </div>
                            <div className="checkbox">
                                <label class="checkbox-inline">
                                    <Checkbox
                                        checked={this.state.checkedB}
                                        onChange={this.handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />J'ai et accepte la <span><u>Politique de confidentialite.</u></span>
                                </label>
                            </div>
                            <div className="social">
                                <a class="icone-facebook"></a>
                                <a class="icone-instagram mx-3"></a>
                                <a class="icone-twitter"></a>
                            </div>
                            <div className="payment">
                                <img src={Footer3} />
                                <img src={Footer4} />
                                <img src={Footer2} />
                                <img src={Footer1} />
                            </div>
                        </div>
                    </div>
                </div>

            </Wrapper>
        )
    }
}

// Create validations for Props, required or type etc.
FooterWeb.propTypes = {
    dispatch: PropTypes.any.isRequired,
    lang: PropTypes.any.isRequired
};

export default withStyles(styles)(FooterWeb);
