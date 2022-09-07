import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Host from './pages/Host/Host';
import KakaoLoding from './components/Login/components/KakaoLoding';
import HostPostInfo from './pages/Host/HostPostInfo/HostPostInfo';
import HostFacilities from './pages/Host/HostFacilities/HostFacilities';
import HostPostImage from './pages/Host/HostPostImage/HostPostImage';

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/Host" element={<Host />} />
          <Route path="/HostPostInfo" element={<HostPostInfo />} />
          <Route
            path="/HostPostFacility/:placeID"
            element={<HostFacilities />}
          />
          <Route path="/HostPostImage/:placeID" element={<HostPostImage />} />
          <Route path="/kakao" element={<KakaoLoding />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default Router;
