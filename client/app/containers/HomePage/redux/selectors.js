import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the HomePage state domain
 */

const selectHomePage = state =>
  state.get('ObjectRecognitionPage', initialState);

/**
 * Other specific selectors
 */

const makeSelectImage = () =>
  createSelector(selectHomePage, ImageState => ImageState.get('image'));

const makeSelectConfidence = () =>
  createSelector(selectHomePage, ConfidenceState =>
    ConfidenceState.get('confidence'),
  );

const makeSelectResponse = () =>
  createSelector(selectHomePage, ResponseState =>
    ResponseState.get('response'),
  );

export default selectHomePage;
export { makeSelectImage, makeSelectResponse, makeSelectConfidence };
