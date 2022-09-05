import React from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';

const Login = ({ onSetIsLoginVisible, onSetSingupVisible, type }) => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

  return (
    <LoginModalWrap>
      <LoginTitle>
        <LoginExitBtn
          onClick={() =>
            type === 'login' ? onSetIsLoginVisible() : onSetSingupVisible()
          }
        >
          ✕
        </LoginExitBtn>
        {type === 'login' ? <p>로그인</p> : <p>회원가입</p>}
      </LoginTitle>
      <LoginMainWrap>
        <LoginText>
          <LoginTextStrong>위엔비</LoginTextStrong>에 오신 것을 환영합니다.
        </LoginText>
        <LoginKakakoWrap href={KAKAO_AUTH_URL}>
          <LoginKakaoImg src="images/login/kakaoLogo.png" alt="kakao logo" />
          <LoinBtnText>
            카카오톡으로 {type === 'login' ? '로그인' : '회원가입'}하기
          </LoinBtnText>
        </LoginKakakoWrap>
      </LoginMainWrap>
    </LoginModalWrap>
  );
};

export default Login;

const LoginModalWrap = styled.div`
  ${variables.flex('column', 'center', 'center')}
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  border: 1px solid #e8e8e8;
  background-color: white;
  overflow: hidden;
  z-index: 4;
`;

const LoginTitle = styled.div`
  ${variables.flex('row', 'center', 'center')}
  position: relative;
  height: 64px;
  width: 586px;
  padding: 0 24px;
  border-bottom: 1px solid #e8e8e8;
  font-size: 18px;
  font-weight: bold;
`;

const LoginExitBtn = styled.p`
  position: absolute;
  left: 24px;
  font-size: 20px;
  cursor: pointer;
`;

const LoginMainWrap = styled.div`
  ${variables.flex('column', null, null)}
  width: 586px;
  padding: 24px;
`;

const LoginText = styled.div`
  display: flex;
  padding: 20px 0;
  font-size: 22px;
  font-weight: 500;
`;
const LoginTextStrong = styled.p`
  color: ${({ theme }) => theme.RedButton};
  font-weight: 800;
`;
const LoginKakakoWrap = styled.a`
  ${variables.flex('row', null, 'center')}
  text-decoration: none;
  height: 60px;
  padding: 8px 23px;
  margin: 20px 0;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const LoginKakaoImg = styled.img`
  width: 30px;
  height: 30px;
`;
const LoinBtnText = styled.p`
  width: 452px;
  color: black;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;
