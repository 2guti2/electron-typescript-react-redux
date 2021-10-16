import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { decrement, increment } from './counterSlice';

export default function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex flex-col items-center">
        <button
          type="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="text-black w-full"
        >
          Increment
        </button>
        <div className="text-xl py-2">{count}</div>
        <button
          type="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="text-black w-full"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
