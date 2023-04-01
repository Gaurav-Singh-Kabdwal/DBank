import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'compound' : () => Promise<undefined>,
  'deposit' : (arg_0: number) => Promise<undefined>,
  'getAmount' : () => Promise<number>,
  'withdraw' : (arg_0: number) => Promise<undefined>,
}
