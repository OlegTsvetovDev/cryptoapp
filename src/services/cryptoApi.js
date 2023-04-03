import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { cryptoApiHeaders, baseUrl } from "./settings";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => {
        const request = {
          url: `/coins?limit=${count}`,
          headers: cryptoApiHeaders,
        };
        return request;
      },
    }),
    getCryptoByUUID: builder.query({
      query: (uuid) => {
        const request = {
          url: `/coin/${uuid}`,
          headers: cryptoApiHeaders,
        };
        return request;
      },
    }),
    getCryptoHistoryByUUID: builder.query({
      query: ({ uuid, timePeriod }) => {
        if (!timePeriod) timePeriod = "24h";
        const request = {
          url: `coin/${uuid}/history/?timePeriod=${timePeriod}`,
          headers: cryptoApiHeaders,
        };
        return request;
      },
    }),
    getCryptoExchanges: builder.query({
      query: () => {
        const request = {
          url: "/exchanges?limit=50",
          headers: cryptoApiHeaders,
        };
        return request;
      },
    }),
    getCryptoExchangesByUUID: builder.query({
      query: (uuid) => {
        const request = {
          url: `coin/${uuid}/exchanges`,
          headers: cryptoApiHeaders,
        };
        return request;
      },
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoByUUIDQuery,
  useGetCryptoHistoryByUUIDQuery,
  useGetCryptoExchangesQuery,
  useGetCryptoExchangesByUUIDQuery,
} = cryptoApi;
