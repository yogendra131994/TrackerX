import { atom } from 'recoil';

export const loadingTableData = atom<boolean>({
  key: 'loadingTableData',
  default: true,
});
