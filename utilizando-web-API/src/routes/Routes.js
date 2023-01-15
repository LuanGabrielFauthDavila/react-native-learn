import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import ListaRepositorios from '../pages/ListaRepositorios';
import NovoRepositorio from '../pages/NovoRepositorio';

const Stack = createNativeStackNavigator();

export default function Routes () {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Perfil' component={Perfil} />
                <Stack.Screen name='ListaRepositorios' component={ListaRepositorios} />
                <Stack.Screen name='NovoRepositorio' component={NovoRepositorio} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}