
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import IMCScreen from './IMCScreen';
import BaskaraScreen from './BaskaraScreen';
import JurosCompostosScreen from './JurosCompostosScreen';

const Tab = createMaterialTopTabNavigator();

export default function CalculosScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="IMC" component={IMCScreen} />
      <Tab.Screen name="Baskara" component={BaskaraScreen} />
      <Tab.Screen name="Juros Compostos" component={JurosCompostosScreen} />
    </Tab.Navigator>
  );
}
