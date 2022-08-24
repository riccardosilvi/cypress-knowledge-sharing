export interface Market {
  symbol: string;
  color: string;
  name: string;
  image: string;
  image_light: string;
  price: number;
  character: string;
  basic: boolean;
  pro: boolean;
  coin_details: CoinDetails;
  locked: boolean;
  is_stable: boolean;
  network: string;
  regex: string;
  category: Category;
  shortName: string;
  fullName: string;
  buyServiceCharge: number;
  sellServiceCharge: number;
  withdrawalServiceCharge: number;
  withdrawalServiceChargeInBTC: number;
  confirmationCount: number;
  contractAddress?: string;
  minWithdrawalLimit: number;
  maxWithdrawalLimit: number;
  decimalPrecision: number;
  makerFeePro: number;
  takerFeePro: number;
  tradeEnabled: boolean;
  tradeEnabled_Buy: boolean;
  tradeEnabled_Sell: boolean;
  depositEnabled: boolean;
  withdrawalEnabled: boolean;
  secondaryWalletType: string;
  addressSeparator: string;
  walletType: string;
  withdrawalServiceChargeType: string;
  currencyEnabled: boolean;
  isFiat: boolean;
  fiatPrice: number;
  isPro: boolean;
  isBlocked: boolean;
  lowestAsk?: number;
  heighestBid?: number;
  last?: number;
  percentChange?: number;
  baseVolume?: number;
  quoteVolume?: number;
  high24hr?: number;
  low24hr?: number;
  image_wallet_cover?: string;
  image_wallet_cover_landscape_mobile?: string;
  image_wallet_cover_landscape_desktop?: string;
}

export interface CoinDetails {
  whitepaper?: string;
  website?: string;
  current_supply?: number;
  market_cap: any;
  volume_24h: any;
  descriptions: Descriptions;
  max_supply?: number;
}

export interface Descriptions {
  en: string;
  fr?: string;
  it: string;
}

export interface Category {
  name: string;
  priority: number;
}
