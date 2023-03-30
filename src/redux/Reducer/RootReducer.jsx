import { combineReducers } from 'redux'
import usersReducers from '../Reducer/usersReducers'

const RootReducer =combineReducers({
  users: usersReducers
})
export default RootReducer
