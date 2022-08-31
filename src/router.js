import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Host from './pages/Host/Host';

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Host" element={<Host />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default Router;
