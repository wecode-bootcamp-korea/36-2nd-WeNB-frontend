import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Host from './pages/Host/Host';
import KakaoLoding from './components/Login/components/KakaoLoding';
import HostPostInfo from './pages/Host/HostPostInfo/HostPostInfo';
import HostPostFacility from './pages/Host/HostPostFacility/HostPostFacility';
import HostPostImage from './pages/Host/HostPostImage/HostPostImage';

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Host" element={<Host />} />
          <Route path="/kakao" element={<KakaoLoding />} />
          <Route path="/HostPostInfo" element={<HostPostInfo />} />
          <Route path="/HostPostFacility" element={<HostPostFacility />} />
          <Route path="/HostPostImage" element={<HostPostImage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default Router;
