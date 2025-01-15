import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      console.log("Action:", action); // Logs full action object
      console.log("Payload:", action.payload); // Logs payload
      console.log("Previous State:", state.value); // Logs previous state value

      state.value += action.payload || 1;

      console.log("New State:", state.value); // Logs updated state
    },
    decrement: (state, action) => {
      console.log("Action:", action);
      console.log("Payload:", action.payload);
      console.log("Previous State:", state.value);

      state.value -= action.payload || 1;

      console.log("New State:", state.value);
    },
    reset: (state) => {
      console.log("Action: Reset called");
      console.log("Previous State:", state.value);

      state.value = 0;

      console.log("New State:", state.value);
    }
  }
});

// Actions
export const { increment, decrement, reset } = counterSlice.actions;

// Reducer
export default counterSlice.reducer;
