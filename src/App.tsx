import React from 'react';
import './App.css';
import { ApolloClient, HttpLink, from, ApolloProvider, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SpaceCenterFlights from './components/SpaceCenterFlights';
import Home from './pages/Home.page';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }): void => alert(`Graphql error ${message}`));
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: process.env.REACT_APP_BASE_API_URI, headers: { "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}` } }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/spaceCenter/:spaceCenterId">
            <SpaceCenterFlights />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
