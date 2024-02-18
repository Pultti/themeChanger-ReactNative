import React from 'react';
import { Switch } from 'react-native';
import { useTheme } from '../context/UseTheme'; // assuming context is at the same level as components

export default function ThemeSwitchButton() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Switch
      value={isDarkMode}
      onValueChange={toggleTheme}
    />
  );
}