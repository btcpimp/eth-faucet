import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import userReducer from './reducers/user'
import faucetReducer from './reducers/faucet'
import { web3Reducer as web3 } from './reducers/web3'

const reducer = combineReducers({
  web3,
  routing: routerReducer,
  user: userReducer,
  faucet: faucetReducer
})

export default reducer
