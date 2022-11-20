import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { cryptoNewsHeaders, baseNewsUrl } from './settings'


const createNewsRequest = url => ({
  url: url,
  headers: cryptoNewsHeaders,
})

const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseNewsUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => {
        createNewsRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        )
      }
    })
  })
})

const { useGetCryptoNewsQuery } = cryptoNewsApi


export {
  cryptoNewsApi,
  useGetCryptoNewsQuery
}
