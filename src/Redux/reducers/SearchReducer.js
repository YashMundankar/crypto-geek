const initialState=''


const SearchReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'Update Search': return action.payload
        default :return state
    }
}

export default SearchReducer;