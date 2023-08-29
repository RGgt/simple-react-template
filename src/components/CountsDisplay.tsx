import { useSelector } from 'react-redux';
import { ApplicationState } from '../stores/index';

function CountsDisplay() {
  const count = useSelector((state: ApplicationState) => state.mainSlice.count);
  return <>Counts: {count}</>;
}
export { CountsDisplay };
