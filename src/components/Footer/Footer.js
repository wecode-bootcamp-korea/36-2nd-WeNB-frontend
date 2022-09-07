import React, { useState } from 'react';
import styled from 'styled-components';

const Footer = () => {
  const [toggle, setToggle] = useState(false);

  const FooterHolder = () => {
    toggle === false ? setToggle(true) : setToggle(false);
  };

  return (
    <div>
      <FooterWrapOn className={toggle === true ? 'on' : ''}>
        <button type="button" className="closeBtn" onClick={FooterHolder}>
          X
        </button>
        <FooterCover>
          <ListWrap>
            <ul>
              <LiTitle>에어비앤비 지원</LiTitle>
              <LiList>도움말 센터</LiList>
              <LiList>에어커버</LiList>
              <LiList>안전 정보</LiList>
              <LiList>장애인 지원</LiList>
              <LiList>예약 취소 옵션</LiList>
              <LiList>에어비앤비의 코로나19 대응 방안</LiList>
              <LiList>이웃 민원 신고</LiList>
            </ul>
          </ListWrap>
          <ListWrap>
            <ul>
              <LiTitle>커뮤니티</LiTitle>
              <LiList>Airbnb.org: 재난 구호 숙소</LiList>
              <LiList>아프간 난민 지원</LiList>
              <LiList>차별 철폐를 위한 노력</LiList>
            </ul>
          </ListWrap>
          <ListWrap>
            <ul>
              <LiTitle>호스팅</LiTitle>
              <LiList>호스팅 시작하기</LiList>
              <LiList>호스트를 위한 에어커버</LiList>
              <LiList>호스팅 자료 둘러보기</LiList>
              <LiList>커뮤니티 포럼 방문하기</LiList>
              <LiList>책임감 있는 호스팅</LiList>
            </ul>
          </ListWrap>
          <ListWrap>
            <ul>
              <LiTitle>에어비앤비</LiTitle>
              <LiList>뉴스룸</LiList>
              <LiList>새로운 기능에 대해 알아보기</LiList>
              <LiList>에어비앤비 공동창업자의 메시지</LiList>
              <LiList>채용정보</LiList>
              <LiList>투자자 정보</LiList>
            </ul>
          </ListWrap>
        </FooterCover>
      </FooterWrapOn>
      <div className="dimmed" />
      <FooterWrap>
        <FooterDown>
          <FooterCopy>
            © 2022 Airbnb, Inc.·개인정보 처리방침·이용약관·사이트맵·한국의
            변경된 환불 정책·회사 세부정보
          </FooterCopy>
          <FooterSide>
            <MyLink href="http://localhost:3000/Footer">◎ 한국어(KR)</MyLink>{' '}
            <MyLink href="http://localhost:3000/Footer">￦KRW</MyLink>{' '}
            <MyBtn type="button" onClick={FooterHolder}>
              지원 및 참고 자료
            </MyBtn>
          </FooterSide>
        </FooterDown>
        <FooterSub>
          언어 선택 한국어 (KR) 통화 선택 ₩ KRW 지원 및 참고 자료 웹사이트
          제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay
          Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell,
          Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 |
          연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스
          제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비
          플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가
          아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트
          서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게
          있습니다.
        </FooterSub>
      </FooterWrap>
    </div>
  );
};
const FooterWrapOn = styled.div`
  height: 0;
  overflow: hidden;
  transition: 1s;
  position: fixed;
  width: 100%;
  bottom: 0;
  background: #fff;
  z-index: 10;
  left: 0;
  border-radius: 20px;

  &.on + .dimmed {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
  }

  &.on {
    height: 327px;
    padding-bottom: 120px;
  }

  & .closeBtn {
    position: absolute;
    top: 27px;
    left: 33px;
    background: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
  }
`;
const FooterCover = styled.div`
  display: flex;
  font-family: inherit;
  justify-content: space-evenly;
`;

const ListWrap = styled.div`
  padding: 26px 26px;
`;

const LiTitle = styled.li`
  font-weight: bold;
  padding: 8px;
  font-size: 17px;
  margin-top: 17px;
`;

const LiList = styled.li`
  padding: 8px;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    text-decoration: underline;
    color: #222222;
  }
`;

const FooterWrap = styled.div`
  position: fixed;
  margin-top: 100px;
  bottom: 0;
  width: 100%;
  left: 0;
  background: #fff;
  padding: 20px 80px;
  z-index: 13;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
`;

const FooterDown = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  line-height: 1.1;
`;

const FooterCopy = styled.div``;

const FooterSide = styled.div`
font-weight: bold;
cursor: pointer;

  &:first-child:before {
    content: '◎';
    position: absolute;
    top: 2px;
    left: -19px;
  }
}

`;
const MyLink = styled.a`
  background: none;
  border: none;
  font-weight: bold;
  color: black;
  font-size: 16px;
  margin-left: 30px;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const MyBtn = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  color: black;
  font-size: 16px;
  margin-left: 30px;
  padding: 0;
  cursor: pointer;
`;
const FooterSub = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  line-height: 1.1;
  border-top: 1px solid black;
  font-size: 13px;
`;

export default Footer;
