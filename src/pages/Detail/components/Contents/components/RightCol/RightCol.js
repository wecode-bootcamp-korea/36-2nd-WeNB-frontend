import React from 'react';
import styled from 'styled-components';
import CalendarModal from './CalendarModal';

function RightCol({
  placeInfo,
  placeId,
  checkIn,
  checkOut,
  rightClicked,
  range,
  setRange,
  price,
  numDays,
  handleClicked,
  handleCloseCalendar,
  handleRemoveDays,
}) {
  const onPostReservation = () => {
    fetch(`http://10.58.4.165:3000/place/reservation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 5,
        placeId: placeId,
        guestNumber: 2,
        availableFrom: checkIn,
        availableUntil: checkOut,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'SUCCESS_RESERVATION') {
          alert('숙소 예약이 완료됐습니다.');
        } else {
          alert('숙소 예약이 실패하였습니다.');
        }
      });
  };
  return (
    <ContentRightCol>
      <ReservationContainer>
        <ReservationWrap price={price}>
          <ReservationTitleWrap>
            <ReservationTitle>
              요금을 확인하려면 날짜를 입력하세요.
            </ReservationTitle>
          </ReservationTitleWrap>
          <TitleNavLeft>
            <TitleRating>
              <Star src="./images/Detail/icons/star.png" />
              <Number>5.0 &nbsp;·</Number>
            </TitleRating>
            <TitleReviews>
              후기 <NumReview>{placeInfo.reviews.length}</NumReview>개
            </TitleReviews>
          </TitleNavLeft>
          <ReservationCalendarWrap>
            <CalendarButton onClick={handleClicked}>
              <CheckInBox>
                <CheckInWrap>
                  <CheckIn>체크인</CheckIn>
                  <AddDays>{checkIn ? checkIn : '날짜 추가'}</AddDays>
                </CheckInWrap>
              </CheckInBox>
              <CheckOutBox>
                <CheckInWrap>
                  <CheckIn>체크아웃</CheckIn>
                  <AddDays>{checkOut ? checkOut : '날짜 추가'}</AddDays>
                </CheckInWrap>
              </CheckOutBox>
            </CalendarButton>
            {rightClicked && (
              <CalendarModal
                rightClicked={rightClicked}
                range={range}
                checkIn={checkIn}
                checkOut={checkOut}
                setRange={setRange}
                handleCloseCalendar={handleCloseCalendar}
                handleRemoveDays={handleRemoveDays}
              />
            )}
            <ReservationButton onClick={onPostReservation}>
              {checkIn === '날짜 추가' ? '예약 가능 여부 보기' : '예약하기'}
            </ReservationButton>
            {price === true && (
              <PriceInfoWrap>
                <PriceInfo>
                  <LengthOfDays>
                    ₩{placeInfo.price} x {numDays}박
                  </LengthOfDays>
                  <Price>₩{placeInfo.price * numDays}</Price>
                </PriceInfo>
                <PriceInfo>
                  <LengthOfDays>청소비</LengthOfDays>
                  <Price>₩25,000</Price>
                </PriceInfo>
                <PriceInfo>
                  <LengthOfDays>수수료</LengthOfDays>
                  <Price>₩{placeInfo.price * numDays * 0.15}</Price>
                </PriceInfo>
                <PriceInfo>
                  <LengthOfDays>총 합계</LengthOfDays>
                  <Price>
                    ₩
                    {placeInfo.price * numDays +
                      25000 +
                      placeInfo.price * numDays * 0.15}
                  </Price>
                </PriceInfo>
              </PriceInfoWrap>
            )}
          </ReservationCalendarWrap>
        </ReservationWrap>
      </ReservationContainer>
    </ContentRightCol>
  );
}

export default RightCol;

const ContentRightCol = styled.div`
  margin-left: 93px;
  display: flex;
  flex-direction: column;
`;

const ReservationContainer = styled.div`
  height: 450px;
  padding-top: 50px;
  position: sticky;
  top: 80px;
  z-index: 10;
`;

const ReservationWrap = styled.div`
  height: ${props => (props.price ? '450px' : '280px')};
  border: 0.8px solid #95a5a6;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  padding: 24px;
  overflow: hidden;
`;

const ReservationTitleWrap = styled.div`
  width: 70%;
  height: 52px;
`;

const ReservationTitle = styled.p`
  font-size: 20px;
  font-weight: 350;
  line-height: 25px;
  color: #222;
`;

const TitleNavLeft = styled.div`
  margin: 5px 0 20px 0;
  height: 18px;
  display: flex;
  align-items: center;

  justify-content: flex-start;
`;

const TitleRating = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Star = styled.img`
  height: 12px;
  position: relative;
  bottom: 1px;
  margin-right: 5px;
`;

const Number = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const TitleReviews = styled.span`
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 8px;
  color: rgb(113, 113, 113);
`;

const NumReview = styled.span`
  font-weight: 500;
  color: rgb(113, 113, 113);
`;

const ReservationCalendarWrap = styled.div`
  width: 100%;
  height: 60px;
`;

const CalendarButton = styled.button`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0;
  background-color: white;
  border-radius: 10px;
  border: ${props =>
    props.clicked ? '2px solid black' : '0.5px solid #95a5a6'};
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

const AddDays = styled.p`
  color: rgb(113, 113, 113);
  font-size: 14px;
`;

const CheckInWrap = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;

const ReservationButton = styled.button`
  width: 314.6px;
  height: 48px;
  margin: 20px 0 40px 0;
  color: #fff;
  background: #f8315a;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(0.99);
  }
`;

const PriceInfoWrap = styled.div`
  width: 314.6px;
  height: 128px;
`;

const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20px;
  margin-bottom: 20px;
  &:last-child {
    padding-top: 20px;
    border-top: 0.8px solid #95a5a6;
  }
`;

const LengthOfDays = styled.p`
  color: rgb(113, 113, 113);
  text-decoration: underline;
`;

const Price = styled.p`
  color: rgb(113, 113, 113);
`;
