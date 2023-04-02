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
      query: (uuid, timeperiod) => {
        if (!timeperiod) timeperiod = "24h";
        const request = {
          url: `coin/${uuid}/history/?timePeriod=${timeperiod}`,
          headers: cryptoApiHeaders,
        };

        console.log("request fired");

        return request;
      },
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoByUUIDQuery,
  useGetCryptoHistoryByUUIDQuery,
} = cryptoApi;
