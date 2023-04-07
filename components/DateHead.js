import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

const DateHead = ({date}) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const today = `${year}년 ${month}월 ${day}일`;
  return (
    <>
      <StatusBar backgroundColor="#26a69a" />
      <View style={styles.block}>
        <Text style={styles.defaultTxt}>{today}</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
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
