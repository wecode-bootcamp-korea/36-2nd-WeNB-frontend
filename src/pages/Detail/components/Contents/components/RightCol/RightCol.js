import React from 'react';
import styled from 'styled-components';

function RightCol() {
  return <ContentRightCol />;
}

export default RightCol;

const ContentRightCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 93px;
`;
