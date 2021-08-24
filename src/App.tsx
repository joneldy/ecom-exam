import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import './App.scss';

const Error = () => <h2> 404 not found</h2>;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/products/:id" component={ProductPage} exact />
          <Route path="/cart" component={CartPage} exact />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
