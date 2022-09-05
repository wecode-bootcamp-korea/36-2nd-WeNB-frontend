import React from 'react';
import styled from 'styled-components';
import LeftCol from './components/LeftCol/LeftCol';
import RightCol from './components/RightCol/RightCol';

function Contents() {
  return (
    <ContentContainer>
      <LeftCol />
      <RightCol />
    </ContentContainer>
  );
}

export default Contents;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  width: 1143px;
  height: 1500px;
`;
