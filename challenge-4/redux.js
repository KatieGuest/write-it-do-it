import { createStore } from 'redux';

// ACTION TYPE
const GOT_DOGS = 'ADD_DOGS';

// ACTION CREATOR
// complete the action creator here!
export const gotDogs = dogs => ({
  type: GOT_DOGS,
  dogs
});

// REDUCER
const initialState = {
  dogs: []
};

// complete the reducer here!
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_DOGS:
      return {
        ...state,
        dogs: action.dogs
      };
    default:
      return state;
  }
};

// STORE
export default createStore(reducer);
