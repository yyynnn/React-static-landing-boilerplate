import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './Root.js';

export const routes = (
  <Route path="/" component={App}>
    <Route path="*" component={Root} />
  </Route>
);

export default routes;
