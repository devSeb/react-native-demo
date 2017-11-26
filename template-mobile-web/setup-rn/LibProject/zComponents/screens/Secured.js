import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    Button,
    ListView
} from 'react-native';

//const elments = ["city hunter 1", "city hunter 1", "city hunter 1"]


export default class Secured extends Component {

  constructor(props) {
      super(props);
      this.state = {
        displayList: false,
        serieSelected: null,
        elements: [
          {title: "city hunter 1", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
          {title: "city hunter 2", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
          {title: "city hunter 3", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
          {title: "city hunter 11", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
          {title: "city hunter 12", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}
        ]
      };
    }

    render() {
          if ( this.state.displayList) {
            console.log("data source = ",this.state.dataSource)
              return (
              <ScrollView style={{padding: 20}}>
                  <Text style={{fontSize: 27}}> { 'Liste '+ this.state.serieSelected }</Text>
                  {
                    this.state.elements && this.state.elements.map( (item, index) => {
                      console.log("item = ", item )
                      return (
                        <View key={index} style={{paddingTop: 20}}>
                          <Text>{item.title}</Text>
                        </View>
                      )
                    })
                  }

                  <Button
                      onPress={ () => this.setState({displayList: false, serieSelected: '' })}
                      title="Retour liste" />
              </ScrollView>
            )
          } else {
              return (
              <ScrollView style={{padding: 20}}>
                  <Text style={{fontSize: 27}}> Welcome </Text>
                  <View style={{margin:20}} />
                    <Text style={{fontSize: 22}}> Liste de mes series </Text>
                    <Button
                        onPress={ () => this.setState({displayList: true, serieSelected: 'city-hunter' })}
                        series="city-hunter"
                        title="City hunter" />
                  <View style={{margin:20}} />
                    <Button onPress={this.props.onLogoutPress} title="Logout" />
              </ScrollView>
            )
        }
    }
}
