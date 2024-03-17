import { atom } from 'recoil';

export const multibarSelectedRangeState = atom<string>({
  key: 'multibarSelectedRangeState',
  default: '1w', // Set the initial value to null or a default range option
});

export const donutChartSelectedRangeState = atom<string>({
  key: 'donutChartSelectedRangeState',
  default: '1w', // Set the initial value to null or a default range option
});
