import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import './App.scss';

const Error = () => <h2> 404 not found</h2>;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/:id" component={DetailsPage} exact /> */}
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
