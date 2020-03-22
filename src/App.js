// Dependency Imports
import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { IntlProvider } from "react-intl";
import PropTypes from 'prop-types';

// Custom Imports
import { BaseRoutes } from './routes'
import './static/scss/common.scss'
import * as LANG_SET from './translations/main';

function App(props) {
  const { lang } = props;

  return (
    <IntlProvider locale={lang} key={lang} messages={LANG_SET[lang]}>
      <Router>
        {/* maping various routes inside router, from pre-defined routes array, all the components from here, will be  */}
        {BaseRoutes.map(({ component: Cmp, ...route }, index) =>
          <Route exact key={'baseRoute' + index} {...route}
            render={routeProps => <Cmp {...props} {...routeProps} />} />)}
      </Router>
    </IntlProvider>
  )
}

// Create validations for Props, required or type etc.
App.propTypes  = {
  lang: PropTypes.any.isRequired
}

const mapStateToProps = state => {
  return {
    reduxState: state,
    lang: state.lang
  }
}
export default connect(mapStateToProps)(App)
