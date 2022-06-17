const initialState=1


const PageReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'Update Page': return action.payload
        default :return state
    }
}

export default PageReducer;