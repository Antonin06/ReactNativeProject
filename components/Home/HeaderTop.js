import React from 'react';
import {Platform, Text, useWindowDimensions, View} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from '../../style/component.style';

// Get morning, afternoon, evening
const getGreeting = () => {
  const hours = new Date().getHours();
  if (hours < 12) {
    return 'Good Morning';
  }
  if (hours >= 12 && hours <= 17) {
    return 'Good Afternoon';
  }
  return 'Good Evening';
};

const bookhome = require('../../style/lotties/homebook.json');
const svgGlasses = require('../../style/icons/Eye-Glasses.svg');
function HeaderTop() {
  return (
    <View style={styles.homeHeaderTop}>
        <LottieView source={bookhome} autoPlay loop={false} style={{height: 200}} />
        <Text style={styles.homeHeaderTopTitle}>Books | House </Text>
        <Text style={styles.homeHeaderTopGreetings}>{getGreeting()}</Text>
    </View>
  );
}

export default HeaderTop;
