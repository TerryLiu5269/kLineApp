export interface CurrencyPair {
  symbol: string;
  lastPrice: number;
  volume: number;
  count: number;
  priceColor: string;
  isRising: boolean;
  isFalling: boolean;
}
