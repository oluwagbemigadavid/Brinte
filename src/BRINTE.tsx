import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts';
import { menuRoutes } from './utils';

type Props = {}

const BRINTE = (props: Props) => {
  return (
    <Router>
      <Routes>
        {menuRoutes.map(({ path, component: Component }, index) => (
          <Route key={index} path={path} element={
            <DefaultLayout>
              <Component />
            </DefaultLayout>
          } />
        ))}
      </Routes>
    </Router>
  );
}

export default BRINTE