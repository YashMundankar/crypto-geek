const initialState='INR'


const CurrencyReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'Update Currency': return action.payload
        default :return state
    }
    // return 'INR';
}

export default CurrencyReducer;