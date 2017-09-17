import React, { Component } from 'react'
import { Text, View, Button, FlatList, Image, TouchableOpacity, ScrollView,ActivityIndicator } from 'react-native'
import { fetch_data_nearby } from '../store/actions/mapActions'
import { connect } from 'react-redux';
import axios from 'axios';
import { ButtonGroup, Grid, Row,Col} from 'react-native-elements'
import { Card, ListItem  } from 'react-native-elements'
// import ModalPicker from 'react-native-modal-picker'


class NearbyPlaces extends Component {
  constructor() {
    super()
    console.disableYellowBox = true;
    this.state = {
      selectedIndex: 0,
      type: 'restaurant',
      // textInputValue: ''
      // textInputValue: 'restaurant'p

    }
    this.getNearbyPlaces = this.getNearbyPlaces.bind(this)
  }

  getNearbyPlaces(selectedIndex) {
    let typesArray = ['restaurant', 'park', 'bank', 'hospital'];
    let type = typesArray[selectedIndex];
    const apiKey = 'AIzaSyBTeynBGQE3bjKAewueKWEVtbt9JlrUIn8';
    const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    let lat = this.props.location.latitude;
    let lng = this.props.location.longitude;
    console.log(type);
    let completeUrl = `${url}location=${lat},${lng}&radius=1000&type=${type}&key=${apiKey}`;

    console.log('url', completeUrl)
    this.props.fetch_data_nearby(completeUrl);
  }

  componentDidMount() {
    this.getNearbyPlaces(0);
  }



  render() {
    console.log(this.props)
    const buttons = ['Restautrants', 'Parks', 'Banks', 'Hospitals']
    const { selectedIndex } = this.state
 
    return (
      <ScrollView>
        <View style={{ marginBottom: 20, paddingBottom: 40 }}>
          <ButtonGroup
            onPress={this.getNearbyPlaces}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 50 }} />
             
        {this.props.isNearbyData ? <Card containerStyle={{ padding: 0 }} >
            {
              this.props.nearby_data.map((u, i) => {
                return (
                  <ListItem
                    key={i}
                    roundAvatar
                    title={u.name}
                    avatar={{ uri: u.icon }}
                  >
                  {/* <Text>Rating: {u.rating}</Text> */}
                  </ListItem>
                );
              })
            }
          </Card> : <ActivityIndicator size='large'/> }
        </View>
      </ScrollView>
    )
  }
}


const mapStateToProps = state => {
  return {
    nearby_data: state.mapReducer.nearby_data,
    location: state.mapReducer.location,
    isNearbyData: state.mapReducer.isNearbyData
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetch_data_nearby: (url) => {
      dispatch(fetch_data_nearby(url));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NearbyPlaces)

