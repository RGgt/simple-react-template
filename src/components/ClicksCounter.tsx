import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter } from '../stores/MainSlice/reducer';
import { ApplicationState } from '../stores/index';

function ClicksCounter() {
  const count = useSelector((state: ApplicationState) => state.mainSlice.count);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(incrementCounter(1));
  };
  return (
    <>
      <button className="main-button" onClick={onClick}>
        Clicks: {count}{' '}
      </button>
    </>
  );
}

export { ClicksCounter };
