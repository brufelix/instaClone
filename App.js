import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
  render() {
    const comments = [{
      nickName: 'Fernando Perreira',
      comment: 'Bonita Foto'
    },
    {
      nickName: 'Danilo Michel',
      comment: 'Que massa, mas faço melhor...'
    }
    ]
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
      </View>
    ) 
  }
}