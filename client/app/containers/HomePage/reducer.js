/*
 *
 * Test reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_IMAGE_ACTION } from './constants';

export const initialState = fromJS({ image: '' });

function HomePageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_IMAGE_ACTION:
      return state.set('image', action.image);
    default:
      return state;
  }
}

export default HomePageReducer;
