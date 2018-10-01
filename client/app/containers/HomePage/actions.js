/*
 *
 * Test actions
 *
 */

import { CHANGE_IMAGE_ACTION } from './constants';

export function changeImageAction(image) {
  return {
    type: CHANGE_IMAGE_ACTION,
    image,
  };
}
