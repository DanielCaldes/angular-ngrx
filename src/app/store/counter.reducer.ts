import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export interface CounterState {
  value: number;
}

export const initialState: CounterState = {
  value: 0
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, { amount }) => ({ ...state, value: state.value + amount })),
  on(decrement, (state, { amount }) => ({ ...state, value: state.value - amount })),
  on(reset, (state) => ({ ...state, value: initialState.value }))
);