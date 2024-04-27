import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { BASE_URL } from '../utilities/constants'
import axios from 'axios'
import { useAppSelector } from './hook'

export interface LoginResponseModel {
    access_token: string
    refresh_token: string
}

export interface ProfileResponseModel {
    id: string,
    email: string,
    name: string,
    role: string,
    avatar: string,
}

export interface GenericResponseModel {
    data: LoginResponseModel
    isLoading: boolean,
    error: string | null
}

const initialState: GenericResponseModel = {
    data: <LoginResponseModel>{},
    error: '',
    isLoading: false,
};

export const login = createAsyncThunk('login', async ({ email, password }: { email: string, password: string }) => {
    const response = await axios.post<LoginResponseModel>(`${BASE_URL}/auth/login`, {
        email,
        password,
    });
    //logic to store token into local secure storage
    return response.data;
});


export const getProfile = createAsyncThunk('getProfile', async () => {
    //get token from local storage
    const account = useAppSelector(state => state.account);
    const token = account.data.access_token;
    console.log(token);

    const response = await axios.get<LoginResponseModel>(`${BASE_URL}/auth/profile`,
        {
            headers: {
                'content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
    return response.data;
});


export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload,
                    state.error = null
            })
            .addCase(login.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload
            });
    },
})

export default accountSlice.reducer