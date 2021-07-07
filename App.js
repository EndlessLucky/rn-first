import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';

const Cat = (props) => {
  const [ isHungry, setIsHungry ] = useState(true);

  return(
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress = {() => {
          setIsHungry(false);
        }}
        disabled = {!isHungry}
        title = {isHungry? 'Pour me some milk, please!' : 'Thank you'}
      />
    </View>
  );
}

export default function App() {
  return (
    <>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
