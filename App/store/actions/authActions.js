import AuthActions from './authConst';
import * as firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
import {
    StackNavigator,
    TabNavigator,
    NavigationActions
} from 'react-navigation';

const signup_successful = () => {
    return {
        type: AuthActions.SIGNUP_SUCCESSFUL
    }
}

const signup_rejected = (error) => {
    return {
        type: AuthActions.SIGNUP_REJECTED,
        payload: error
    }
}

export const signup = (credentials, dispatch) => {
    return dispatch => {
        firebase.auth()
            .createUserWithEmailAndPassword(credentials.email, credentials.pass)
            .then(
            (user) => {
                console.log('signup success full', user)
                dispatch(NavigationActions.navigate({ routeName: 'Main' }));            
            },
            () => {
                console.log('nav change promis')

                this.props.navigation.navigate('Main')

            }
            // () => {
            //     dispatch(signin_successful())
            // },
            // (user) => {
            //     console.log("signup successful", user)
            //     // console.log(user)
            // }
            )
            .catch(
            (error) => {
                console.log("signup rejected", error.message)
                dispatch(signup_rejected(error.message));
            })
    }
}

export const signin = (credentials) => {
    return dispatch => {

        // const {navigate} = this.props 
        firebase.auth()
            .signInWithEmailAndPassword(credentials.email, credentials.pass)
            .then(
            (user) => {
                console.log("signin successfull", user);
                dispatch(NavigationActions.navigate({ routeName: 'Main' }));

            },
            () => {
                // console.log('nav change promis')
                // this.props.navigation.navigate('Main')
            }
            )
            .catch(
            (error) => {
                console.log('signin error', error)
            }
            )
    }
}