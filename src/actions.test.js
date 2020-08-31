import * as actions from './actions';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants.js'

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

it('should create an action to sarch robots', () => {
  const text = 'wooo';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
  expect(actions.setSearchField(text)).toEqual(expectedAction);
})

// tests REQUEST_ROBOTS_PENDING
it('handles requesting robots APIs', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();

  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING
  }
  expect(action[0]).toEqual(expectedAction);
})


// tests REQUEST_ROBOTS_SUCCESS
it("handles requesting robots API", () => {
  const store = mockStore({});
  store.dispatch(actions.requestRobots()).then(() => {
    const action = store.getActions();
    const firsExpectedAction = {
      type: REQUEST_ROBOTS_PENDING
    };
    expect(action[0]).toEqual(firsExpectedAction);
    // We don't care about what data the api is returning
    // in this test. We only test the type of the action
    // the action creator is returning
    expect(action[1].type).toEqual(REQUEST_ROBOTS_SUCCESS);
  });
});

// tests REQUEST_ROBOTS_FAILED
it("handles requesting robots API", () => {
  const store = mockStore({});
  const wrongApiLink = "https://jsonplaceholder.typicode.com/use";
  store.dispatch(actions.requestRobots(wrongApiLink)).then(() => {
    const action = store.getActions();
    const firsExpectedAction = {
      type: REQUEST_ROBOTS_PENDING
    };
    expect(action[0]).toEqual(firsExpectedAction);
    expect(action[1].type).toEqual(REQUEST_ROBOTS_FAILED);
  });
});
