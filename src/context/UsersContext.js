import React, { createContext, useReducer } from 'react';
import users from '../data/users';

const initialState = { users }
const UsersContext = createContext({});

export const UsersProvider = props => {

    const reducer = (state, action) => {
        if (action.type === 'DELETE_USER') {
            const user = action.payload;
            return {
                ...state,
                users: state.users.filter(u => u.id !== user.id)
            }
        } else if (action.type === 'CREATE_USER') {
            const user = action.payload;
            user.id = Math.random();
            return {
                ...state,
                users: [...state.users, user]
            }
        } else if (action.type === 'UPDATE_USER') {
            const user = action.payload;
            return {
                ...state,
                users: state.users.map(u => u.id === user.id ? user : u)
            }
        }
        return state;
    };

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext;