import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider, Appbar } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import MainAppbar from './components/MainAppBar';

import { ThemeContext } from './context/ThemeContext';


export default function App() {
  const Stack = createNativeStackNavigator();

    // State and function to manage dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };
    return (
      <PaperProvider>
     
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
          <NavigationContainer>
            <StatusBar backgroundColor="#666" barStyle="light-content" />
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={({ route, navigation }) => ({
                header: (props) => (
                  <MainAppbar {...props} backgroundColor="#666" icon="cog" color="#fff" />
                ),
              })}
            >
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeContext.Provider>
      </PaperProvider>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});