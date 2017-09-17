import React, { Component } from 'react';
import { Text, View, TextInput, Button, StyleSheet, FlatList, Picker, TouchableHighlight } from 'react-native';
// import * as firebase from 'firebase';
import * as firebase from 'firebase';
import styles from '../style'
import { signin } from '../store/actions/authActions'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
// import { Actions } from 'react-native-router-flux'; 
import {
    StackNavigator,
    NavigationActions
} from 'react-navigation';

class Signin extends React.Component {
    constructor() {
        super();
        this.state = {
            //   name: '',
            email: '',
            pass: '',

        };
        this.signinHandler = this.signinHandler.bind(this);
    }

    // static navigationOptions = {
    //     title: 'signin',
    // };

    signinHandler() {
        let credentials = {
            email: this.state.email,
            pass: this.state.pass
        }
        this.props.signin(credentials);
    }


    render() {
        const navigate = this.props.navigation.navigate;
        return (
            <View style={styles.container} >
                <Text style={styles.margin20}>Email</Text>
                <TextInput
                    style={{ height: 40, borderColor: '#eee', borderWidth: 0, }}
                    onChangeText={(text) => this.setState({ email: text })}
                    placeholder="Email"
                    autoFocus={true}
                />
                <Text style={styles.margin20}>Password</Text>
                <TextInput multiline={true}
                    style={{ height: 40, borderColor: '#eee', borderWidth: 0, }}
                    onChangeText={(text) => this.setState({ pass: text })}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <Button title="signin" onPress={this.signinHandler.bind(this)} />
                <TouchableHighlight onPress={(dispatch) => navigate('Signup')}>
                {/* navigate("Vehicles") */}
                <Text>
                    Create an account
                </Text>
            </TouchableHighlight>
            </View>
        )
    }
}

// const mapStateToProps = state => {
//   return {
//       user: state.authReducer
//   }
// }


const mapDispatchToProps = (dispatch) => {
    return {
        signin: (credentials) => {
            dispatch(signin(credentials));
        }
    }
}
export default connect(null, mapDispatchToProps)(Signin)