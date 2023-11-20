import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const today = new Date();

// const KEY = process.env.REACT_APP_KEY;
const URL = process.env.REACT_APP_URL;
console.log({ URL });

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: () => `/api/blogs?populate=*`,
    }),
    getSingleNews: builder.query({
      query: (id) => `/api/blogs/${id}?populate=*`,
    }),
    // getAllTrendingNews: builder.query({
    //   query: (category) =>
    //     `top-headlines?q=${category}&to=${today.toISOString()}&sortBy=publishedAt&apiKey=${KEY}`,
    // }),
    // getAllPublishers: builder.query({
    //   query: () => `top-headlines/sources?apiKey=${KEY}`,
    // }),
  }),
});
export const {
  useGetAllNewsQuery,
  useGetSingleNewsQuery,
  // useGetAllTrendingNewsQuery,
  // useGetAllPublishersQuery,
} = newsApi;
