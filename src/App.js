import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Routess from './routes.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routess />
    </QueryClientProvider>
  );
}

export default App;
