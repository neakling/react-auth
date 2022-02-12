import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "",
        email: "",
        password: "",
    },
    reducers: {
        updateProfile: (state, action) => {
            const { name, email } = action.payload;

            state.username = name;
            state.email = email;
        },
        login: (state, action) => {
            const { name, password } = action.payload;

            state.username = name;
            state.password = password;
        },
        register: (state, action) => {
            const { name, password } = action.payload;

            state.username = name;
            state.password = password;
        },
    },
});

export const { login } = userSlice.actions;

export default userSlice;
