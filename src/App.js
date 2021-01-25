import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { UsersProvider } from './context/UsersContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        {/* <---NAVIGATOR:  Componente Navigator que gerencia as telas secundárias. 
      initialRouteName: qual será a rota inicial --->*/}

        {/* <---SCREEN: Componente usado para especificar a configuração da rota. --->*/}
        <Stack.Navigator initialRouteName="UserList">

          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen name="UserForm" component={UserForm} />

        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  )
};