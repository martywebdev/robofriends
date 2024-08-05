import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  robots: [],
  filteredRobots: [],
  search: '',
  status: 'idle',
  error: null,
};

// Create an async thunk to fetch robots
export const fetchRobots = createAsyncThunk('robots/fetchRobots', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  const data = await response.json();
  return data;
});

const robotsSlice = createSlice({
  name: 'robots',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
      state.filteredRobots = state.robots.filter(robot =>
        robot.name.toLowerCase().includes(state.search.toLowerCase()) ||
        robot.email.toLowerCase().includes(state.search.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRobots.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRobots.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.robots = action.payload;
        state.filteredRobots = action.payload.filter(robot =>
          robot.name.toLowerCase().includes(state.search.toLowerCase()) ||
          robot.email.toLowerCase().includes(state.search.toLowerCase())
        );
      })
      .addCase(fetchRobots.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSearch } = robotsSlice.actions;

export default robotsSlice.reducer;
