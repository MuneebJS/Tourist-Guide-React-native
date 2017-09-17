import React, { Component } from 'react'
import {  View  } from 'react-native'
import MapView from "react-native-maps";



export default class Map extends Component {
  render() {
    return (
        <View style={styles.mapContainer} >
          <MapView
            style={styles.map}
            region={this.props.region}
            mapType="standard"
            followsUserLocation
            showsUserLocation
            showsCompass
            showsMyLocationButton
            toolbarEnabled
          /> 
      </View>
    )
  }
}
// export default Map


const styles =
  {
    container: {
      paddingLeft: 10,
      paddingRight: 10,
      marginRight: 10,
      marginLeft: 10,
      marginTop: 15,
      marginBottom: 20
    },
    mapContainer: {
      // position: 'absolute',
      height: 200,
      width: 400,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  }



// const mapStateToProps = state => {
//   return {
//     location: state.mapReducer.location,
//   }
// }


// const mapDispatchToProps = (dispatch) => {
//   return {
//     get_location: () => {
//       dispatch(get_location());
//     },
//     set_location: (location) => {
//       dispatch(set_location(location));
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(InitialMap)