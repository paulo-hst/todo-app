const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        _id: 1,
        description: 'Pagar fatura',
        done: true
    },{
        _id: 2,
        description: 'Reunião',
        done: true
    },{
        _id: 3,
        description: 'Consulta médica',
        done: false
    }]
}

const todoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}

export default todoReducer