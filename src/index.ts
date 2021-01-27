import commodities from "./lib/commodities";
import crypto from './lib/crypto';
import etf from './lib/etf';
import forex from './lib/forex';
import mutualfund from './lib/mutualfund';
import stock from './lib/stock';
import market from './lib/market';
import search from './lib/search';
import auth from './lib/auth';

import * as dotenv from 'dotenv';
dotenv.config();

auth.key = process.env.FMP_API_KEY!;

export default {
  stock,
  market,
  forex, 
  crypto,
  search,
  commodities,
  etf,
  mutualfund
}