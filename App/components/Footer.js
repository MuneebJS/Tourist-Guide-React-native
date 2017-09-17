
import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
// import styles from '../style'
// import { StackNavigator } from 'react-navigation';
  
var styles = {
    footerStyle: {
        paddingTop: 30,
        paddingBottom: 30, 
        backgroundColor: '#373F46',
        alignItems: 'center'
    },
    footerText: {
        color: "#F8B71D",
        fontSize: 20
    }
}

export default class Footer extends React.Component {
    render() {
        return(
            <View style={styles.footerStyle}>
           <Text style={styles.footerText}> Developed By Muneeb</Text>
        </View>
        ) 
    }
}