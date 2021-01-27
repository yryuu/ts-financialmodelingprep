import { makeRequest } from './utilities';
import indexes from './indexes';

export default {
  index: indexes(),
  most_active: () => makeRequest('stock/actives'),
  most_gainer: () => makeRequest('stock/gainers'),
  most_loser: () => makeRequest('stock/losers'),
  sector_performance: () => makeRequest('stock/sectors-performance'),
  trading_hours: () => makeRequest('is-the-market-open')
};