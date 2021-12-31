import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useDispatch } from 'react-redux';
import { ReactQueryDevtools } from 'react-query/devtools';

//Components
import Header from './components/Header';
import Home from './components/Home';
import CharacterPage from './components/CharacterPage';
import PopularPage from './components/PopularPage';

// Styles
import { GlobalStyle } from './GlobalStyle';
import './App.css';

//actions
import { getQuotables } from './redux/actions';

const queryClient = new QueryClient({
  defaultOptions: {
    retry: 3,
    useErrorBoundary: true,
    refetchOnWindowFocus: false
  },
});

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuotables());
  },[dispatch]);

  return (
      <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/:charId' element={<CharacterPage />} />
          <Route path='/popular' exact element={<PopularPage />} />
        </Routes>
        <GlobalStyle />
      </Router>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
    )
};

export default App;
