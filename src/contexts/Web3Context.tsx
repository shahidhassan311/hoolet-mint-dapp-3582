import { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

export interface ProviderContextInterface {
  provider: any;
  setProvider: Dispatch<SetStateAction<any>>;
}

const defaultState = {
  provider: window?.solana ? window?.solana : '',
  setProvider: (p: any) => {},
} as ProviderContextInterface;

export const ProviderContext = createContext(defaultState);


export interface SignerContextInterface {
  signer: any;
  setSigner: Dispatch<SetStateAction<any>>;
}

const defaultStateS = {
  signer: '',
  setSigner: (p: any) => {},
} as SignerContextInterface;

export const SignerContext = createContext(defaultStateS);

export interface ConnectedContextInterface {
  connected: boolean;
  setConnected: Dispatch<SetStateAction<boolean>>;
}

const defaultStateB = {
  connected: false,
  setConnected: (p: boolean) => {},
} as ConnectedContextInterface;

export const ConnectedContext = createContext(defaultStateB);
