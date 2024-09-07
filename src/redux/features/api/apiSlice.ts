import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
// Define the custom base query function with types
const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // Log cookies
  console.log("Cookies:", document.cookie); // Log all cookies

  // Log request headers if available
  if (typeof args === "object" && args !== null && "headers" in args) {
    console.log("Request Headers:", (args as FetchArgs).headers);
  }

  // Call the default fetchBaseQuery
  return fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/", // Base URL for your API
    credentials: "include", // Include cookies in requests
  })(args, api, extraOptions);
};

export const apiSlice = createApi({
  reducerPath: "goretoApi",
  tagTypes: [],
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({}),
});
