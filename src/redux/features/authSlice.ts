import { apiSlice } from "./api/apiSlice";

interface SignUpData {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password1: string;
  password2: string;
}

interface LogIn {
  // email: string;
  username: string;
  password: string;
}

const getCSRFToken = () => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    let [name, value] = cookie.split("=");
    if (name.trim() === "csrftoken") {
      return value;
    }
  }
  return null;
};

export const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<void, LogIn>({
      query: (credentials: LogIn) => ({
        url: "login/",
        method: "POST",
        body: credentials,
        credentials: "include",
      }),
    }),
    session: builder.query<any, string>({
      query: (csrfToken) => ({
        url: "session-check/",
        method: "GET",
        headers: {
          "X-CSRFToken": "5fhFB08JiLQz7LilXMpXM02rqvbmfh8O",
        },
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    signup: builder.mutation<string, SignUpData>({
      query: (data: SignUpData) => {
        const newData = {
          first_name: data.first_name,
          last_name: data.last_name,
          username: data.username,
          email: data.email,
          password1: data.password1,
          password2: data.password2,
        };
        return {
          url: `register/`,
          method: "POST",
          body: newData,
        };
      },
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useSessionQuery,
  useLogoutMutation,
} = authSlice;
