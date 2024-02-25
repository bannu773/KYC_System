import { configureStore } from '@reduxjs/toolkit'
import Customerstore from './Customerstore'


export default configureStore({
  reducer: {
    customerDetails : Customerstore
  },
})