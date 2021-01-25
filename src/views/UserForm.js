import React, { useContext, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import UsersContext from '../context/UsersContext';

export default function UserForm({ route, navigation }) {
    const [user, setUser] = useState(route.params ? route.params : {});
    const { dispatch } = useContext(UsersContext);

    return (
        <View style={style.container}>
            <Text>Name</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Informe o nome"
                value={user.name}
            />
            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Informe o email"
                value={user.email}
            />
            <Text>Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatar_url => setUser({ ...user, avatar_url })}
                placeholder="Cole o link do avatar"
                value={user.avatar_url}
            />

            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? "UPDATE_USER" : "CREATE_USER",
                        payload: user,
                    });
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 10
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
})


// onChangeText: da permissão de mudar o texto, te passa o novo valor da variavel.