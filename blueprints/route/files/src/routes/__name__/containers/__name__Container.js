import { connect } from 'react-redux'
import { action } from '../modules/<%= pascalEntityName %>'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component */

import <%= pascalEntityName %> from '../components/<%= pascalEntityName %>'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapActionCreators = {
  action
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapActionCreators)(<%= pascalEntityName %>)
