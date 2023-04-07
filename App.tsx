/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import DateHead from './components/DateHead';

function App(): JSX.Element {
  const today = new Date();
  console.log(today);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <DateHead date={today} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
