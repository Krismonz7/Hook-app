const initialState = [{
    id:1,
    todo:'Recolectar pastel',
    done:false
}];

export const todoReducer = (state = initialState,action = {})=>{
    
    if(action.type === '[TODO] add todo'){
        return [...state,action.payload];
    }
    return state;
    
}

let todo = todoReducer();
console.log({state:todo})

const newTodo = {
    id:2,
    action:'Salvar dreamland',
    done:false
};


const addTodoAction = {
    type:'[TODO] add todo',
    payload:newTodo,
}

todo = todoReducer(todo,addTodoAction);

console.log({state:todo})
