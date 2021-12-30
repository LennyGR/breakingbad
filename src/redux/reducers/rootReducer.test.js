import rootReducer, { todoAdded } from './rootReducer'
import { ADD_VISIT_PROFILE, SET_QUOTABLES } from "../actions/contants";

test('should return the initial state', () => {
  expect(rootReducer(undefined, {})).toEqual(
    {
        visit_characters: {},
        quotable_characters: []
    }
  )
});

test('should handle quotables', () => {
    const previousState = {
        visit_characters: {},
        quotable_characters: []
    };
    expect(rootReducer(previousState, { type: SET_QUOTABLES, quotables: ['one','two']})).toEqual({
        visit_characters: {},
        quotable_characters: ['one','two']
    })
  });

  test('should handle visits', () => {
    const previousState = {
        visit_characters: {},
        quotable_characters: []
    };
    expect(rootReducer(previousState, { type: ADD_VISIT_PROFILE, charId: "16"})).toEqual({
        visit_characters: { 16: 1 },
        quotable_characters: []
    })
  });