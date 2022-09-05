import React from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import Photos from './components/Photos';
import Contents from './components/Contents/Contents';
import Reviews from './components/Reviews';
import Map from './components/Map';
import HostInfo from './components/HostInfo';
import Guidelines from './components/Guidelines';
import Nav from '../../../src/components/Nav/Nav';

const Detail = () => {
  return (
    <>
      <Nav />
      <DetailMainContainer>
        <DetailSubContainer>
          <Title />
          <Photos />
          <Contents />
          <Reviews />
          <Map />
          <HostInfo />
          <Guidelines />
        </DetailSubContainer>
      </DetailMainContainer>
    </>
  );
};

export default Detail;

const DetailMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #fff;
`;

const DetailSubContainer = styled.div`
  height: 100vh;
`;
