const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        _id: 1,
        description: 'Pagar',
        done: true
    }, {
        _id: 2,
        description: 'Reunião',
        done: false
    }, {
        _id: 3,
        description: 'Consulta',
        done: false
    }]
}

export default function todoReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state
    }
}