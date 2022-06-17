const initialState=''


const SingleCoinDataReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'Update Single Coin Data': return action.payload
        default :return state
    }
}

export default SingleCoinDataReducer;