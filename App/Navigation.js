import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import Signin from './containers/Signin'
import InitialMap from './containers/InitialMap'
// import screen here


export const AppNavigator = StackNavigator({
    Login: { screen: Signin },
    Main: { screen: InitialMap },
    // Profile: { screen: ProfileScreen },
  });
  
  const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
  );
  
//   AppWithNavigationState.propTypes = {
//     dispatch: PropTypes.func.isRequired,
//     nav: PropTypes.object.isRequired,
//   };
  
  const mapStateToProps = state => ({
    nav: state.nav,
  });
  
  export default connect(mapStateToProps)(AppWithNavigationState);