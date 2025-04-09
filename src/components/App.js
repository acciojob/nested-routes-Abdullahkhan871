import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Women from './Women';

function App() {
  return (
    <BrowserRouter>
      <Layout> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/women" component={Women} />
          <Route exact path="/women/:id" component={Women} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
