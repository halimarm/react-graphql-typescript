import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { ApolloProvider } from '@apollo/client'
import { client } from './utils/graphql'

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App