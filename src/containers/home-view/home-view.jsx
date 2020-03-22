// Dependency Imports
import React from 'react'
import PropTypes from "prop-types";


// Custom Imports
import '../../static/css/inner-page.css'
import Wrapper from '../../hoc/Wrapper';
import Navbar from '../../containers/navbar/navbar';
import { withStyles } from "@material-ui/core/styles"
import GoogleMapReact from 'google-map-react';
import Calendar from 'react-calendar';
import Checkbox from '@material-ui/core/Checkbox';
import "../../static/css/icones.css"
import MainImg from "../../static/images/juice.jpg"
import Smile1 from "../../static/images/smiley_01.png"
import Smile2 from "../../static/images/smiley_02.png"
import Thumb_1 from "../../static/images/thumbnai_01.png"
import Thumb_2 from "../../static/images/thumbnai_02.png"
import Thumb_3 from "../../static/images/thumbnai_03.png"
import Thumb_4 from "../../static/images/thumbnai_04.png"
import APPDowanload from '../app-dowanload/app-dowanload';
import FooterWeb from '../footer/footer';

// material-ui styles
const styles = theme => ({
    root: {
        direction: theme.direction,
        width: "auto"
    },
    iconButton: {
        padding: "5px 5px 5px 0",
        [theme.breakpoints.up("sm")]: {
            width: "24px",
            height: "24px"
        },
        [theme.breakpoints.up("md")]: {
            width: "25px",
            height: "25px"
        },
        [theme.breakpoints.up(1200)]: {
            width: "27px",
            height: "27px"
        },
        [theme.breakpoints.up(1400)]: {
            width: "29px",
            height: "29px"
        },
        [theme.breakpoints.up(1900)]: {
            width: "32px",
            height: "32px"
        }
    },
    icon: {
        [theme.breakpoints.up("sm")]: {
            width: "14px",
            height: "14px"
        },
        [theme.breakpoints.up("md")]: {
            width: "15px",
            height: "15px"
        },
        [theme.breakpoints.up(1200)]: {
            width: "17px",
            height: "17px"
        },
        [theme.breakpoints.up(1400)]: {
            width: "19px",
            height: "19px"
        },
        [theme.breakpoints.up(1900)]: {
            width: "22px",
            height: "22px"
        }
    }
});

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class HomeIndex extends React.Component {
    state = {
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
                {/* Navbar Module */}
                <Navbar />

                {/* Body Module */}
                <div className="pt-5 row justify-content-center main_cotainer">
                    <div className="col-11">
                        <div className="row">

                            {/* Main Header Module */}
                            <div className="col-12 Item_photo position-relative">
                                <h3 className="center">Excepteur sint occaecal cupidatat non proident</h3>
                            </div>

                            {/* Left Side Section */}
                            <div className="py-3 col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                                <div className="pb-4">
                                    <div className="row">
                                        {/* Main Gallery Module */}
                                        <div className="col-10">
                                            <img src={MainImg} className="main_Img" />
                                            <div className="py-3 catogery_list d-flex">
                                                <p className="m-0">Restaurants</p>
                                                <p className="m-0 mx-4">Creole</p>
                                                <p className="m-0">Brunch</p>
                                            </div>

                                            {/* Rating && InVoice Module */}
                                            <div className="row">
                                                {/* Rating Module */}
                                                <div className="col-6">
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
                                                <div className="col-6 dowanload_invoice">
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
                                            </div>

                                            {/* Descrption Data Module */}
                                            <div className="row">
                                                {/* Data-1 Module */}
                                                <div className="py-5 col-12">
                                                    <div className="title">
                                                        <a className="icone-email" />
                                                        <h4>Description</h4>
                                                    </div>
                                                    <div className="description">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio, saepe mollitia esse architecto corporis doloribus laudantium ea veniam <a href="#">deserunt</a> perspiciatis quas vero minus reiciendis, harum cumque.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio <a href="#">deserunt</a> perspiciatis quas vero minus reiciendis, harum cumque.</p>
                                                        <p>Duree : <span>1h30</span></p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio.</p>
                                                    </div>
                                                </div>

                                                {/* Data-2 Module */}
                                                <div className="col-12">
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
                                                    </div>
                                                    <div className="col-12 btn">
                                                        <button>Vaus souhaitez louer une vaiture pour acceder a ce lieu ?</button>
                                                    </div>
                                                </div>

                                                {/* Data-3 Module */}
                                                <div className="pt-5 col-12">
                                                    <div className="title">
                                                        <a className="icone-telephone" />
                                                        <h4>Contact</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="py-4 description">
                                                                <h5 className="m-0">Alex THOMUS,</h5>
                                                                <p>Charge de clientele</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 text-right">
                                                            <div className="py-4">
                                                                <a className="contact_us">0696 012 345</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Data-4 Module */}
                                                <div className="py-5 col-12">
                                                    <div className="title">
                                                        <a className="icone-fichier" />
                                                        <h4>Important a savair !</h4>
                                                    </div>
                                                    <div className="description">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio <a href="#">deserunt</a> perspiciatis quas vero minus reiciendis, harum cumque.</p>
                                                        <p>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio <a href="#">deserunt</a> perspiciatis quas vero minus reiciendis, harum cumque.</p>
                                                        <p>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio <a href="#">deserunt</a> perspiciatis quas vero minus reiciendis, harum cumque.</p>
                                                    </div>
                                                </div>

                                                {/* Data-5 Module */}
                                                <div className="py-5 col-12">
                                                    <div className="title">
                                                        <a className="icone-check" />
                                                        <h4>Ce qui est inclus</h4>
                                                    </div>
                                                    <div className="description">
                                                        <p>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio .</p>
                                                        <p>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio .</p>
                                                        <p>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio .</p>
                                                    </div>
                                                </div>

                                                {/* Data-6 Module */}
                                                <div className="py-5 col-12">
                                                    <div className="title">
                                                        <a className="icone-croix" />
                                                        <h4>Ce qui n'est est inclus</h4>
                                                    </div>
                                                    <div className="description">
                                                        <p>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio .</p>
                                                        <p>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio .</p>
                                                        <p>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio .</p>
                                                    </div>
                                                </div>

                                                {/* Data-7 Module */}
                                                <div className="py-5 col-12">
                                                    <div className="title">
                                                        <a className="icone-retour" />
                                                        <h4>Annulation et remboursement</h4>
                                                    </div>
                                                    <div className="description">
                                                        <p className="m-0">- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio .</p>
                                                        <p className="m-0">- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolores ad soluta distinctio ,Necessitatibus dolores ad soluta distinctio , Necessitatibus dolores ad soluta distinctio .</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Img Gallery Module */}
                                        <div className="pl-0 col-2">
                                            <ul className="pl-0 photo_gallery">
                                                <li> <img src={Thumb_1} /></li>
                                                <li> <img src={Thumb_2} /></li>
                                                <li> <img src={Thumb_3} /></li>
                                                <li> <img src={Thumb_4} /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side Section */}
                            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                {/* <Calendar
                                onChange={this.onChange}
                                value={this.state.date}
                                /> */}
                                <div className="dropdown">
                                    <select name="">
                                        <option value="Lorem">Lorem</option>
                                        <option value="Eadssa">Eadssa</option>
                                        <option value="Madame">Madame</option>
                                        <option value="Monsieur">Monsieur</option>
                                    </select>
                                </div>
                                <div className="py-4 dropdown">
                                    <select name="">
                                        <option value="Madame">Madame</option>
                                        <option value="Eadssa">Eadssa</option>
                                        <option value="Lorem">Lorem</option>
                                        <option value="Monsieur">Monsieur</option>
                                    </select>
                                </div>

                                {/* First Total */}
                                <div className="total">
                                    <div className="m-0 row">
                                        <div className="col-7">
                                            <p>Adulte(S)</p>
                                        </div>
                                        <div className="pl-0 col-auto">
                                            <a className="icone-plus"></a>
                                        </div>
                                        <div className="p-0 col-auto">
                                            <p>2</p>
                                        </div>
                                        <div className="col-auto">
                                            <a className="icone-option"></a>
                                        </div>
                                    </div>

                                    {/* Secound Total */}
                                    <div className="total">
                                        <div className="m-0 row">
                                            <div className="col-7">
                                                <p>Enfant(S) (3 a 12 ans)</p>
                                            </div>
                                            <div className="pl-0 col-auto">
                                                <a className="icone-plus"></a>
                                            </div>
                                            <div className="p-0 col-auto">
                                                <p>6</p>
                                            </div>
                                            <div className="col-auto">
                                                <a className="icone-option"></a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Third Total */}
                                    <div className="total">
                                        <div className="m-0 row">
                                            <div className="col-7">
                                                <p>Enfant(S) (-3 ans)</p>
                                            </div>
                                            <div className="pl-0 col-auto">
                                                <a className="icone-plus"></a>
                                            </div>
                                            <div className="p-0 col-auto">
                                                <p>3</p>
                                            </div>
                                            <div className="col-auto">
                                                <a className="icone-option"></a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Total Module */}
                                    <div className="pt-3 master_total">
                                        <div className="m-0 row">
                                            <div className="col-6">
                                                <p>TOTAL</p>
                                            </div>
                                            <div className="col-6 text-right">
                                                <p>30 €</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Button Module */}
                                    <div className="px-0 col-12 btn submit_btn">
                                        <button>Reserver</button>
                                    </div>

                                    {/* Icon Module */}
                                    <div className="px-0 pt-3 col-12">
                                        <div className="offer">
                                            <a class="icone-retour"></a>
                                            <span>Offrir cette activite</span>
                                        </div>
                                    </div>

                                    <div className="px-0 pt-3 col-12">
                                        <div className="offer">
                                            <a class="icone-argent"></a>
                                            <span>Creer une cagnotte</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Review Module */}
                <div className="row justify-content-center main_cotainerreview">
                    <div className="col-11">
                        <div className="row">
                            <div className="p-0 pb-5 col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
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
                                            <div className="col-8">
                                                <p className="m-0">Cella-013 <span className="user_date"> - 20 Janveer 2020</span></p>
                                            </div>
                                            <div className="col-3 pr-0 text-right">
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
                                            <div className="col-8">
                                                <p className="m-0">Cella-013 <span className="user_date"> - 20 Janveer 2020</span></p>
                                            </div>
                                            <div className="col-3 pr-0 text-right">
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
                                    <div className="col-12 btn">
                                        <button>Plus de commentaires ?</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            </div>
                        </div>
                    </div>
                </div>

                {/* App Download Module */}
                <APPDowanload />

                {/* Footer Module */}
                <FooterWeb />

            </Wrapper>
        )
    }
}

// Create validations for Props, required or type etc.
HomeIndex.propTypes = {
    dispatch: PropTypes.any.isRequired,
    lang: PropTypes.any.isRequired
};

export default withStyles(styles)(HomeIndex);
