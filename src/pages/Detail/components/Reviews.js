import React from 'react';
import styled from 'styled-components';
import ReviewModal from './Modals/ReviewModal';

function Reviews({
  placeInfo,
  reviewModal,
  handleSeeMoreReviews,
  handleXClickReviews,
}) {
  return (
    <ReviewsContainer>
      <ReviewsTitle>
        <TitleNavLeft>
          <TitleRating>
            <Star src="/images/Detail/icons/star.png" />
            <Number>5.0 &nbsp;&nbsp;·</Number>
          </TitleRating>
          <TitleReviews>
            후기 <NumReview>{placeInfo.reviews.length}</NumReview>개
          </TitleReviews>
        </TitleNavLeft>
      </ReviewsTitle>
      <ReviewsRating>
        <RatingContainer>
          <RatingLeft>
            {RATING_NAMES_LEFT.map(rating => (
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
          <RatingRight>
            {RATING_NAMES_RIGHT.map(rating => (
              <Ratings key={rating.id}>
                <RatingName>{rating.name}</RatingName>
                <RatingBar>
                  <FullBar />
                  <RateBar />
                  <RateNumber>5.0</RateNumber>
                </RatingBar>
              </Ratings>
            ))}
          </RatingRight>
        </RatingContainer>
      </ReviewsRating>
      <ReviewsContent>
        {placeInfo.reviews.map(review => (
          <ReviewContainer key={review.rate}>
            <ReviewInnerContainer>
              <ReviewContentContainer>
                <ReviewContentTitle>
                  <ReviewUser src="/images/Detail/hostProfile.jpg" />
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
      </ReviewsContent>
      <ReviewBottom>
        <ReviewInputWrap>
          <ReviewInput type="text" placeholder="리뷰 남기기..." />
          <ReviewSubmitButton>게시</ReviewSubmitButton>
        </ReviewInputWrap>
        <SeeMore onClick={handleSeeMoreReviews}>
          <span>리뷰 모두 보기</span>
        </SeeMore>
        {reviewModal === true && (
          <ReviewModal
            handleXClickReviews={handleXClickReviews}
            reviewsList={placeInfo.reviews}
          />
        )}
      </ReviewBottom>
    </ReviewsContainer>
  );
}

export default Reviews;

const ReviewsContainer = styled.div`
  width: 1143px;
  height: 630px;
  padding-top: 48px;
  border-top: 0.8px solid #95a5a6;
  border-bottom: 0.8px solid #95a5a6;
  z-index: 1;
`;

const ReviewsTitle = styled.div`
  width: 100%;
  height: 26px;
  margin-bottom: 32px;
`;

const TitleNavLeft = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > * {
    margin-right: 10px;
  }
`;

const TitleRating = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Star = styled.img`
  height: 16px;
  position: relative;
  bottom: 2px;
  margin-right: 5px;
`;

const Number = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const TitleReviews = styled.span`
  font-size: 20px;
  letter-spacing: -0.5px;
`;

const NumReview = styled.span`
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const ReviewsRating = styled.div`
  height: 108px;
  margin-bottom: 24px;
`;

const RatingContainer = styled.div`
  width: 100%;
  display: flex;
`;

const RatingLeft = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 100px;
`;

const RatingRight = styled(RatingLeft)``;

const Ratings = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const RatingName = styled.p`
  color: rgb(113, 113, 113);
  font-size: 16px;
  font-weight: 350;
  line-height: 20px;
`;

const RatingBar = styled.div`
  width: 170px;
  height: 16px;
  display: flex;
  align-items: center;
`;

const FullBar = styled.div`
  position: relative;
  width: 122px;
  height: 3px;
  border: 0.5px solid #222;
  border-radius: 4px;
`;

const RateBar = styled(FullBar)`
  position: absolute;
  width: 122px;
  background-color: #222;
`;

const RateNumber = styled.span`
  margin-left: 10px;
  font-size: 12px;
  font-weight: 600;
`;

const ReviewsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 392px;
  border-bottom: 0.8px solid #95a5a6;
  overflow: hidden;
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  margin-bottom: 16px;
`;

const ReviewUser = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const ReviewUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 66.87px;
  height: 40px;
  margin-left: 12px;
`;

const ReviewUserName = styled.p`
  margin-bottom: 3px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const ReviewDate = styled.p`
  color: rgb(113, 113, 113);
  font-size: 14px;
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
  width: 450px;
  color: #222;
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;
  overflow: hidden;
`;

const ReviewInputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 47px;
`;

const ReviewInput = styled.input`
  width: 50%;
  height: 25px;
  padding: 5px 10px;
  border: 1px solid white;

  &::-webkit-input-placeholder {
    color: rgb(200, 200, 200);
  }

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }

  &:focus {
    outline: none;
  }
`;

const ReviewSubmitButton = styled.button`
  margin-left: 5px;
  padding: 10px;
  color: #222;
  background-color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const ReviewBottom = styled.div`
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SeeMore = styled.p`
  width: 120px;
  padding-left: 10px;
  color: #222;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const RATING_NAMES_LEFT = [
  { id: 1, name: '청결도' },
  { id: 2, name: '의사소통' },
  { id: 3, name: '체크인' },
];

const RATING_NAMES_RIGHT = [
  { id: 1, name: '정확성' },
  { id: 2, name: '위치' },
  { id: 3, name: '가격 대비 만족도' },
];
