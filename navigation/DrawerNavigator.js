
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/home/HomeScreen';
import CalculosScreen from '../screens/calculos/CalculosScreen';
import TemporizadoresScreen from '../screens/temporizadores/TemporizadoresScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Cálculos" component={CalculosScreen} />
        <Drawer.Screen name="Temporizadores" component={TemporizadoresScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
