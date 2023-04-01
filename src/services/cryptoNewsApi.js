import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { cryptoNewsHeaders, baseNewsUrl } from "./settings";

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseNewsUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => {
        const request = {
          url: `/news/search?q=${newsCategory}&count=${count}&freshness=Day&textFormat=Raw&safeSearch=Off`,
          headers: cryptoNewsHeaders,
        };

        return request;
      },
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
