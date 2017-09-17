import React, { Component } from 'react';
import Routes from './App/Routes'
import {store} from './App/store'
import { Provider } from "react-redux"
import {AppRegistry} from 'react-native'
import * as firebase from 'firebase';
import Signup from './App/containers/Signup'
import Signin from './App/containers/Signin'
import InitialMap from './App/containers/InitialMap'
import RNDirections from './App/containers/Navigater'
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';






var config = {
  apiKey: "AIzaSyBGC27uL5YnU-4aaSy-Y8AJMitQMapvVaE",
  authDomain: "tourist-guide-1fcd3.firebaseapp.com",
  databaseURL: "https://tourist-guide-1fcd3.firebaseio.com",
  projectId: "tourist-guide-1fcd3",
  storageBucket: "tourist-guide-1fcd3.appspot.com",
  messagingSenderId: "553861477426"
};
firebase.initializeApp(config);
<script src="http://localhost:8097"></script>


const AppNavigator = StackNavigator(Routes);


class AppWithNavigationState extends Component {
  render() {
      return (
          <AppNavigator
              navigation={addNavigationHelpers({
                  dispatch: this.props.dispatch,
                  state: this.props.nav
              })}
          />
      );
  }
}



// const MainScreenNavigator = TabNavigator({
//     Home: { screen: InitialMap },
//     Navigator: { screen: RNDirections},

//   },
//    {
//     tabBarOptions: {
//       activeTintColor: '#F8B71D',  // Color of tab when pressed
//       inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
//       style: {
//         backgroundColor: '#373F46',        
//       }
//       },
//   });
  
//   const StackNavigation = StackNavigator({
//     Signin: {
//       screen: InitialMap,
//     },
//     Main: {
//       screen: MainScreenNavigator,
//     },
//   });
const mapStateToProps = (state) => ({
  nav: state.nav
});

const NavigationRedux = connect(mapStateToProps)(AppWithNavigationState);

export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
      {/* <Routes /> */}
      {/* <StackNavigation /> */}
      {/* <MainScreenNavigator /> */}
      <NavigationRedux />
    </Provider>
    
    );
  }
}



AppRegistry.registerComponent('tourist_guide', () => App);
