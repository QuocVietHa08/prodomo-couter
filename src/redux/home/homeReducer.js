import { createSlice } from "@reduxjs/toolkit"

const initalState = {
  timeCountDown: 0,
  timePurpose: 'Work',
  isCountDown: false,
}

const homeSlice = createSlice({
  name: 'homeReducer',
  initialState: {...initalState},
  reducers: {
    setTimeCountDown: (state, action) => {
      return {
        ...state,
        timeCountDown: action.payload,
      }
    },
    setTimePurpose: (state, action) => {
      return {
        ...state,
        timePurpose: action.payload,
      }
    },
    setStartCountDown: (state) => {
      return {
        ...state,
        isCountDown: true,
      }
    },
    setStopCountDown: (state) => {
      return {
        ...state,
        isCountDown: false
      }
    }
  }
})

export const {
  setTimeCountDown,
  setTimePurpose,
  setStartCountDown,
  setStopCountDown,
} = homeSlice.actions

export default homeSlice.reducer 

