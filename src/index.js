import './styles.css'
import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import { increment, decrement, incrementAsync, changeTheme } from './redux/actions'
import logger from 'redux-logger'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

const addBtn = document.querySelector('#add')
const minusBtn = document.querySelector('#sub')
const addAsyncBtn = document.querySelector('#async')
const counterEl = document.querySelector('#counter')
const themeBtn = document.querySelector('#theme')

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

minusBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

addAsyncBtn.addEventListener('click', () => {
  store.dispatch(incrementAsync())
})

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light')
    ? 'dark'
    : 'light'
  store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state.counter
  document.body.className = state.theme.value;
  [addBtn, minusBtn, addAsyncBtn, themeBtn].forEach(btn => {
    btn.disabled = state.theme.disabled
  })
})

store.dispatch({ type: 'INIT_APPLICATION' })
