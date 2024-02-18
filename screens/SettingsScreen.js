import React from 'react';
import { View } from 'react-native';
import  ThemeSwitchButton from '../components/ThemeSwitchButton'; // assuming components is at the same level as screens
import { useTheme } from '../context/UseTheme'; // assuming context is at the same level as screens
import Styles from '../Styles'; // assuming Styles.js is in the root

export default function SettingsScreen() {
  const { isDarkMode } = useTheme();

  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
      <ThemeSwitchButton />
    </View>
  );
}