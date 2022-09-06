import React from 'react';
import styled from 'styled-components';
import ContentHomeBasicInfo from './components/ContentHomeBasicInfo';
import ContentAmenitiesInfo from './components/ContentAmenitiesInfo';
import ContentWeCoverInfo from './components/ContentWeCoverInfo';
import ContentTitleInfo from './components/ContentTitleInfo';
import ContentCalendar from './components/ContentCalendar';

function LeftCol({ placeInfo, range, setRange, handleRemoveDays }) {
  return (
    <ContentLeftCol>
      <ContentTitleInfo />
      <ContentHomeBasicInfo />
      <ContentWeCoverInfo />
      <ContentAmenitiesInfo amenities={placeInfo.amenities} />
      <ContentCalendar
        range={range}
        setRange={setRange}
        handleRemoveDays={handleRemoveDays}
      />
    </ContentLeftCol>
  );
}

export default LeftCol;

const ContentLeftCol = styled.div`
  display: flex;
  flex-direction: column;
`;
