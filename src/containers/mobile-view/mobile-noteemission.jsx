// Dependency Imports
import React from 'react'
import PropTypes from "prop-types";

// Custom Imports
import '../../static/css/inner-page.css'
import Wrapper from '../../hoc/Wrapper';
import MobileHeader from '../headers/mobile-header';
import FooterMobile from "../footer/mobile-footer"
import CardIndex from "../landing-page/card"
import IMG1 from "../../static/images/section_loisirs.png"
import IMG2 from "../../static/images/section_restaurants.png"
import IMG3 from "../../static/images/section_beaute.png"
import Slider from "../landing-page/slider"
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MobileNoteEmission extends React.Component {
    state = {
        section: [{
            title: 'Loisirs',
            desc: 'Le Domaine des Bulles',
            img: IMG1
        },
        {
            title: 'Restaurants',
            desc: 'Brunch ô péyi',
            img: IMG2
        }, {
            title: 'Beauté & bien-être',
            desc: 'Caza Form’',
            img: IMG3
        }
        ]
    }

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 1
    };


    render() {
        const Card = ({ title, desc, img }) => {
            return <div className="">
                <div className="cardInfo" style={{ background: `url(${img})` }}>
                    <div className="cardTitle_mobile">{title}</div>
                </div>
            </div>
        }


        const MarkerLocation = [{
            lat: 59.955413,
            lang: 30.337844,
            marker: <a className="icone-pushpin-beaute" />
        },
        {
            lat: 37.0902,
            lang: 95.7129,
            marker: <a className="icone-pushpin-restaurants" />
        },
        {
            lat: 6.66547,
            lang: 121.42057,
            marker: <a className="icone-pushpin-loisirs" />
        },
        {
            lat: -3.70107,
            lang: 39.48853,
            marker: <a className="icone-pushpin-loisirs" />
        },
        {
            lat: 34.155834,
            lang: -119.202789,
            marker: <a className="icone-pushpin-loisirs" />
        },
        {
            lat: 41.676388,
            lang: -86.250275,
            marker: <a className="icone-pushpin-restaurants" />
        },
        {
            lat: 35.846111,
            lang: -86.391945,
            marker: <a className="icone-pushpin-beaute" />
        },
        {
            lat: 2.021484375,
            lang: 59.478568831926395,
            marker: <a className="icone-pushpin-loisirs" />
        },
        {
            lat: 58.000000,
            lang: 56.316666,
            marker: <a className="icone-pushpin-restaurants" />
        },
        {
            lat: 52.723598,
            lang: 41.442307,
            marker: <a className="icone-pushpin-loisirs" />
        },
        {
            lat: 51.592365,
            lang: 45.960804,
            marker: <a className="icone-pushpin-beaute" />
        },
        {
            lat: 48.700001,
            lang: 44.516666,
            marker: <a className="icone-pushpin-restaurants" />
        },
        {
            lat: 61.666668,
            lang: 50.816666,
            marker: <a className="icone-pushpin-loisirs" />
        },
        ]

        return (
            <Wrapper>
                {/* Navbar Module */}
                <MobileHeader />

                {/* Card Module */}
                <div className="py-3 row justify-content-center">
                    <div className="col-12">
                        <div className="row">
                            {this.state.section.map(card => <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" key={card.title}>
                                <Card {...card} />
                            </div>)}
                        </div>
                        <div className="row">
                            <div className="py-3 col d-flex justify-content-center">
                                <button style={{ borderRadius: "30px" }}>Découvrir</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slider Module */}
                <Slider />

                {/* Google Map Module */}
                <div className="MapMarker">
                    <div className="col-12 search_locationmobile">
                        <a className="icone-recherche" />
                        <input type="text" placeholder="Une activite, un lieu, un restaurant" />
                    </div>
                    <div className="mt-5" style={{ height: '600px', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyAtrnJwdRbJXfbsH4fr28N1TJG64c7Lrc4" }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            {MarkerLocation && MarkerLocation.map((data) => (
                                <AnyReactComponent
                                    lat={data.lat}
                                    lng={data.lang}
                                    text={
                                        data.marker
                                    }
                                />
                            ))}
                        </GoogleMapReact>
                    </div>
                </div>

                {/* Footer Module */}
                <div className="py-5 px-0 col-12 text-center">
                    <FooterMobile />
                </div>
            </Wrapper>
        )
    }
}

// Create validations for Props, required or type etc.
MobileNoteEmission.propTypes = {
    dispatch: PropTypes.any.isRequired,
    lang: PropTypes.any.isRequired
};

export default MobileNoteEmission;
