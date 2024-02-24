import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ErrorToast} from "../../../helper/ValidationHelper.js";
import {getToken} from "../../../helper/SessionHelper.js";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://shops-api-goni.vercel.app/api",
    // baseUrl: "http://localhost:5000/api",
    prepareHeaders: async (headers, {getState, endpoint}) =>{
        if(getToken()){
            headers.set("token", getToken());
        }
        return headers;
    }
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {
        let result = await baseQuery(args, api, extraOptions);
        if (result?.error?.status === 401) {
            localStorage.clear();
            ErrorToast("Token Expired");
            window.location.href="/";
        }
        return result;
    },
    tagTypes: ["Products", "Product","Search", "CategoryList"], //TagS WhiteLists
    endpoints: (builder) => ({}),
})



