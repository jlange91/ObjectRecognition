import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the test state domain
 */

const selectImage = state => state.get('HomePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Test
 */

const makeSelectImage = () =>
  createSelector(selectImage, ImageState => ImageState.get('image'));

export default makeSelectImage;
export { selectImage };
