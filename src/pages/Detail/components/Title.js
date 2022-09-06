import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpFromBracket,
  faMedal,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import ReviewModal from './Modals/ReviewModal';
import MapModal from './MapModal';

function Title({
  handleSeeMoreReviews,
  handleXClickReviews,
  placeInfo,
  reviewModal,
  mapModal,
  handleSeeMoreMap,
  handleGoBackMap,
}) {
  return (
    <TitleContainer>
      <TitleName>{placeInfo.name}</TitleName>
      <TitleNav>
        <TitleNavLeft>
          <TitleRating>
            <Star src="./images/Detail/icons/star.png" />
            <Number>5.0</Number>
          </TitleRating>
          <TitleReviews onClick={handleSeeMoreReviews}>
            후기 <NumReview>{placeInfo.reviews.length}</NumReview>개
          </TitleReviews>
          {reviewModal === true && (
            <ReviewModal
              reviewsList={placeInfo.reviews}
              handleXClick={handleXClickReviews}
            />
          )}
          <TitleSuperHostContainer>
            <FontAwesomeIcon className="icon" icon={faMedal} />
            <Host>슈퍼호스트</Host>
          </TitleSuperHostContainer>
          <TitleLocation onClick={handleSeeMoreMap}>
            강남구, 서울, 한국
          </TitleLocation>
          {mapModal === true && <MapModal handleGoBackMap={handleGoBackMap} />}
        </TitleNavLeft>
        <TitleNavRight>
          <TitleShareContainer>
            <FontAwesomeIcon className="icon" icon={faArrowUpFromBracket} />
            <Share>공유하기</Share>
          </TitleShareContainer>
          <TitleSaveContainer>
            <FontAwesomeIcon className="icon" icon={faHeart} />
            <Save>저장</Save>
          </TitleSaveContainer>
        </TitleNavRight>
      </TitleNav>
    </TitleContainer>
  );
}

export default Title;

const TitleContainer = styled.div`
  width: 1120px;
  padding-top: 24px;
`;

const TitleName = styled.h1`
  margin-bottom: 4px;
  color: #222;
  font-size: 26px;
  font-weight: 500;
`;

const TitleNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1120px;
  height: 28px;
`;

const TitleNavLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;

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
  height: 12px;
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
`;

const NumReview = styled.span`
  font-weight: 500;
`;

const TitleSuperHostContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 18px;

  .icon {
    font-size: 12px;
    margin-right: 8px;
  }
`;

const Host = styled.span`
  font-size: 14px;
`;

const TitleLocation = styled(TitleReviews)`
  font-weight: 500;
`;

const TitleNavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
`;

const TitleShareContainer = styled(TitleSuperHostContainer)`
  margin: 0;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const Share = styled(TitleReviews)``;

const TitleSaveContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: #f7f7f7;
  }

  .icon {
    margin-right: 8px;
    font-size: 12px;
  }
`;

const Save = styled(Share)``;
