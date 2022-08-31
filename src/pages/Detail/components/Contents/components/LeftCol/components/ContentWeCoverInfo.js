import React from 'react';
import styled from 'styled-components';

function ContentWeCoverInfo() {
  return (
    <WeCoverContainer>
      <We>위</We>
      <WeCoverTitle>커버</WeCoverTitle>
      <WeCoverDescription>
        모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은 경우
        또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이 포함됩니다.
      </WeCoverDescription>
      <SeeMore>더 알아보기</SeeMore>
    </WeCoverContainer>
  );
}

export default ContentWeCoverInfo;

const WeCoverContainer = styled.div`
  height: 123px;
  padding: 32px 0;
  border-bottom: 0.8px solid #95a5a6;
`;

const WeCoverTitle = styled.span`
  margin: 0;
  color: #222;
  font-size: 26px;
  font-weight: 700;
`;

const We = styled(WeCoverTitle)`
  color: #ff385c;
`;

const WeCoverDescription = styled.p`
  margin: 16px 0;
  font-size: 16px;
`;

const SeeMore = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;
