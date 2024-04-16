/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.77.0
  Forc version: 0.51.1
  Fuel-Core version: 0.22.1
*/

import type {
  BigNumberish,
  BN,
  Bytes,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

import type { Enum, Vec } from "./common";

export enum ErrorInput { TradingIsPaused = 'TradingIsPaused', InvalidAsset = 'InvalidAsset', AccessDenied = 'AccessDenied', NotEnoughFreeCollateral = 'NotEnoughFreeCollateral', OnlyClearingHouse = 'OnlyClearingHouse', AmountExceedsTheBalance = 'AmountExceedsTheBalance', V_GTDC = 'V_GTDC', V_MSAE = 'V_MSAE', V_NL = 'V_NL', ZeroPrice = 'ZeroPrice', ZeroAmount = 'ZeroAmount' };
export enum ErrorOutput { TradingIsPaused = 'TradingIsPaused', InvalidAsset = 'InvalidAsset', AccessDenied = 'AccessDenied', NotEnoughFreeCollateral = 'NotEnoughFreeCollateral', OnlyClearingHouse = 'OnlyClearingHouse', AmountExceedsTheBalance = 'AmountExceedsTheBalance', V_GTDC = 'V_GTDC', V_MSAE = 'V_MSAE', V_NL = 'V_NL', ZeroPrice = 'ZeroPrice', ZeroAmount = 'ZeroAmount' };
export enum PauseErrorInput { Paused = 'Paused', NotPaused = 'NotPaused' };
export enum PauseErrorOutput { Paused = 'Paused', NotPaused = 'NotPaused' };
export enum ReentrancyErrorInput { NonReentrant = 'NonReentrant' };
export enum ReentrancyErrorOutput { NonReentrant = 'NonReentrant' };

export type AddressInput = { value: string };
export type AddressOutput = AddressInput;
export type AssetIdInput = { value: string };
export type AssetIdOutput = AssetIdInput;
export type CollateralConfigurationInput = { deposit_cap: BigNumberish, collateral_ratio: BigNumberish, collateral_scale: BigNumberish, discount_ratio: BigNumberish, price_feed: string };
export type CollateralConfigurationOutput = { deposit_cap: BN, collateral_ratio: BN, collateral_scale: BN, discount_ratio: BN, price_feed: string };
export type I64Input = { value: BigNumberish, negative: boolean };
export type I64Output = { value: BN, negative: boolean };
export type RawBytesInput = { ptr: BigNumberish, cap: BigNumberish };
export type RawBytesOutput = { ptr: BN, cap: BN };

export type VaultAbiConfigurables = {
  OWNER: AddressInput;
  PROXY_ADDRESS: AddressInput;
  SETTLEMENT_TOKEN: AssetIdInput;
};

interface VaultAbiInterface extends Interface {
  functions: {
    add_admin: FunctionFragment;
    add_collateral_configuration: FunctionFragment;
    deposit_collateral: FunctionFragment;
    liquidate_collateral: FunctionFragment;
    pause_trading: FunctionFragment;
    remove_admin: FunctionFragment;
    resume_trading: FunctionFragment;
    withdraw_all: FunctionFragment;
    withdraw_collateral: FunctionFragment;
    get_account_value_and_total_collateral_value: FunctionFragment;
    get_collateral_balance: FunctionFragment;
    get_free_collateral: FunctionFragment;
    get_free_collateral_by_token: FunctionFragment;
    get_non_settlement_token_balance: FunctionFragment;
    has_non_settlement_token: FunctionFragment;
    is_allowed_collateral: FunctionFragment;
    is_liquidatable: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'add_admin', values: [AddressInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'add_collateral_configuration', values: [AssetIdInput, CollateralConfigurationInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'deposit_collateral', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'liquidate_collateral', values: [AddressInput, AssetIdInput, BigNumberish, Vec<Bytes>]): Uint8Array;
  encodeFunctionData(functionFragment: 'pause_trading', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'remove_admin', values: [AddressInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'resume_trading', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'withdraw_all', values: [AssetIdInput, Vec<Bytes>]): Uint8Array;
  encodeFunctionData(functionFragment: 'withdraw_collateral', values: [BigNumberish, AssetIdInput, Vec<Bytes>]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_account_value_and_total_collateral_value', values: [AddressInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_collateral_balance', values: [AddressInput, AssetIdInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_free_collateral', values: [AddressInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_free_collateral_by_token', values: [AddressInput, AssetIdInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_non_settlement_token_balance', values: [AddressInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'has_non_settlement_token', values: [AddressInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'is_allowed_collateral', values: [AssetIdInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'is_liquidatable', values: [AddressInput]): Uint8Array;

  decodeFunctionData(functionFragment: 'add_admin', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'add_collateral_configuration', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'deposit_collateral', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'liquidate_collateral', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'pause_trading', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'remove_admin', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'resume_trading', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'withdraw_all', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'withdraw_collateral', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_account_value_and_total_collateral_value', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_collateral_balance', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_free_collateral', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_free_collateral_by_token', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_non_settlement_token_balance', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'has_non_settlement_token', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'is_allowed_collateral', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'is_liquidatable', data: BytesLike): DecodedValue;
}

export class VaultAbi extends Contract {
  interface: VaultAbiInterface;
  functions: {
    add_admin: InvokeFunction<[address: AddressInput], void>;
    add_collateral_configuration: InvokeFunction<[asset_id: AssetIdInput, configuration: CollateralConfigurationInput], void>;
    deposit_collateral: InvokeFunction<[], void>;
    liquidate_collateral: InvokeFunction<[trader: AddressInput, token: AssetIdInput, settlement_amount: BigNumberish, price_update_data: Vec<Bytes>], BN>;
    pause_trading: InvokeFunction<[], void>;
    remove_admin: InvokeFunction<[address: AddressInput], void>;
    resume_trading: InvokeFunction<[], void>;
    withdraw_all: InvokeFunction<[token: AssetIdInput, price_update_data: Vec<Bytes>], BN>;
    withdraw_collateral: InvokeFunction<[amount: BigNumberish, token: AssetIdInput, price_update_data: Vec<Bytes>], void>;
    get_account_value_and_total_collateral_value: InvokeFunction<[trader: AddressInput], [I64Output, I64Output]>;
    get_collateral_balance: InvokeFunction<[trader: AddressInput, token: AssetIdInput], BN>;
    get_free_collateral: InvokeFunction<[trader: AddressInput], BN>;
    get_free_collateral_by_token: InvokeFunction<[trader: AddressInput, token: AssetIdInput], BN>;
    get_non_settlement_token_balance: InvokeFunction<[trader: AddressInput], BN>;
    has_non_settlement_token: InvokeFunction<[trader: AddressInput], boolean>;
    is_allowed_collateral: InvokeFunction<[token: AssetIdInput], boolean>;
    is_liquidatable: InvokeFunction<[trader: AddressInput], boolean>;
  };
}
