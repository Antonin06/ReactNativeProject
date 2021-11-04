import React from 'react';
import styles from '../style/component.style';
import theme from '../style/theme.style';
import {ActivityIndicator, View} from 'react-native';

function Loading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={theme.BLACK_COLOR} />
    </View>
  );
}

export default Loading;
