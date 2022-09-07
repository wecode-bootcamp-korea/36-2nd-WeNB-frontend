import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

function HostInfo({ placeInfo }) {
  return (
    <HostInfoContainer>
      <HostInfoTitle>
        <HostInfoProfile
          src="/images/Detail/hostProfile.jpg"
          alt="userProfile"
        />
        <HostInfoName>
          <HostName>호스트: Uniyul님</HostName>
          <MemberSince>회원 가입일: 2022년 1월</MemberSince>
        </HostInfoName>
      </HostInfoTitle>
      <HostInfoContent>
        <HostDescription>
          <HostDescriptionNav>
            <HostRating>
              <HostStar src="/images/Detail/icons/star.png" alt="star" />
              <NumberRatings>후기 {placeInfo.reviews.length}개</NumberRatings>
            </HostRating>
            <HostRating>
              <FontAwesomeIcon className="medalIcon" icon={faMedal} />
              <NumberRatings>슈퍼호스트</NumberRatings>
            </HostRating>
          </HostDescriptionNav>
          <HostDescriptionContent>
            <ContentMain>Freely & Happily</ContentMain>
            <ContentTitle>Uniyul님은 슈퍼호스트입니다.</ContentTitle>
            <ContentMain>
              슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서
              편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
            </ContentMain>
          </HostDescriptionContent>
        </HostDescription>
        <ContactHost>
          <Responsiveness>
            <RespondPercentage>응답률: 100%</RespondPercentage>
            <RespondTime>응답 시간: 1시간 이내</RespondTime>
          </Responsiveness>
          <ContactButtonWrap>
            <ContactButton>호스트에게 연락하기</ContactButton>
          </ContactButtonWrap>
          <SafetyGuideWrap>
            <FontAwesomeIcon className="shieldIcon" icon={faShieldHalved} />
            <SafetyGuide>
              안전한 결제를 위해 위앤비 웹사이트나 앱 외부에서 송금하거나 대화를
              나누지 마세요.
            </SafetyGuide>
          </SafetyGuideWrap>
        </ContactHost>
      </HostInfoContent>
    </HostInfoContainer>
  );
}

export default HostInfo;

const HostInfoContainer = styled.div`
  height: 280px;
  padding: 48px 0;
  border-bottom: 0.8px solid #95a5a6;
`;

const HostInfoTitle = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  margin-bottom: 24px;
`;

const HostInfoProfile = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 16px;
  border-radius: 50%;
  object-fit: cover;
`;

const HostInfoName = styled.div`
  height: 64px;
  line-height: 12px;
`;

const HostName = styled.h2`
  margin: 14px 0 12px;
  color: #222;
  font-size: 22px;
  font-weight: 500;
`;

const MemberSince = styled.p`
  color: #717171;
  font-size: 14px;
`;

const HostInfoContent = styled.div`
  display: flex;
  height: 192px;
`;

const HostDescription = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 40px;
`;

const HostDescriptionNav = styled.div`
  display: flex;
  height: 33px;
`;

const HostRating = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 30px;

  .medalIcon {
    height: 16px;
    margin-right: 10px;
  }
`;

const HostStar = styled.img`
  position: relative;
  bottom: 2px;
  height: 18px;
  margin-right: 10px;
`;

const NumberRatings = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 350;
`;

const HostDescriptionContent = styled.div`
  margin-top: 15px;

  > * {
    margin-bottom: 20px;
  }
`;

const ContentTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
`;

const ContentMain = styled.p`
  color: rgb(113, 113, 113);
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

const ContactHost = styled(HostDescription)`
  margin-left: 20px;
`;

const Responsiveness = styled.div`
  height: 56px;
`;

const RespondPercentage = styled.p`
  margin-bottom: 20px;
`;

const RespondTime = styled(RespondPercentage)``;

const ContactButtonWrap = styled.div`
  height: 48px;
  margin-top: 32px;
`;

const ContactButton = styled.button`
  padding: 13px 23px;
  background: white;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const SafetyGuideWrap = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 32px;
  margin-top: 24px;

  .shieldIcon {
    font-size: 18px;
    margin-right: 16px;
  }
`;

const SafetyGuide = styled.p`
  color: rgb(113, 113, 113);
  font-size: 12px;
`;
