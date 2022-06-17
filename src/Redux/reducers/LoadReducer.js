const initialState=true


const LoadReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'Update Load': return action.payload
        default :return state
    }
}

export default LoadReducer;