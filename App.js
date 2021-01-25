import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';
import { Button, Icon } from 'react-native-elements';
import { UsersProvider } from './src/context/UsersContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UsersProvider>
      {/* 1 */}
      <NavigationContainer>

        {/* 2 */}
        <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions} >

          {/* 3 */}
          {/* no Screen, é como se fosse minha tela renderizada, onde temos o nome da tela, qual o component, e o otions seria as opções da tela, recebe props(navigation), e posso retornar um JSX.
        Neste Screen tenho um JSX que é um botão, que tem uma arrow function que me direciona ao Screen USERFORM ao ser clicado. */}
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({ navigation }) => {
              return {
                title: "Lista de usuários",
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate("UserForm")}
                    type="clear"
                    icon={<Icon name="add" size={25} color="#fff" />} />
                )
              }
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title: "Formulário de usuários"
            }} />

        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  )
};

const screenOptions = {
  headerStyle: {
    backgroundColor: 'teal'
  },
  headerTintColor: '#fff',
  headerTitleWeight: {
    fontWeight: 'bold'
  }
}


// 1=> NavigationContainer: Componente de contêiner que mantém o estado de navegação projetado para aplicativos React Native. Isso deve ser renderizado na raiz envolvendo todo o aplicativo. 

// 2=> NAVIGATOR:  Componente Navigator que gerencia as telas secundárias. 
// 2.1=> initialRouteName: qual será a rota inicial 
// 2.2=> screenOptions: onde será as opções de stylos para a tela. Recebe um objeto.

// 3=> SCREEN: Componente usado para especificar a configuração da rota.
// 3.1=> options: opções para a tela do component que quer estilizar. 