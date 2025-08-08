import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabBottomNavigation from './TabBottomNavigation.routes';

export function Routes() {
  return (
    <NavigationContainer>
        <TabBottomNavigation />
    </NavigationContainer>
  );
}