import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type UserAuthState = {
    "access_token": string,
    "expires_in": number,
    "token_type": "Bearer",
    "scope": null,
    "refresh_token": string
}

const initialState = {
    userAuth: {
        "access_token": "",
        "expires_in": 0,
        "token_type": "Bearer",
        "scope": null,
        "refresh_token": ""
    } as UserAuthState,
}


export const userAuthSlice = createSlice({
    name: "userAuthData",
    initialState,
    reducers: {
        saveUserAuth: (state, action: PayloadAction<UserAuthState>) => {
            state.userAuth = action.payload
        }
    },
})

export const { saveUserAuth } = userAuthSlice.actions

export default userAuthSlice.reducer