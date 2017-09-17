import React, { Component } from 'react'
import { Text, View, FlatList, Image, TouchableOpacity, ScrollView, StyleSheet, Modal, TouchableHighlight } from 'react-native'
import MapView from "react-native-maps";
import SearchPlaces from './SearchPlace';
import Map from '../components/Map'
import NearbyPlaces from './NearbyPlaces';
import RNGooglePlaces from 'react-native-google-places';
import getDirections from 'react-native-google-maps-directions';
import { get_location, set_location } from '../store/actions/mapActions';
import { connect } from 'react-redux';
import axios from 'axios';
import Footer from '../components/Footer';
import { Button, Rating } from 'react-native-elements'


class InitialMap extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      placeRating: 'n/a',
      placeAddress: 'n/a',
      placeName: 'n/a',
      placePhone: 'n/a',
      placeWebsite: 'n/a',
      isPlaceInfo: false

    }
  }

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
      .then((place) => {
        console.log('place info', place);
        let location = {
          latitude: place.latitude,
          longitude: place.longitude,
          latitudeDelta: this.props.location.longitudeDelta,
          longitudeDelta: this.props.location.longitudeDelta,
        }
        this.setState({
          placeRating: place.rating,
          placeName: place.name,
          placeAddress: place.address,
          placePhone: place.phoneNumber,
          placeWebsite: place.website,
          isPlaceInfo: true
        })
        this.props.set_location(location)
      })
      .catch((error) => console.log(error));
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  componentDidMount() {
    this.props.get_location();
  }


  render() {
    console.log('props', this.props.location)
    return (
      <ScrollView>

        <View>
          <Map region={this.props.location} />
        </View>
        <View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Button
              raised
              title='Search'
              onPress={() => this.openSearchModal()}
              style={{ width: 150, height: 50, backgroundColor: 'powderblue',
              backgroundColor: '#373F46' , color: "#F8B71D"
              
               }}
            /> 
            {this.state.isPlaceInfo && <Button
              desabled
              raised
              title='Place Info'
              onPress={() => this.setModalVisible(true)}
              style={{
                backgroundColor: '#373F46' , color: "#F8B71D"
              }}
            /> }
          </View>
        </View>
        <View>
          <NearbyPlaces />
          <Footer />
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { alert("Modal has been closed.") }}
        >
          <View style={{ marginTop: 22, padding: 15 }}>
            <View>
              {/* <Text>Hello World!</Text> */}
              <Text style={{fontSize: 25, textAlign: 'center',
                color: '#F8B71D'
              }}> {this.state.placeName}</Text>
              
              <Rating
                showRating
                type="star"
                fractions={1}
                startingValue={this.state.rating}
                readonly
                imageSize={20}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 10 }}
              />
              <Text style={styles.placeInfo}>Address: {this.state.placeAddress}</Text>
              <Text style={styles.placeInfo}>Phone: {this.state.placePhone}</Text>
              <Text style={styles.placeInfo}>Website: {this.state.placeWebsite}</Text>
              {/* <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}> */}
              <Button
              raised
              title='Close'
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}
              style={{ backgroundColor: '#373F46' , marginTop: 30, color: "#F8B71D"}}
            /> 
              {/* </TouchableHighlight> */}

            </View>
          </View>
        </Modal>
      </ScrollView>

    )
  }
}


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
    placeInfo: {
      marginTop: 10,
      fontSize: 15,
    }
  }



const mapStateToProps = state => {
  return {
    location: state.mapReducer.location,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    get_location: () => {
      dispatch(get_location());
    },
    set_location: (location) => {
      dispatch(set_location(location));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InitialMap)