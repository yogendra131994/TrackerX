import { atom } from 'recoil';

export const multibarSelectedRangeState = atom<string>({
  key: 'multibarSelectedRangeState',
  default: '1w', // Set the initial value to null or a default range option
});

export const donutChartSelectedRangeState = atom<string>({
  key: 'donutChartSelectedRangeState',
  default: '1w', // Set the initial value to null or a default range option
});

export const windowDimensions = atom<Object>({
  key: 'windowDimensions',
  default: { width: 0, height: 0 }, // Set the initial value to null or a default range option
});
