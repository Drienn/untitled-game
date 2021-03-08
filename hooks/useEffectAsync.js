/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

export function useEffectAsync(effect, inputs) {
  useEffect(() => {
    effect();
  }, inputs);
}
