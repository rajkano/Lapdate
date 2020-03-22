// Dependency Imports
import React from 'react'
import PropTypes from "prop-types";

// Custom Imports
import Wrapper from '../../hoc/Wrapper';
import "../../static/css/map.css";
import Review1 from "../../static/images/slider_img3.png";
import Review2 from "../../static/images/thumbnai_01.png";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMapIndex extends React.Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 1
    };

    render() {

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
                <div className="mx-0 mt-5 row">
                    <div className="col-12 col-sm-12 col-md-12 col-xl-4 col-lg-4">
                        <div className="map_search">
                            {/* Search Module */}
                            <div className="search_location">
                                <input type="text" placeholder="Une activite, un lieu, un restaurant" />
                            </div>
                            {/* Calander Module */}
                            <div className="py-3 m-0 row">
                                <div className="col-6 text-left">
                                    <span className="checkdate">
                                        <i className="icone-check" /><span className="ml-3">Aujourd'hui</span>
                                    </span>
                                </div>
                                <div className="col-6 text-right">
                                    <span className="choose_date">Autre date : <i className="ml-2 icone-calendrier" /></span>
                                </div>
                            </div>
                            {/* Map Marker Module */}
                            <div className="py-3 m-0 row justify-content-center">
                                <div className="marker text-center">
                                    <a className="icone-pushpin-beaute" />
                                    <p>Loisirs</p>
                                </div>
                                <div className="mx-5 marker text-center">
                                    <a className="icone-pushpin-loisirs" />
                                    <p>Restaurant</p>
                                </div>
                                <div className="marker text-center">
                                    <a className="icone-pushpin-restaurants" />
                                    <p>Beatue</p>
                                </div>
                            </div>
                            {/* Review-1 Module */}
                            <div className="border_main">
                                <div className="pb-2 m-0 row border_main">
                                    <div className="col-auto p-0">
                                        <a className="icone-parametres-2" />
                                    </div>
                                    <div className="col-auto">
                                        <p className="m-0">Plus de filters</p>
                                    </div>
                                    <div className="col-auto p-0">
                                        <a className="icone-fleche-droite" />
                                    </div>
                                </div>
                                <div className="mx-0 my-3 row">
                                    <img src={Review1} className="mb-2" width="100%" height="220px" style={{ objectFit: "cover" }} />
                                    <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                    <p className="m-0">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</p>
                                </div>
                                <div className="mx-0 my-3 row">
                                    <a className="icone-etoile" />
                                    <a className="icone-etoile" />
                                    <a className="icone-etoile" />
                                    <a className="icone-etoile" />
                                    <a className="icone-etoile" />
                                    <span className="ml-2">(102)</span>
                                </div>
                            </div>
                            {/* Review-2 Module */}
                            <div className="border_main">
                                <div className="pt-4 pb-2 m-0 row border_main">
                                    <div className="col-auto pl-0">
                                        <img src={Review2} width="100px" height="100px" />
                                    </div>
                                    <div className="col-8 p-0">
                                        <h6>Lorem Ipsum is simply dummy text of the printing.</h6>
                                        <p className="m-0">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                        <div className="mx-0 mt-1 mb-3 row">
                                            <a className="icone-etoile" />
                                            <a className="icone-etoile" />
                                            <a className="icone-etoile" />
                                            <a className="icone-etoile" />
                                            <a className="icone-etoile" />
                                            <span className="ml-2">(102)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Pagination Module */}
                        <div className="col-12">
                            <div className="py-3 m-0 row border_main">
                                <div className="col-6">
                                    <p className="m-0">137 Results</p>
                                </div>
                                <div className="col-6 text-right pagination">
                                   <span><a className="icone-fleche-gauche" /></span>
                                   <span className="mx-3">1/13</span>
                                   <span><a className="icone-fleche-droite" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Google Map Module */}
                    <div className="p-0 col-12 col-sm-12 col-md-12 col-xl-8 col-lg-8 google_map">
                        <div className="mb-3 mt-1 web_map" >
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
                </div>
            </Wrapper>
        )
    }
}

// Create validations for Props, required or type etc.
GoogleMapIndex.propTypes = {
    dispatch: PropTypes.any.isRequired,
    lang: PropTypes.any.isRequired
};

export default GoogleMapIndex;
