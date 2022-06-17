export const updateCurrency=(currency)=>{
    return {
        type:'Update Currency',
        payload :currency
    }
}

export const updateHistoricalData=(data)=>{
    return {
        type:'Update Historical Data',
        payload :data
    }
}


export const updateDays=(days)=>{
    return {
        type:'Update Days',
        payload :days
    }
}

export const updateSingleCoinData=(data)=>{
    return {
        type:'Update Single Coin Data',
        payload :data
    }
}

export const updateSearch=(data)=>{
    return {
        type:'Update Search',
        payload :data
    }
}

export const updatePage=(page)=>{
    return {
        type:'Update Page',
        payload :page
    }
}

export const updateLoad=(load)=>{
    return {
        type:'Update Load',
        payload :load
    }
}

export const updateCoins=(coins)=>{
    return {
        type:'Update Coins',
        payload :coins
    }
}




