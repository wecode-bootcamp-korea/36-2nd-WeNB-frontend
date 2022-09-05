import React from 'react';
import styled from 'styled-components';
import ContentHomeBasicInfo from './components/ContentHomeBasicInfo';
import ContentAmenitiesInfo from './components/ContentAmenitiesInfo';
import ContentWeCoverInfo from './components/ContentWeCoverInfo';
import ContentTitleInfo from './components/ContentTitleInfo';
import ContentCalendar from './components/ContentCalendar';

function LeftCol() {
  return (
    <ContentLeftCol>
      <ContentTitleInfo />
      <ContentHomeBasicInfo />
      <ContentWeCoverInfo />
      <ContentAmenitiesInfo />
      <ContentCalendar />
    </ContentLeftCol>
  );
}

export default LeftCol;

const ContentLeftCol = styled.div`
  display: flex;
  flex-direction: column;
`;
