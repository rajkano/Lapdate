// Dependency Imports
import React from 'react'

// Custom Imports
import Wrapper from '../../hoc/Wrapper';
import Navbar from "../../containers/navbar/navbar"
import "../../static/css/noteemission.css"
import CardIndex from "../../containers/landing-page/card"
import Slider from "../../containers/landing-page/slider"
import GoogleMap from '../../containers/landing-page/map.jsx';
import APPDowanload from '../../containers/app-dowanload/app-dowanload';
import FooterWeb from '../../containers/footer/footer';
import MobileNoteEmission from "../../containers/mobile-view/mobile-noteemission"

class SearchPage extends React.Component {
  state = {
    MobileView: false
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ MobileView: window.innerWidth <= 760 });
  }

  render() {
    const { MobileView } = this.state;

    return (
      <Wrapper>
        {MobileView && MobileView ?
          <MobileNoteEmission />
          :
          <Wrapper>
            {/* Navbar Module */}
            <Navbar />

            <div className="main_content">
              {/* Banner Module */}
              <section className="container-fluid banner" />

              {/* Card Module */}
              <div className="container-fluid Services">
                <CardIndex />
              </div>

              {/* Slider Module */}
              <div className="container-fluid slider-section m-0">
                <div className="slider_banner" />
                <Slider />
              </div>

              {/* Google Map Module */}
              <GoogleMap />

              {/* App Download Module */}
              <div className="mt-2">
                <APPDowanload />
              </div>

              {/* Footer Module */}
              <FooterWeb />
            </div>
          </Wrapper>}

      </Wrapper>
    )
  }
}

export default SearchPage;
