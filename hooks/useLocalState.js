import { useReducer } from 'react';

export const reducer = (state, payload) => (payload ? { ...state, ...payload } : state);
export const useLocalState = (initialState) => useReducer(reducer, initialState);

export default useLocalState;
