import { configureStore, createSlice } from "@reduxjs/toolkit";

const word = createSlice({
    name: '천재만들기',
    initialState: 1,
    reducers: {
        up: (state) => state + 1
    }
});

const { up } = word.actions;

export { up };

const changeMode = createSlice({
    name: "다크모드",
    initialState: false,
    reducers: {
        change: state => !state
    }
});

export const { change } = changeMode.actions;

const createInput = createSlice({
    name: "포함한 값받기",
    initialState: [],
    reducers: {
        create: (state, action) => { state.push("TEST") }
    }
})

export const { create } = createInput.actions;

const store = configureStore({
    reducer: {
        word: word.reducer,
        changeMode: changeMode.reducer,
        createInput: createInput.reducer
    }
});

export default store;