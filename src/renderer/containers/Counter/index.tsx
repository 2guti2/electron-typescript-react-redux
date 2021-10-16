import React, { ChangeEvent, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
} from './counterSlice';

export default function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [step, setStep] = useState(1);
  const onChangeStep = (event: ChangeEvent<HTMLInputElement>) =>
    setStep(+event.target.value);

  return (
    <div>
      <div className="flex flex-col items-center">
        <button
          type="button"
          aria-label="+1"
          onClick={() => dispatch(increment())}
          className="text-black w-full m-2"
        >
          +1
        </button>
        <button
          type="button"
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(step))}
          className="text-black w-full"
        >
          Increment by step
        </button>
        <div className="text-3xl py-2">{count}</div>
        <button
          type="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrementByAmount(step))}
          className="text-black w-full"
        >
          Decrement by step
        </button>
        <button
          type="button"
          aria-label="-1"
          onClick={() => dispatch(decrement())}
          className="text-black w-full m-2"
        >
          -1
        </button>
      </div>
      <div className="py-4 text-center">
        <label htmlFor="step">
          Step
          <br />
          <input
            className="text-black text-center"
            type="number"
            name="step"
            defaultValue={step}
            onChange={onChangeStep}
          />
        </label>
      </div>
    </div>
  );
}
