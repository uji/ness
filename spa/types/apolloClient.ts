import ApolloClient from 'apollo-boost'

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/query',
  // uri: 'https://55m2930t23.execute-api.ap-northeast-1.amazonaws.com/prod/query',
  request: (operation) => {
    const idToken = localStorage.getItem('idToken')
    operation.setContext({
      headers: {
        authorization: idToken ? `Bearer ${idToken}` : '',
      },
    })
  },
})
