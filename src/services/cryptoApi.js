import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { cryptoApiHeaders, baseUrl } from './settings'


const createRequest = url => ({
  url: url,
  headers: cryptoApiHeaders
})

const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    })
  })
})

const { useGetCryptosQuery } = cryptoApi


export {
  cryptoApi,
  useGetCryptosQuery
}
