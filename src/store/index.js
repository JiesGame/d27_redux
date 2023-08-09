import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {value: {firstname: '', lastname:'', fullname:''}},
  reducers: {
    changeNames: (state, action) => {
      state.value = action.payload;
    }
  }
})


const skillsSlice = createSlice({
  name: 'skills',
  initialState: {value: {skills : null}} ,
  reducers: {
    changeSkills: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {changeNames} = userSlice.actions;
export const {changeSkills} = skillsSlice.actions;

export const store = configureStore({
  reducer: {
    skills: skillsSlice.reducer,
    user: userSlice.reducer,
  }
})


