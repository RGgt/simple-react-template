import './App.css';
import { ClicksCounter } from './components/ClicksCounter';
import { CountsDisplay } from './components/CountsDisplay';
import { Provider } from 'react-redux';
import { store } from './stores';

function App() {
  console.log('rendering main layout');
  return (
    <>
      <h1>Simple React Template</h1>
      <Provider store={store}>
        <ClicksCounter></ClicksCounter>
        <br />
        <p>Click the button above to increment the counter</p>
        <CountsDisplay />
      </Provider>
    </>
  );
}

export { App };
