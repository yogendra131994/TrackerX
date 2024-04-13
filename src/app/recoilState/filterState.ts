import { DefaultValue, atom } from 'recoil';

export const categoryState = atom<string | null>({
  key: 'categoryState',
  default: null,
});

export const paymentModeState = atom<string | null>({
  key: 'paymentModeState',
  default: null,
});

export const amountRangeState = atom<number[] | null>({
  key: 'amountRangeState',
  default: null,
});

export const fromDateState = atom<Date | null>({
  key: 'fromDateState',
  default: null,
});

export const toDateState = atom<Date | null>({
  key: 'toDateState',
  default: null,
});

export const reqUrlState = atom<string>({
  key: 'reqUrlState',
  default: '',
});

export const resetAllAtoms = (set: any) => {
  set(categoryState, DefaultValue);
  set(paymentModeState, DefaultValue);
  set(amountRangeState, DefaultValue);
  set(fromDateState, DefaultValue);
  set(toDateState, DefaultValue);
  set(reqUrlState, DefaultValue);
};
