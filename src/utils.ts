import { FuseAsset, SupportedChains } from '@midas-capital/sdk';
import { BigNumber } from 'ethers';

export const SCALE_FACTOR_ONE_18_WEI = BigNumber.from(10).pow(18);
export const SCALE_FACTOR_UNDERLYING_DECIMALS = (asset: FuseAsset) =>
  BigNumber.from(10).pow(18 - asset.underlyingDecimals.toNumber());

export type ExtendedFuseAsset = FuseAsset & {
  borrowBalanceWei: BigNumber;
  supplyBalanceWei: BigNumber;
};

export type FusePoolUser = {
  account: string;
  totalBorrow: number;
  totalCollateral: number;
  health: number;
  debt: Array<ExtendedFuseAsset>;
  collateral: Array<ExtendedFuseAsset>;
  assets: Array<ExtendedFuseAsset>;
};

export type Pool = {
  [comptrollerAddress: string]: Array<[string, Array<any>, number | BigNumber]> | null;
};

interface NativeTokenData {
  symbol: string;
  address: string;
  decimals: number;
  coingeckoId: string;
}

export const NATIVE_TOKEN_DATA: Record<number, NativeTokenData> = {
  [SupportedChains.bsc]: {
    symbol: 'BNB',
    address: '0x0000000000000000000000000000000000000000',
    decimals: 18,
    coingeckoId: 'binancecoin',
  },
  [SupportedChains.chapel]: {
    symbol: 'BNB',
    address: '0x0000000000000000000000000000000000000000',
    decimals: 18,
    coingeckoId: 'binancecoin',
  },
  [SupportedChains.ganache]: {
    symbol: 'ETH',
    address: '0x0000000000000000000000000000000000000000',
    decimals: 18,
    coingeckoId: 'ethereum',
  },
};