import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Signup from './containers/Signup';
import * as firebase from 'firebase';
import Signin from './containers/Signin';
import InitialMap from './containers/InitialMap';
import SearchPlace from './containers/SearchPlace';
import NearbyPlaces from './containers/NearbyPlaces';
import RnDirections from './containers/Navigater';
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';



const MainScreenNavigator = TabNavigator({
    Home: { screen: InitialMap },
    Navigator: { screen: RnDirections },

},
    {
        tabBarOptions: {
            activeTintColor: '#F8B71D',  // Color of tab when pressed
            inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
            style: {
                backgroundColor: '#373F46',
            }
        },
    });



    const Routes = {
        Login: { screen: Signin },
        Signup: { screen: Signup },
        Main: { screen: MainScreenNavigator },

    };
    
    export default Routes;
// export default class Routes extends Component {
    // static navigationOptions = {
    //     drawerLabel: 'Home',
    //     drawerIcon: ({ tintColor }) => (
    //       <Image
    //         source={require('./chats-icon.png')}
    //         style={[styles.icon, {tintColor: tintColor}]}
    //       />
    //     ),
    //   };

//     render() {
//         return (
//             <Router>
//                 <Scene key="root">
//                     <Scene key="signin"
//                         component={MainScreenNavigator}
//                         title="Sign In"
//                         initial
//                     />
//                     <Scene
//                         key="signup"
//                         component={Signup}
//                         title="Sign Up"
//                     />
//                     <Scene
//                         key="mainApp"
//                         component={MainScreenNavigator}
        
//                     />
//                     {/* <Scene
//                         component={RnDirections}
//                         title="Map Navigator"
//                         key="navigator"
//                     /> */}
//                 </Scene>
//             </Router>
//         )
//     }
// }
