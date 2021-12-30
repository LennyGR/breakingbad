
import { ADD_VISIT_PROFILE, SET_QUOTABLES } from "./contants";

const thunk =
({ dispatch, getState }) =>
next =>
action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  return next(action)
}

const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn()
    }
    const next = jest.fn()
  
    const invoke = action => thunk(store)(next)(action)
  
    return { store, next, invoke }
  }

  test('passes through action', () => {
    const { next, invoke } = create()
    const action = { type: SET_QUOTABLES, quotables: ['abc','cde'] }
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
  })