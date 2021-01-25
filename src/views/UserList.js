import React, {useContext} from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { Avatar, Button, Icon, ListItem } from 'react-native-elements';
import UsersContext from '../context/UsersContext';

export default function UserList(props) {

    const {state, dispatch} = useContext(UsersContext);

    const confirmUserDelete = (user) => {
        Alert.alert('Excluir usuário', 'Deseja excluir usuário?', [
            {
                text:'SIM',
                onPress() {
                    dispatch({
                        type: 'DELETE_USER',
                        payload: user
                    })
                }
            },
            {
                text:'NÃO'
            },
        ])
    };

    const getUser = ({item: user}) => {
        return (
            <ListItem key= {user.id} bottomDivider onPress={() => props.navigation.navigate('UserForm', user)}>
                <Avatar source= {{uri: user.avatar_url}}/>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                    <Button type="clear" icon={<Icon name="edit" size={25} color="orange"/>} onPress={() => props.navigation.navigate('UserForm', user)}  />
                    <Button type="clear" icon={<Icon name="delete" size={25} color="red"/>} onPress={()=> confirmUserDelete(user)}  />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUser}
            />
        </View>
    )
}
