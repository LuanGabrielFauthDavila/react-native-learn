import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';

const Stack = createNativeStackNavigator();

export default function Routes () {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Perfil' component={Perfil} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}