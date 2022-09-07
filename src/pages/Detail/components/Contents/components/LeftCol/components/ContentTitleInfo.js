import React from 'react';
import styled from 'styled-components';

function ContentTitleInfo() {
  return (
    <ContentTitleContainer>
      <ContentTitle>Uniyul님이 호스팅하는 공동 주택 전체</ContentTitle>
      <ContentHostProfile
        src="/images/Detail/hostProfile.jpg"
        alt="hostProfile"
      />
    </ContentTitleContainer>
  );
}

export default ContentTitleInfo;

const ContentTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 48px 0 24px;
  border-bottom: 0.8px solid #95a5a6;
`;

const ContentTitle = styled.h2`
  color: #222;
  font-weight: 500;
  font-size: 22px;
`;

const ContentHostProfile = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
`;
