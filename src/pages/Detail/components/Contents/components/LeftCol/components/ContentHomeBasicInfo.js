import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faDoorClosed,
  faMedal,
} from '@fortawesome/free-solid-svg-icons';

function ContentHomeBasicInfo() {
  return (
    <ContentBasicInfo>
      {HOME_BASIC_INFO.map(info => (
        <ContentInfo key={info.id}>
          <FontAwesomeIcon className="icon" icon={info.icon} />
          <DescriptionContainer>
            <Description>{info.description}</Description>
            <SubDescription>{info.subdescription}</SubDescription>
          </DescriptionContainer>
        </ContentInfo>
      ))}
    </ContentBasicInfo>
  );
}

export default ContentHomeBasicInfo;

const ContentBasicInfo = styled.div`
  height: 200px;
  padding: 32px 0;
  border-bottom: 0.8px solid #95a5a6;
`;

const ContentInfo = styled.div`
  display: flex;
  height: 44px;
  justify-content: flex-start;
  align-items: center;

  .icon {
    font-size: 16px;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const DescriptionContainer = styled.div`
  margin-left: 16px;
`;

const Description = styled.p`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 600;
`;

const SubDescription = styled.p`
  color: rgb(113, 113, 113);
  font-size: 14px;
  font-weight: 400;
`;

const HOME_BASIC_INFO = [
  {
    id: 1,
    icon: faDesktop,
    description: '업무 전용 공간',
    subdescription: '와이파이를 갖추고 업무에 적합한 공간입니다.',
  },
  {
    id: 2,
    icon: faDoorClosed,
    description: '셀프 체크인',
    subdescription: '키패드를 이용해 체크인하세요.',
  },
  {
    id: 3,
    icon: faMedal,
    description: 'Uniyul님은 슈퍼호스트입니다',
    subdescription:
      '슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.',
  },
];
