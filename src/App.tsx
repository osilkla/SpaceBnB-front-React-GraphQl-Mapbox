import React from 'react';
import SpaceCenterList from './components/SpaceCenterList';
import './App.css';
  import { ApolloClient, HttpLink, from, ApolloProvider, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error'
import { BASE_API_URI,API_KEY } from './conf'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const errorLink = onError(({ graphQLErrors}) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message}):void => alert(`Graphql error ${message}`));      
    }
  });
  
  const link = from([
    errorLink,
    new HttpLink({ uri: BASE_API_URI, headers:{"Authorization": `Bearer ${API_KEY}` }}),
  ]);
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

  return (    
     <Router>
      <ApolloProvider client={client}>
          <Switch>
          <Route path="/:id">
            <div>test route slug redirection</div>
          </Route>
          <Route path="/">
            <SpaceCenterList/>
          </Route>
        </Switch>
      </ApolloProvider>     
   </Router>
  );
}

export default App;
