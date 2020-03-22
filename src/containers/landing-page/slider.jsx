import React from 'react';
import Slider from 'react-slick';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className + ' icone-fleche-droite'}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className + ' icone-fleche-gauche'}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

const sliderSection = () => {
    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }, {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                },
            }
        ]
    };
    return <div className="row">
        <div className="col-12 text-center">
            <h1 className="slider_title center">Sél  ection Lapdate</h1>
        </div>
        <div className="mt-5 col slider-wrapper">
            <Slider {...settings}>
                {[1, 2, 3, 4, 1, 2, 3, 4].map(item => <div key={item}>
                    <SliderItem index={item} />
                </div>)}
            </Slider>
        </div>
    </div>
}

const getImage = (index) => {
    let img = require(`../../static/images/slider_img${index}.png`);
    return img;
}

const SliderItem = ({ index }) => {
    const sliderItem = {
        header: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa Ut',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        tags: ['Restaurants', 'Créole', 'Brunch'],
        rating: 4,
        totalRating: 102,
        price: '30€',
    }
    return <div className="slider-item">
        <div className="banner" style={{
            backgroundImage: `url(${getImage(index)})`
        }} />
        <div className="tag-container">
            {sliderItem.tags.map(tag => <div className="tag">{tag}</div>)}
        </div>
        <div className="info">
            <div className="header">{sliderItem.header}</div>
            <div className="description">{sliderItem.description}</div>
            <div className="pricing">
                <div className="rating">
                    <div className="rating"></div>
                    <div className="counter "><a className="icone-etoile" /><a className="icone-etoile" /><a className="icone-etoile" /><a className="icone-etoile" /><a className="icone-etoile mr-2" />({sliderItem.totalRating})</div>
                </div>
                <div className="price">{sliderItem.price}</div>
            </div>
        </div>
    </div>
}

export default sliderSection;