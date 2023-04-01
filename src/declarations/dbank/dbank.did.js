export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'compound' : IDL.Func([], [], ['oneway']),
    'deposit' : IDL.Func([IDL.Float64], [], ['oneway']),
    'getAmount' : IDL.Func([], [IDL.Float64], ['query']),
    'withdraw' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
