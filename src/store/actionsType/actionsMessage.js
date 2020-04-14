import { SET_MESSAGE } from './actionsType'

export const setMessage = message => {
    return {
        type: SET_MESSAGE,
        payload: message
    }
} 
