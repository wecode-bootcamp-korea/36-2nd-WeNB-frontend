import React from 'react';
import styled from 'styled-components';

function ReviewModal({ reviewsList, handleXClickReviews }) {
  return (
    <ModalContainer>
      <ModalTitleContainer>
        <XMark
          onClick={handleXClickReviews}
          src="./images/Detail/icons/xMark.png"
        />
      </ModalTitleContainer>
      <ModalOuterWrap>
        <ModalRatingsWrap>
          <ModalRatingInnerWrap>
            <ModalRatingTitle>
              <TitleNavLeft>
                <TitleRating>
                  <Star src="./images/Detail/icons/star.png" />
                  <Number>5.0 &nbsp;·</Number>
                </TitleRating>
                <TitleReviews>
                  후기 <NumReview>824</NumReview>개
                </TitleReviews>
              </TitleNavLeft>
            </ModalRatingTitle>
            <ModalRatingBars>
              <RatingLeft>
                {RATING_NAMES.map(rating => (
                  <Ratings key={rating.id}>
                    <RatingName>{rating.name}</RatingName>
                    <RatingBar>
                      <FullBar />
                      <RateBar />
                      <RateNumber>5.0</RateNumber>
                    </RatingBar>
                  </Ratings>
                ))}
              </RatingLeft>
            </ModalRatingBars>
          </ModalRatingInnerWrap>
        </ModalRatingsWrap>
        <ModalReviewsWrap>
          <ModalReviewsInnerWrap>
            {reviewsList.map(review => (
              <ReviewContainer key={review.rate}>
                <ReviewInnerContainer>
                  <ReviewContentContainer>
                    <ReviewContentTitle>
                      <ReviewUser src="./images/Detail/uniyul.jpg" />
                      <ReviewUserInfo>
                        <ReviewUserName>Anonymous</ReviewUserName>
                        <ReviewDate>2022년 9월</ReviewDate>
                      </ReviewUserInfo>
                    </ReviewContentTitle>
                    <ReviewUserContent>
                      <UserContentContainer>
                        <UserContent>{review.comment}</UserContent>
                      </UserContentContainer>
                    </ReviewUserContent>
                  </ReviewContentContainer>
                </ReviewInnerContainer>
                <ReviewContainer />
              </ReviewContainer>
            ))}
          </ModalReviewsInnerWrap>
        </ModalReviewsWrap>
      </ModalOuterWrap>
    </ModalContainer>
  );
}

export default ReviewModal;

const ModalContainer = styled.div`
  position: absolute;
  width: 1032px;
  height: 884px;
  left: 50%;
  top: 2600px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

const ModalTitleContainer = styled.div`
  width: 100%;
  height: 72px;
`;

const XMark = styled.img`
  width: 12px;
  height: 12px;
  padding: 32px 0 0 32px;
  cursor: pointer;
`;

const ModalOuterWrap = styled.div`
  width: 984px;
  height: 812px;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 40% 60%;
`;

const ModalRatingsWrap = styled.div`
  width: 416px;
  height: 100%;
`;

const ModalRatingInnerWrap = styled.div`
  width: 333px;
  height: 100%;
  padding: 0 8px;
  margin-right: 83px;
`;

const ModalRatingTitle = styled.div`
  height: 36px;
  padding-bottom: 40px;
`;

const TitleNavLeft = styled.div`
  display: flex;
  height: 24px;
  align-items: center;
  justify-content: flex-start;

  > * {
    margin-right: 10px;
  }
`;

const TitleRating = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Star = styled.img`
  position: relative;
  height: 24px;
  bottom: 3px;
  margin-right: 10px;
`;

const Number = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const TitleReviews = styled.span`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const NumReview = styled.span`
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const ModalRatingBars = styled.div`
  height: 200px;
`;

const RatingLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Ratings = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const RatingName = styled.p`
  font-size: 16px;
  font-weight: 350;
  line-height: 20px;
  color: #222;
`;

const RatingBar = styled.div`
  width: 170px;
  height: 16px;
  display: flex;
  align-items: center;
`;
const RateNumber = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin-left: 10px;
`;

const FullBar = styled.div`
  width: 122px;
  height: 3px;
  border: 0.5px solid #222;
  border-radius: 4px;
  position: relative;
`;

const RateBar = styled(FullBar)`
  width: 122px;
  background-color: #222;
  position: absolute;
`;
const ModalReviewsWrap = styled.div`
  width: 583px;
  height: 780px;
`;

const ModalReviewsInnerWrap = styled.div`
  height: 100%;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const ReviewContainer = styled.div`
  width: 50%;
  height: 196px;
`;

const ReviewInnerContainer = styled.div`
  width: 80%;
  height: 100%;
`;

const ReviewContentContainer = styled.div`
  height: 156px;
  margin-bottom: 40px;
`;

const ReviewContentTitle = styled.div`
  height: 40px;
  margin-bottom: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ReviewUser = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const ReviewUserInfo = styled.div`
  width: 66.87px;
  height: 40px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ReviewUserName = styled.p`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 3px;
`;

const ReviewDate = styled.p`
  font-size: 14px;
  color: rgb(113, 113, 113);
`;

const ReviewUserContent = styled.div`
  width: 100%;
  height: 100px;
`;

const UserContentContainer = styled.div`
  width: 100%;
  height: 72px;
`;

const UserContent = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #222;
  font-weight: 350;
  width: 450px;
  overflow: hidden;
`;

const RATING_NAMES = [
  { id: 1, name: '청결도' },
  { id: 2, name: '정확성' },
  { id: 3, name: '의사소통' },
  { id: 4, name: '위치' },
  { id: 5, name: '체크인' },
  { id: 6, name: '가격 대비 만족도' },
];
