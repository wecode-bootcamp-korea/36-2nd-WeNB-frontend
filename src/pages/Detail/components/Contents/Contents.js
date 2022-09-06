import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LeftCol from './components/LeftCol/LeftCol';
import RightCol from './components/RightCol/RightCol';
import { isDateRange } from 'react-day-picker';
import { format } from 'date-fns';

function Contents({ placeInfo, placeId }) {
  const [checkIn, setCheckIn] = useState(false);
  const [checkOut, setCheckOut] = useState(false);
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);
  const [range, setRange] = useState(isDateRange);
  const [price, setPrice] = useState(false);
  const [numDays, setNumDays] = useState('');

  useEffect(() => {
    let footer = <p>예약가능한 첫째날을 Pick해주세요.</p>;
    if (range?.from) {
      if (!range.to) {
        footer = <p>{format(range.from, 'yyyy-MM-dd')}</p>;
      } else if (range.to) {
        footer = (
          <p>
            {format(range.from, 'yyyy-MM-dd')}-{format(range.to, 'yyyy-MM-dd')}
          </p>
        );
      }
    }
    if (footer.props.children.length === 10) {
      setCheckIn(footer.props.children);
    } else if (footer.props.children.length === 3) {
      setCheckOut(footer.props.children[2]);
      setCheckIn(footer.props.children[0]);
      setNumDays(
        footer.props.children[2].slice(-2) - footer.props.children[0].slice(-2)
      );
      setRightClicked(false);
      setLeftClicked(false);
      setPrice(true);
    } else if (footer.props.children.length === 20) {
      setCheckIn('날짜 추가');
      setCheckOut('날짜 추가');
    }
  }, [range]);

  const handleClicked = () => {
    setRightClicked(!rightClicked);
  };

  const handleCloseCalendar = () => {
    setRightClicked(!rightClicked);
  };

  const handleRemoveDays = () => {
    setRange('');
    setPrice(!price);
  };

  return (
    <ContentContainer>
      <LeftCol
        placeInfo={placeInfo}
        checkIn={checkIn}
        checkOut={checkOut}
        leftClicked={leftClicked}
        range={range}
        setRange={setRange}
        price={price}
        numDays={numDays}
        handleClicked={handleClicked}
        handleCloseCalendar={handleCloseCalendar}
        handleRemoveDays={handleRemoveDays}
      />
      <RightCol
        placeInfo={placeInfo}
        placeId={placeId}
        checkIn={checkIn}
        checkOut={checkOut}
        rightClicked={rightClicked}
        range={range}
        setRange={setRange}
        price={price}
        numDays={numDays}
        handleClicked={handleClicked}
        handleCloseCalendar={handleCloseCalendar}
        handleRemoveDays={handleRemoveDays}
      />
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
