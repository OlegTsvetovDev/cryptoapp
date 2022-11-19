import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
  'X-RapidAPI-Key': '15dda18599msh1fcdea5364ec4aep194886jsn88bf55a95f78',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = url => ({
  url: url,
  headers: cryptoApiHeaders
})


export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    })
  }),
})

export const { useGetCryptosQuery } = cryptoApi
