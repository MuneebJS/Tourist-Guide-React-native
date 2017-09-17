import { SideMenu, List, ListItem } from 'react-native-elements'
import React from 'react';
import {View} from 'react-native'



export default class SideBar extends React.Component {
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.toggleSideMenu = this.toggleSideMenu.bind(this)
      }
      
      onSideMenuChange (isOpen = true) {
        this.setState({
          isOpen: isOpen
        })
      }
      
      toggleSideMenu () {
        this.setState({
          isOpen: !this.state.isOpen
        })
      }
      
      render () {
          const list = [
              {name: 'Muneeb'},
              {name: 'Bilal'},
              {name: 'Sabih'},
              {name: 'Sohaib'}
          ]
        const MenuComponent = (
          <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
            <List containerStyle={{marginBottom: 20}}>
            {
              list.map((l, i) => (
                <ListItem
                  roundAvatar
                  onPress={() => console.log('Pressed')}
                  key={i}
                  title={l.name}
                />
              ))
            }
            </List>
          </View>
        )
      
        return (
          <SideMenu
            isOpen={this.state.isOpen}
            onChange={this.onSideMenuChange.bind(this)}
            menu={MenuComponent}>
            <App toggleSideMenu={this.toggleSideMenu.bind(this)} />
          </SideMenu>
        )
      }
}

