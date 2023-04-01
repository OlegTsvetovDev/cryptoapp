import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { cryptoNewsHeaders, baseNewsUrl } from "./settings";
import { createNewsRequest } from "./createNewsRequest";

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseNewsUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => {
        const request = createNewsRequest(
          `/news/search?q=${newsCategory}&count=${count}&freshness=Day&textFormat=Raw&safeSearch=Off`,
          cryptoNewsHeaders
        );

        return request;
      },
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
