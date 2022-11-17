import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../services/cryptoApi'


const config = {
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
}


export default configureStore(config)
