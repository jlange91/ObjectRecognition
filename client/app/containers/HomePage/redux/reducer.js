/*
 *
 * Test reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_IMAGE_ACTION,
  CHANGE_RESPONSE_ACTION,
  CHANGE_CONFIDENCE_ACTION,
} from './constants';

export const initialState = fromJS({
  image: '',
  confidence: 0.3,
  response: [],
});

function HomePageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_IMAGE_ACTION:
      return state.set('image', action.image);
    case CHANGE_RESPONSE_ACTION:
      return state.set('response', action.response);
    case CHANGE_CONFIDENCE_ACTION:
      return state.set('confidence', action.confidence);
    default:
      return state;
  }
}

export default HomePageReducer;
