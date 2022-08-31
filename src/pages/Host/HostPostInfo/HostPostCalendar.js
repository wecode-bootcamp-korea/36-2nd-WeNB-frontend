import React, { useState } from 'react';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { isDateRange, DayPicker } from 'react-day-picker';
import styled from 'styled-components';

const pastMonth = new Date();

function HostPostCalendar() {
  const [range, setRange] = useState(isDateRange);
  console.log(range);
  let footer = <p>예약가능한 첫째날을 Pick해주세요.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      );
    }
  }

  return (
    <>
      <HostPostCalendarContainer>
        <HostPostCalendarContainerTitle>
          예약가능한 기간을 정해주세요.
        </HostPostCalendarContainerTitle>
      </HostPostCalendarContainer>
      <DayPicker
        mode="range"
        defaultMonth={pastMonth}
        selected={range}
        footer={footer}
        onSelect={setRange}
      />
      <label>
        최대 숙박 가능일
        <input type="text" />
      </label>
    </>
  );
}

export default HostPostCalendar;

const HostPostCalendarContainer = styled.div`
  width: 500px;
  margin-top: 50px;
`;

const HostPostCalendarContainerTitle = styled.h2`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0px 30px 0px;
`;
