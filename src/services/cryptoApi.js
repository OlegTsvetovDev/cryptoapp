import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { cryptoApiHeaders, baseUrl } from "./settings";

const createRequest = (url) => ({
  url: url,
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => {
        const request = createRequest(`/coins?limit=${count}`);
        return request;
      },
    }),
    getCryptoByUUID: builder.query({
      query: (uuid) => {
        const request = createRequest(`/coin/${uuid}`);
        return request;
      },
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoByUUIDQuery } = cryptoApi;
