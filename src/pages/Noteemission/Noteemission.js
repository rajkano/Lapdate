// Dependency Imports
import React from 'react'
import PropTypes from "prop-types";

// Custom Imports
import '../../static/css/inner-page.css'
import Wrapper from '../../hoc/Wrapper';
import { withStyles } from "@material-ui/core/styles"
import "../../static/css/icones.css"
import MobileHome from '../../containers/mobile-view/mobile-index';
import HomeIndex from "../../containers/home-view/home-view";

class LandingIndex extends React.Component {
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

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ MobileView: window.innerWidth <= 760 });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  onChange = date => this.setState({ date })

  render() {
    const { classes } = this.props;
    const { MobileView } = this.state;

    return (
      <Wrapper>
        {MobileView && MobileView ?
          <Wrapper>
            <MobileHome />
          </Wrapper>
          :
          <Wrapper>
            <HomeIndex />
          </Wrapper>
        }
      </Wrapper>
    )
  }
}

// Create validations for Props, required or type etc.
LandingIndex.propTypes = {
  dispatch: PropTypes.any.isRequired,
  lang: PropTypes.any.isRequired
};

export default LandingIndex;
