import React from 'react';
import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function ContentCalendar({ range, setRange, handleRemoveDays }) {
  return (
    <CalendarContainer>
      <CalendarTitleContainer>
        <CalendarTitle>체크인 날짜를 선택해주세요.</CalendarTitle>
        <CalendarTitleSub>
          여행 날짜를 입력하여 정확한 요금을 확인하세요.
        </CalendarTitleSub>
      </CalendarTitleContainer>
      <DayPicker
        defaultMonth={new Date(2022, 9)}
        numberOfMonths={2}
        mode="range"
        selected={range}
        onSelect={setRange}
      />
      <ModalBottomWrap>
        <RemoveDays onClick={handleRemoveDays}>날짜 지우기</RemoveDays>
      </ModalBottomWrap>
    </CalendarContainer>
  );
}

export default ContentCalendar;

const CalendarContainer = styled.div`
  height: 422px;
  padding: 48px 0;
`;

const CalendarTitleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
`;

const CalendarTitle = styled.h2`
  font-size: 22px;
  height: 26px;
  font-weight: 500;
`;

const CalendarTitleSub = styled.p`
  font-size: 14px;
  height: 36px;
  padding-top: 8px;
  color: rgb(113, 113, 113);
`;

const ModalBottomWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 20px;
`;

const RemoveDays = styled.p`
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;
