import { combineReducers } from 'redux'
import { ADD_SEARCH, ADD_LOGIN, CREATE_ACCOUNT } from './../actions/index'
import charts from './chart-reducer'
import toDo from './todo-reducer'


const initialState = {
    searchField: '',
    login: { username: '', password: '' },
    tiles: [
        {
            title: 'Title',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid reprehenderit, sed hic ipsa debitis magnam inventore saepe ullam.'
        },
        {
            title: 'Title',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nulla expedita nam saepe explicabo non atque aliquid.'
        }
    ],
    register: []

}



const navbarFields = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SEARCH:
            return {
                ...state,
                searchField: action.payload
            }
        default:
            return state;
    }
}

const loginPage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        default:
            return state;
    }
}

const registrationForm = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_ACCOUNT:
        return {...state, register: [...state.register, action.payload]}
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    navbarFields,
    loginPage,
    registrationForm,
    charts,
    toDo
})


export default rootReducer