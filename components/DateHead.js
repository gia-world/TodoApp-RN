import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const DateHead = ({date}) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const today = `${year}년 ${month}월 ${day}일`;

  const {top} = useSafeAreaInsets();
  return (
    <>
      <View style={[styles.statusBarPlaceHolder, {height: top}]} />
      <StatusBar backgroundColor="#26a69a" barStyle="light-content" />
      <View style={styles.block}>
        <Text style={styles.defaultTxt}>{today}</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  statusBarPlaceHolder: {
    backgroundColor: '#26a69a',
  },
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  defaultTxt: {
    fontSize: 24,
    color: 'white',
  },
});
export default DateHead;
