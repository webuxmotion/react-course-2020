import { 
  DECREMENT, 
  INCREMENT, 
  INCREMENT_ASYNC, 
  CHANGE_THEME,
  ENABLE_BUTTONS,
  DISABLE_BUTTONS
} from './types'

export function enableButtons() {
  return {
    type: ENABLE_BUTTONS
  }
}

export function disableButtons() {
  return {
    type: DISABLE_BUTTONS
  }
}

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function changeTheme(theme) {
  return {
    type: CHANGE_THEME,
    payload: theme
  }
}

export function incrementAsync() {
  return function(dispatch) {
    dispatch(disableButtons())
    setTimeout(() => {
      dispatch({ type: INCREMENT })
      dispatch(enableButtons())
    }, 1000)
  }
}
