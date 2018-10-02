/*
 *
 * Test actions
 *
 */

import {
  CHANGE_IMAGE_ACTION,
  CHANGE_RESPONSE_ACTION,
  CHANGE_CONFIDENCE_ACTION,
} from './constants';

export function changeImageAction(image) {
  return {
    type: CHANGE_IMAGE_ACTION,
    image,
  };
}

export function changeResponseAction(response) {
  return {
    type: CHANGE_RESPONSE_ACTION,
    response,
  };
}

export function changeConfidenceAction(confidence) {
  return {
    type: CHANGE_CONFIDENCE_ACTION,
    confidence,
  };
}
