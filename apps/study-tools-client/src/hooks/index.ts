import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../store/config';
import { ThunkDispatch, Action } from '@reduxjs/toolkit';

// Custom hooks for dispatch and selector
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useThunkDispatch = () =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useDispatch<ThunkDispatch<RootState, unknown, Action<any>>>();
