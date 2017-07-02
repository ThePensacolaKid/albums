import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import * as firebase from 'firebase';

//Initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyDYyvie-vNxIc52R9v2fYvlpSe_gmJYeAE",
    authDomain: "tattooportfolios-80ff6.firebaseapp.com",
    databaseURL: "https://tattooportfolios-80ff6.firebaseio.com",
    projectId: "tattooportfolios-80ff6",
    storageBucket: "tattooportfolios-80ff6.appspot.com",
    messagingSenderId: "631355339844"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText='Albums'/>
        <AlbumList />
      </View>
    );
  }
}
