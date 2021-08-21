import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented: (state) => {
      state.value++
    },

    decremented: (state) => {
      state.value--
    },

    amountAdded: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { incremented, decremented, amountAdded } = counterSlice.actions

console.log("incremented=", incremented()) // {type: "counter/incremented", payload: undefined}
console.log("decremented=", decremented()) // {type: "counter/decremented", payload: undefined}
console.log("amountAdded=", amountAdded(2)) // {type: "counter/amountAdded", payload: 2}

export default counterSlice.reducer
console.log("counterSlice.reducer=", counterSlice.reducer) // (state, action) => {}
