import React, { Component } from 'react';
import { Text, View, TextInput, Button, StyleSheet,  Picker,TouchableHighlight } from 'react-native';
// import * as firebase from 'firebase';
import * as firebase from 'firebase';
import styles from '../style'
import { signup } from '../store/actions/authActions'
import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux'; 
import {
    StackNavigator

} from 'react-navigation';
class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
          name: '',
          email: '',
          pass: '',
        };
        this.signupHandler = this.signupHandler.bind(this);
    }
    
    static navigationOptions = {
        title: 'Signup',
    };

    signupHandler () {
        let credentials = {
          email: this.state.email,
          pass: this.state.pass
        }
        this.props.signup(credentials);
    }

    render() {  
        // console.log(this.props)
        const navigate = this.props.navigation.navigate;
        
        return (
            <View style={styles.container} >
              {this.props.isRejected && <Text>{this.props.error}</Text> }  
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
              
            <Button title="Signup" onPress={this.signupHandler.bind(this)}/>
            <TouchableHighlight onPress={() => navigate('Login')}>
                <Text>
                    Already have an account?
                </Text>
            </TouchableHighlight>
            </View>
        )
    }
}

const mapStateToProps = state => {
  return {
      error: state.authReducer.errorMessage,
      isRejected: state.authReducer.isRejected
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      signup: (credentials) => {
          dispatch(signup(credentials));
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)