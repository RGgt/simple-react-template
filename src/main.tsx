import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './App';
import { RouterProvider } from 'react-router-dom';

import { createRouter } from './routes/routerBuilder';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={createRouter()} />
  </React.StrictMode>,
);

postMessage({ payload: 'removeLoading' }, '*');
