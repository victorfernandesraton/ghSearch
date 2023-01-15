import React from "react";
import ReactDOM from "react-dom/client";

import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import App from "./App";

import "./index.scss";

const {VITE_GITHUB_TOKEN} = import.meta.env

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {

	const token = VITE_GITHUB_TOKEN 
	console.log(token);

  return {
    headers: {
      ...headers,
      authorization: token ?`Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
		<App />
		</ApolloProvider>
	</React.StrictMode>
);
