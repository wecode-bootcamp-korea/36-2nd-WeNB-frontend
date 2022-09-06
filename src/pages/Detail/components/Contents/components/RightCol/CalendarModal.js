import React from 'react';
import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function CalendarModal({
  rightClicked,
  range,
  checkIn,
  checkOut,
  setRange,
  handleCloseCalendar,
  handleRemoveDays,
}) {
  return (
    <ModalContainer>
      <ModalTitleContainer>
        <ModalTitleWrap>
          <ModalTitle>날짜 선택</ModalTitle>
          <TitleDescription>
            여행 날짜를 입력하여 정확한 요금을 확인하세요.
          </TitleDescription>
        </ModalTitleWrap>
        <CalendarButton onClick={rightClicked}>
          <CheckInBox>
            <CheckInWrap>
              <CheckIn>체크인</CheckIn>
              <AddDays
                type="text"
                placeholder={range ? checkIn : '날짜 추가'}
              />
            </CheckInWrap>
          </CheckInBox>
          <CheckOutBox>
            <CheckInWrap>
              <CheckIn>체크아웃</CheckIn>
              <AddDays
                type="text"
                placeholder={checkOut ? checkOut : '날짜 추가'}
              />
            </CheckInWrap>
          </CheckOutBox>
        </CalendarButton>
      </ModalTitleContainer>
      <DayPicker
        defaultMonth={new Date(2022, 9)}
        numberOfMonths={2}
        mode="range"
        selected={range}
        onSelect={setRange}
      />
      <ModalBottomWrap>
        <RemoveDays onClick={handleRemoveDays}>날짜 지우기</RemoveDays>
        <CloseModal onClick={handleCloseCalendar}>닫기</CloseModal>
      </ModalBottomWrap>
    </ModalContainer>
  );
}

export default CalendarModal;

const ModalContainer = styled.div`
  position: absolute;
  width: 597px;
  height: 469px;
  left: 20%;
  top: 400px;
  padding: 24px 32px 16px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

const ModalTitleContainer = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  justify-content: space-between;

  .calendar {
    width: 200px;
  }
`;

const ModalTitleWrap = styled.div`
  width: 50%;
`;

const ModalTitle = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
`;

const TitleDescription = styled.p`
  font-size: 14px;
  color: rgb(113, 113, 113);
  width: 200px;
  line-height: 20px;
  letter-spacing: 0.5px;
`;

const CalendarButton = styled.button`
  display: flex;
  width: 50%;
  height: 60px;
  padding: 0;
  background-color: white;
  border-radius: 10px;
  border: ${props =>
    props.rightClicked ? '2px solid black' : '0.5px solid #95a5a6'};
  cursor: pointer;
`;

const CheckInBox = styled.div`
  width: 50%;
  height: 100%;
  border: 0.5px solid #95a5a6;
  border: ${props =>
    props.clicked ? '1px solid black' : '0.5px solid #95a5a6'};
  border-radius: 10px 0 0 10px;
  text-align: left;
`;

const CheckOutBox = styled.div`
  width: 50%;
  height: 100%;
  border: 0.5px solid #95a5a6;
  border: ${props =>
    props.clicked ? '1px solid black' : '0.5px solid #95a5a6'};
  border-radius: 0 10px 10px 0;
  text-align: left;
`;

const CheckIn = styled.p`
  margin-bottom: 3px;
  font-size: 10px;
  font-weight: 600;
`;

const AddDays = styled.input`
  width: 130px;
  margin-top: 2px;
  padding: 5px 0;
  color: rgb(113, 113, 113);
  border: none;
  font-size: 14px;
`;

const CheckInWrap = styled.div`
  margin-top: 10px;
  margin-left: 10px;
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

const CloseModal = styled(RemoveDays)`
  margin-left: 20px;
  text-decoration: underline;
  cursor: pointer;
`;
