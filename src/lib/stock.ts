import { makeRequest, generateJson } from './utilities';
import financial from './financial';

export default (stock) => {
  return {
    financial: financial(stock),
    list: () => makeRequest('stock/list'),
    quote: () => makeRequest('quote', generateJson(stock)),
    rating: () => makeRequest('company/rating', generateJson(stock)),
    profile: () => makeRequest('company/profile', generateJson(stock)),
    current_price: () => makeRequest('stock/real-time-price', generateJson(stock)),
    intraday: ({ interval }) => makeRequest(`historical-chart/${interval}`, generateJson(stock)),
    news: ({ tickers, limit }) => makeRequest('stock_news', generateJson(null, { tickers, limit })),
    history: ({ start_date, end_date, data_type, limit }) => makeRequest('historical-price-full', generateJson(stock, { from: start_date, to: end_date, serietype: data_type, timeseries: limit })),
    dividend_history: ({ start_date, end_date, data_type, limit }) => makeRequest('historical-price-full/stock_dividend', generateJson(stock, { from: start_date, to: end_date, serietype: data_type, timeseries: limit })),
    split_history: ({ start_date, end_date, data_type, limit }) => makeRequest('historical-price-full/stock_split', generateJson(stock, { from: start_date, to: end_date, serietype: data_type, timeseries: limit })),
  }
}
