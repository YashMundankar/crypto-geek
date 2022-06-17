import { combineReducers } from "redux";
import CurrencyReducer from "./CurrencyReducer";
import HistoricalDataReducer from "./HistoricalDataReducer";
import DayReducer from "./DayReducer";
import SingleCoinDataReducer from "./SingleCoinDataReducer";
import SearchReducer from "./SearchReducer";
import PageReducer from "./PageReducer";
import LoadReducer from "./LoadReducer";
import CoinsReducer from "./CoinsReducer";

const RootReducer = combineReducers({
    CurrencyReducer : CurrencyReducer,
    HistoricalDataReducer : HistoricalDataReducer,
    DayReducer : DayReducer,
    SingleCoinDataReducer : SingleCoinDataReducer,
    SearchReducer : SearchReducer,
    PageReducer : PageReducer,
    LoadReducer : LoadReducer,    
    CoinsReducer : CoinsReducer



})



export default RootReducer;