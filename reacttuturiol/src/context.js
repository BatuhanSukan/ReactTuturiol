import React, { Component } from 'react'

const UserContext = React.createContext();
// Provider , Consumer
const reducer = (state,action) => {
    switch(action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        case "ADD_USER":
            return {
                ...state,
                users : [...state.users,action.payload]
            }
    }
}

export class UserProvider extends Component {
    state = {
  

        users: [
        
        ],
        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
            }
    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;