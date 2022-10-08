const defaultState = {
  total: 0,  
  items: [],
  bars: [],
};


export const progressBarReducer = (state = defaultState, action) => {
  switch (action.type) {    
    case 'SET_TOTAL':
      return { ...state, freeFloat: action.payload , total: action.payload };
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'ADD_BARS':
      return { ...state, bars: [...state.bars, ...action.payload] };
      
    default:
      return state;
  }
};
//
