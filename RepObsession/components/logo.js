import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

import LogoSource from '../src/img/borderedLogo1.png';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={LogoSource} style={styles.image} />
        <Text style={styles.text}> </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 360,
    height: 360,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
});
