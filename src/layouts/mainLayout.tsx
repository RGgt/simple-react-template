import './mainLayout.css';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../stores';

export interface props {
  children?: React.ReactNode;
}
function MainLayout({ children }: props) {
  console.log('rendering main layout');
  return (
    <>
      <h1>Simple React Template</h1>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home Page</Link>
            </li>
            <li>
              <Link to={`/other`}>Other Page</Link>
            </li>
            <li>
              <a href={`/other`}>Other Page (reload)</a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="detail">
        <Provider store={store}>{children ?? <Outlet />}</Provider>
      </div>
    </>
  );
}

export { MainLayout };
