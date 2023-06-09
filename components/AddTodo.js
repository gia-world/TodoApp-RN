import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

const AddTodo = () => {
  const [text, setText] = useState('');

  const onPress = () => {
    setText('');
    Keyboard.dismiss();
  };

  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할 일을 입력하세요"
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      {/* {Platform.OS === 'ios' ? (
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.buttonStyle}>
            <Image
              source={require('../assets/icons/add_white/add_white.png')}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.circleWrapper}>
          <TouchableNativeFeedback>
            <View style={styles.buttonStyle}>
              <Image
                source={require('../assets/icons/add_white/add_white.png')}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
      )} */}
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onPress}>
              {button}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
  circleWrapper: {
    borderRadius: 24,
    overflow: 'hidden',
  },
});

export default AddTodo;
