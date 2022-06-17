const initialState=[]


const CoinsReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'Update Coins': return action.payload
        default :return state
    }
}

export default CoinsReducer;