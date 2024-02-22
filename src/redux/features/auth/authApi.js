import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import {setToken} from "../../../helper/SessionHelper.js";
import {SetLoginError, SetRegisterError} from "./authSlice.js";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registration: builder.mutation({
            query: (data) => ({
                url: "/auth/register",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Register Success");
                    }

                }catch(err) {
                    let status = err?.error?.status;
                    let result = err?.error?.data?.data;
                    if(status === 409){
                        dispatch(SetRegisterError(result));
                        ErrorToast(result)
                    }else{
                        dispatch(SetRegisterError(result));
                        console.log(err)
                    }
                }
            }
        }),

        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    // console.log(res?.meta?.response?.status);
                    if(res?.data?.message === "success"){
                        let MyToken = res.data['token'];
                        setToken(MyToken);
                        SuccessToast("Login Success");
                        // window.location.href="/";
                    }
                }catch(err) {
                    const status = err?.error?.status;
                    if(status === 404){
                        dispatch(SetLoginError("Could not Find this Email!"));
                        ErrorToast("Could not Find this Email!")
                    }else if(status === 400){
                        dispatch(SetLoginError("Wrong Password!"));
                        ErrorToast("Wrong Password!")
                    }else{
                        // dispatch(SetLoginError("Something Went Wrong!"));
                        console.log(err)
                    }
                }
            }
        }),

    }),
})


export const {useRegistrationMutation, useLoginMutation} = authApi;