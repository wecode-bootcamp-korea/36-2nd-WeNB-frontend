import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faDoorOpen,
  faBanSmoking,
  faPaw,
  faBabyCarriage,
  faMagicWandSparkles,
  faCircleExclamation,
  faFire,
} from '@fortawesome/free-solid-svg-icons';

function Guidelines() {
  return (
    <GuidelineContainer>
      <GuidelineTitle>알아두어야 할 사항</GuidelineTitle>
      <GuidelineWrap>
        <UseGuideWrap>
          <GuideTitle>숙소 이용규칙</GuideTitle>
          {GUIDE_LIST.map(guide => (
            <Guide key={guide.id}>
              <FontAwesomeIcon className="guideIcon" icon={guide.icon} />
              <GuideText>{guide.text}</GuideText>
            </Guide>
          ))}
        </UseGuideWrap>
        <HealthSafetyWrap>
          <HealthSafetyTitle>건강과 안전</HealthSafetyTitle>
          {SAFETY_LIST.map(safety => (
            <Guide key={safety.id}>
              <FontAwesomeIcon className="guideIcon" icon={safety.icon} />
              <GuideText>{safety.text}</GuideText>
            </Guide>
          ))}
          <SeeMore>더 보기 {'>'}</SeeMore>
        </HealthSafetyWrap>
        <RefundWrap>
          <RefundTitle>환불 정책</RefundTitle>
          <GuideText>
            이 숙박에 대한 취소 세부 내역을 확인하려면 여행 날짜를 입력하세요.
          </GuideText>
          <SeeMore>날짜 추가 {'>'} </SeeMore>
        </RefundWrap>
      </GuidelineWrap>
    </GuidelineContainer>
  );
}

export default Guidelines;

const GuidelineContainer = styled.div`
  height: 253px;
  padding: 48px 0;
`;

const GuidelineTitle = styled.h2`
  margin-bottom: 25px;
  font-size: 22px;
  font-weight: 500;
`;

const GuidelineWrap = styled.div`
  display: flex;
  height: 203px;
  justify-content: flex-start;
`;

const UseGuideWrap = styled.div`
  width: 33%;
  height: 100%;
`;

const HealthSafetyWrap = styled(UseGuideWrap)``;

const RefundWrap = styled(UseGuideWrap)``;

const Guide = styled.div`
  display: flex;
  align-items: flex-start;
  height: 20px;
  margin-bottom: 15px;

  .guideIcon {
    margin-right: 12px;
    font-size: 14px;
    position: relative;
  }
`;

const GuideTitle = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
`;

const GuideText = styled(GuideTitle)`
  max-width: 300px;
  color: rgb(113, 113, 113);
`;

const HealthSafetyTitle = styled(GuideTitle)``;

const SeeMore = styled.p`
  margin-top: 24px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;

const RefundTitle = styled(GuideTitle)``;

const GUIDE_LIST = [
  { id: 1, icon: faClock, text: '체크인: 오후 4:00 이후' },
  { id: 2, icon: faDoorOpen, text: '키패드로 셀프 체크인' },
  { id: 3, icon: faBanSmoking, text: '흡연 금지' },
  { id: 4, icon: faPaw, text: '반련동물 동반 가능' },
  { id: 5, icon: faBabyCarriage, text: '어린이와 유아에게 적합함' },
];

const SAFETY_LIST = [
  {
    id: 1,
    icon: faMagicWandSparkles,
    text: '코로나19 방역 수칙을 준수하셔야 합니다.',
  },
  { id: 2, icon: faCircleExclamation, text: '일산화탄소 경보기 없음' },
  { id: 3, icon: faFire, text: '화재경보기' },
];
