// Dependency Imports
import React from 'react'
import PropTypes from "prop-types";

// Custom Imports
import Wrapper from '../../hoc/Wrapper';
import "../../static/css/inner-page.css";
import IMG1 from "../../static/images/section_loisirs.png"
import IMG2 from "../../static/images/section_restaurants.png"
import IMG3 from "../../static/images/section_beaute.png"

class Card extends React.Component {
    state = {
        section: [{
            title: 'Loisirs',
            desc: 'Le Domaine des Bulles',
            img: IMG1
        }, {
            title: 'Restaurants',
            desc: 'Brunch ô péyi',
            img: IMG2
        }, {
            title: 'Beauté & bien-être',
            desc: 'Caza Form’',
            img: IMG3
        }]
    }

    render() {

        const Card = ({ title, desc, img }) => {
            return (
                <Wrapper>
                    <div className="card">
                        <div className="cardTitle">{title}</div>
                        <div className="cardInfo">
                            <img
                                className="cardImage"
                                src={img}
                            />
                            <div className="cardDesc">{desc}</div>
                        </div>
                    </div>
                    <div className="pt-3 col-12 text-center">
                        <div className="">{desc}</div>
                    </div>
                </Wrapper>
            )
        }

        return (
            <Wrapper>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="row">
                            {this.state.section.map(card => <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" key={card.title}>
                                <Card {...card} />
                            </div>)}
                        </div>
                        <div className="row buttonSection">
                            <div className="py-3 col d-flex justify-content-center">
                                <button style={{ borderRadius: "30px" }}>Découvrir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

// Create validations for Props, required or type etc.
Card.propTypes = {
    dispatch: PropTypes.any.isRequired,
    lang: PropTypes.any.isRequired
};

export default Card;
