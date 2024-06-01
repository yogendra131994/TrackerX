import { loadingTableData } from '@/app/recoilState/loading';
import { useRecoilValue } from 'recoil';

export function CircularProgressComponent() {
  const loadingData = useRecoilValue(loadingTableData);
  return (
    loadingData && (
      <div className="flex w-full h-full items-center justify-center">
        {/* <CircularProgress /> */}
      </div>
    )
  );
}
