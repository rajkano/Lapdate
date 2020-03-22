// Dependency Imports
import React from 'react'
import PropTypes from "prop-types";

// Custom Imports
import '../../static/css/inner-page.css'
import Wrapper from '../../hoc/Wrapper';
import { withStyles } from "@material-ui/core/styles"
import GoogleMapReact from 'google-map-react';
import "../../static/css/icones.css"
import MainImg from "../../static/images/juice.jpg"
import Smile1 from "../../static/images/smiley_01.png"
import Smile2 from "../../static/images/smiley_02.png"

import FooterMobile from "../footer/mobile-footer"
import MobileHeader from '../headers/mobile-header';

// material-ui styles
const styles = () => ({
});

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MobileHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };


    render() {
        return (
            <Wrapper>
                <div className="mobile_container">
                    {/* Navbar Module */}
                    <MobileHeader />

                    {/* Main Header Module */}
                    <div className="col-12 Item_photoMobile position-relative">
                        <h4 className="center">Excepteur sint occaecal cupidatat non proident</h4>
                    </div>

                    <div className="col-12">
                        {/* Main Gallery Module */}
                        <img src={MainImg} className="main_ImgMobile" />
                        <div className="py-3 catogery_list d-flex">
                            <p className="m-0">Restaurants</p>
                            <p className="m-0 mx-4">Creole</p>
                            <p className="m-0">Brunch</p>
                        </div>

                        {/* Rating Module */}
                        <div className="p-0 col-12">
                            <div className="rating d-flex">
                                <a className="icone-etoile" />
                                <a className="icone-etoile" />
                                <a className="icone-etoile" />
                                <a className="icone-etoile" />
                                <a className="icone-etoile" />
                                <span className="ml-2 mr-3">(102)</span>
                                <span className="notes">Notes at avis</span>
                            </div>
                        </div>

                        {/* Download Invoice Module */}
                        <div className="px-0 py-3 col-12">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="row">
                                        <div className="pr-0 col-auto">
                                            <a className="icone-partage" />
                                        </div>
                                        <div className="pl-2 col-auto">
                                            <span>Partager</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="row">
                                        <div className="pr-0 col-auto">
                                            <a className="icone-imprimer" />
                                        </div>
                                        <div className="pl-2 col-auto">
                                            <span>Imprimer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Data-1 Module */}
                        <div className="p-0 col-12">
                            <div className="title">
                                <a className="icone-email" />
                                <h4>Description</h4>
                            </div>
                            <div className="description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio, saepe mollitia esse architecto corporis doloribus laudantium ea veniam <a href="#">deserunt</a> perspiciatis quas vero minus reiciendis, harum cumque.</p>
                            </div>
                        </div>

                        {/* Data-2 Module */}
                        <div className="px-0 py-4 col-12">
                            <div className="title">
                                <a className="icone-pushpin" />
                                <h4>Plan et acces</h4>
                            </div>
                            <div className="description">
                                <div className="mb-3 mt-1" style={{ height: '350px', width: '100%' }}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: "AIzaSyAtrnJwdRbJXfbsH4fr28N1TJG64c7Lrc4" }}
                                        defaultCenter={this.props.center}
                                        defaultZoom={this.props.zoom}
                                    >
                                        <AnyReactComponent
                                            lat={59.955413}
                                            lng={30.337844}
                                            text="My Marker"
                                        />
                                    </GoogleMapReact>
                                </div>
                                <div className="description">
                                    <ul>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</li>
                                        <li>Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio deserunt perspiciatis quas vero minus reiciendis, harum cumque</li>
                                        <li>Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio.</li>
                                        <li>text of the printing and typesetting industry soluta distinctio , Necessitatibus dolores ad soluta distinctio deserunt.</li>
                                    </ul>
                                </div>
                                <div className="p-0 btn mobile_map">
                                    <button>Vaus souhaitez louer une vaiture ?</button>
                                </div>
                            </div>
                        </div>

                        {/* Data-3 Module */}
                        <div className="p-0 col-12">
                            <div className="title">
                                <a className="icone-telephone" />
                                <h4>Contact</h4>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="pt-4 description">
                                        <h5 className="m-0">Alex THOMUS,</h5>
                                        <p>Charge de clientele</p>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <div className="py-4">
                                        <a className="contact_us">0696 012 345</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Data-4 Module */}
                        <div className="py-4 px-0 col-12">
                            <div className="title">
                                <a className="icone-fichier" />
                                <h4>Important a savair !</h4>
                            </div>
                            <div className="description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio, distinctio <a href="#">deserunt</a> perspiciatis quas vero minus reiciendis, harum cumque.</p>
                            </div>
                        </div>

                        {/* Data-5 Module */}
                        <div className="p-0 col-12">
                            <div className="title">
                                <a className="icone-check" />
                                <h4>Ce qui est inclus</h4>
                            </div>
                            <div className="description">
                                <p>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio .</p>
                            </div>
                        </div>

                        {/* Data-6 Module */}
                        <div className="py-4 px-0 col-12">
                            <div className="title">
                                <a className="icone-croix" />
                                <h4>Ce qui n'est est inclus</h4>
                            </div>
                            <div className="description">
                                <p>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio .</p>
                            </div>
                        </div>

                        {/* Review Module */}
                        <div className="row justify-content-center main_cotainer">
                            <div className="col-11">
                                <div className="row">
                                    <div className="p-0 col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                                        <div className="title">
                                            <a className="icone-etoile-creuse" />
                                            <h4>Notes et avis</h4>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-flex rating">
                                                <p><span>4.5</span>/5</p>
                                                <div className="rating d-flex">
                                                    <a className="icone-etoile" />
                                                    <a className="icone-etoile" />
                                                    <a className="icone-etoile" />
                                                    <a className="icone-etoile" />
                                                    <a className="icone-etoile" />
                                                    <span className="ml-3 mr-3">(102)</span>
                                                </div>
                                            </div>

                                            {/* First Review Module */}
                                            <div className="user_name">
                                                <div className="row">
                                                    <div className="col-auto pr-0">
                                                        <img src={Smile1} />
                                                    </div>
                                                    <div className="col-10">
                                                        <p className="m-0">Cella-013 <span className="user_date"> - 20 Janveer 2020</span></p>
                                                    </div>
                                                    <div className="col-12 usereview_mobile">
                                                        <a className="icone-etoile" />
                                                        <a className="icone-etoile" />
                                                        <a className="icone-etoile" />
                                                        <a className="icone-etoile" />
                                                        <a className="icone-etoile" />
                                                    </div>
                                                </div>
                                                <div className="col-12 user_review">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio deserunt perspiciatis quas vero minus reiciendis, harum cumque.</p>
                                                </div>
                                            </div>

                                            {/* Secound User Review Module */}
                                            <div className="pt-3">
                                                <div className="row">
                                                    <div className="col-auto pr-0">
                                                        <img src={Smile2} />
                                                    </div>
                                                    <div className="col-10">
                                                        <p className="m-0">Cella-013 <span className="user_date"> - 20 Janveer 2020</span></p>
                                                    </div>
                                                    <div className="col-12 usereview_mobile">
                                                        <a className="icone-etoile" />
                                                        <a className="icone-etoile" />
                                                        <a className="icone-etoile" />
                                                        <a className="icone-etoile" />
                                                        <a className="icone-etoile" />
                                                    </div>
                                                </div>
                                                <div className="col-12 user_review">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio deserunt perspiciatis quas vero minus reiciendis, harum cumque.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 grass">
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 btn">
                                <button>Plus de commentaires ?</button>
                            </div>
                        </div>

                        {/* Footer Module */}
                        <div className="py-5 px-0 col-12 text-center">
                            <FooterMobile />
                        </div>

                    </div>
                </div>
            </Wrapper>
        )
    }
}

// Create validations for Props, required or type etc.
MobileHome.propTypes = {
    dispatch: PropTypes.any.isRequired,
    lang: PropTypes.any.isRequired
};

export default withStyles(styles)(MobileHome);
