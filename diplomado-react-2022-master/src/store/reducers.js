const initialState = {
  counter: 0,
  another: 1
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD': {
      return {
        ...state,
        counter: state.counter + action.payload
      }
    }
    case 'SUB': {
      return {
        ...state,
        counter: state.counter + action.payload
      }
    }
    default:
      return state
  }
};