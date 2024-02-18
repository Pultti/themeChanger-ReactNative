  import { View, Text } from 'react-native';
  import React, { useContext } from 'react';
  import { useTheme } from '../context/UseTheme';
  import Styles from '../Styles';
  
  export default function HomeScreen() {
    const {isDarkMode} = useTheme();
    console.log(isDarkMode);
    return (
      <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
        <Text style={[isDarkMode ? Styles.dark : Styles.light]}>Home</Text>
      </View>
    );
  }