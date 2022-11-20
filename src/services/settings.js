export const baseUrl = 'https://coinranking1.p.rapidapi.com'

export const cryptoApiHeaders = {
  'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
  'X-RapidAPI-Host': process.env.REACT_APP_X_RapidAPI_Host,
}


export const baseNewsUrl = 'https://bing-news-search1.p.rapidapi.com'

export const cryptoNewsHeaders = {
  'X-BingApis-SDK': process.env.REACT_APP_X_BingApis_SDK,
  'X-RapidAPI-Key': process.env.REACT_APP_X_BingApis_Key,
  'X-RapidAPI-Host': process.env.REACT_APP_X_BingApis_Host
}
