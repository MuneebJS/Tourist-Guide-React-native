// import React, { Component } from 'react'
// import { Text, View, Button, TextInput } from 'react-native'
// // import MapView from "react-native-maps";
// import RNGooglePlaces from 'react-native-google-places';
// // import getDirections from 'react-native-google-maps-directions'
// import { set_location } from '../store/actions/mapActions'
// import InitialMap from './InitialMap';
// import { connect } from 'react-redux';
// import axios from 'axios';


// class SearchPlace extends Component {
//     openSearchModal() {
//         RNGooglePlaces.openAutocompleteModal()
//             .then((place) => {
//                 console.log('searched place clicked');
//                 let location = {
//                     latitude: place.latitude,
//                     longitude: place.longitude,
//                     latitudeDelta: this.props.location.longitudeDelta,
//                     longitudeDelta: this.props.location.longitudeDelta,
//                 }
//                 this.props.set_location(location)
//             })
//             .catch((error) => console.log(error));
//     }

//     render() {
//         console.log('search place', this.props)
//         return (
//             <View>
//                 <Button title="Search your desired place" onPress={() => this.openSearchModal()} />
//                 <InitialMap />
//             </View>
//         )
//     }
// }


// const mapStateToProps = state => {
//     return {
//       location: state.mapReducer.location
//     }
//   }
  
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       set_location: (location) => {
//         dispatch(set_location(location));
//       }
//     }
//   }
//   export default connect(mapStateToProps, mapDispatchToProps)(SearchPlace)







