import { CountsDisplay } from '../components/CountsDisplay';
import { ClicksCounter } from '../components/ClicksCounter';

function HomePage() {
  return (
    <>
      <h2>Home Page</h2>
      <ClicksCounter></ClicksCounter>
      <br />
      <p>Click the button above to increment the counter</p>
      <CountsDisplay />
    </>
  );
}

export { HomePage };
