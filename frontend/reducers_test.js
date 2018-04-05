import session_reducer from '../reducers/session_reducer';
import * as types from '../actions/session_actions';

describe('session reducer', () => {
  it('should return the inital state', () => {
    expect(session_reducer(undefined, {})).toEqual([
      {
        currentUser: null,
        errors: []
      }
    ])
  })
})
