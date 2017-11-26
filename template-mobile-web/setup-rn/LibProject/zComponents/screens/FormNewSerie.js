import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    Button,
    TextInput,
    ListView
} from 'react-native';

//const elments = ["city hunter 1", "city hunter 1", "city hunter 1"]

export default class FormNewSerie extends Component {
  constructor(props) {
     super(props);
     this.state = {
       newSerie: 'a',
       validation: false
     };
  }
  checkValidationForm(event) {
    console.log("checkValidationForm ", event)
    let response = {
      validation: true,
      newSerie: this.state.newSerie
    }
    this.props.checkValidation(response);
  }
  render() {
    console.log("render formNewSerie")
    const {checkValidation} = this.props;
    return (
        <View style={{margin:20}}>
          <Text style={{fontSize: 22}}> Serie : </Text>
          <Text style={{fontSize: 22}}> this.state.newSerie </Text>
          {/*
          <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(newSerie) => this.setState({newSerie})}
              value={this.state.newSerie}  />
              */}
          <Button
              onPress={ () => this.checkValidationForm(this)}
              title="Ajouter" />
      </View>
    )
  }
}
