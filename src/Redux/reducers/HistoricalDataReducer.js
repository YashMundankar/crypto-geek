const initialState=[]


const HistoricalDataReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'Update Historical Data': return action.payload
        default :return state
    }
}

export default HistoricalDataReducer;