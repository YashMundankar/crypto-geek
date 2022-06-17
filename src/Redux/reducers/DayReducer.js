const initialState=1


const DayReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'Update Days': return action.payload
        default :return state
    }
}

export default DayReducer;